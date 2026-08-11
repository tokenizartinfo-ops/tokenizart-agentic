import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REQUIRED_FILES = [
  "LICENSE",
  "LICENSES/CC-BY-4.0.txt",
  "NOTICE",
  "LICENSE-POLICY.md",
  "TRADEMARKS.md",
  "DATA-AND-ASSETS-POLICY.md",
  "API-TERMS.md",
  "COMMERCIAL-LICENSING.md",
  "okf/LICENSE.md",
  "okf/v0.2/manifest.json",
];

const REQUIRED_SKILLS = [
  "skills/tokenizart-public-knowledge/SKILL.md",
  "skills/tokenizart-gallery-traceability/SKILL.md",
  "skills/tokenizart-demo-atelier/SKILL.md",
];

const IGNORED_DIRECTORIES = new Set([".git", "node_modules"]);
const TEXT_EXTENSIONS = new Set([".js", ".json", ".md", ".mjs", ".txt", ".yaml", ".yml"]);

function normalized(relativePath) {
  return relativePath.split(path.sep).join("/");
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function walk(root, current = root) {
  const output = [];
  for (const entry of await fs.readdir(current, { withFileTypes: true })) {
    if (entry.isDirectory() && IGNORED_DIRECTORIES.has(entry.name)) continue;
    const absolute = path.join(current, entry.name);
    if (entry.isDirectory()) output.push(...await walk(root, absolute));
    else output.push({ absolute, relative: normalized(path.relative(root, absolute)) });
  }
  return output;
}

export function scanTextForLeaks(text, relativePath) {
  const findings = [];
  const patterns = [
    [/(?:^|\n)\s*(?:OPENAI|CLOUDFLARE|PINATA|PIMLICO|TOKENIZART)[A-Z0-9_]*(?:_KEY|_SECRET|_TOKEN)\s*=\s*\S+/i, "secret assignment"],
    [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/i, "private key"],
    [/\b(?:sk|pk)_(?:live|prod)_[A-Za-z0-9_-]{12,}\b/i, "secret token"],
    [/[A-Za-z]:\\Users\\[^\s"']+/i, "local path"],
    [/\/home\/(?!tokenizart-public\b)[^\s"']+/i, "local path"],
    [/owner_context\s*:\s*\{[^}]*\bemail\s*:/is, "owner data"],
  ];
  for (const [pattern, label] of patterns) {
    if (pattern.test(text)) findings.push(`${relativePath}: ${label} detected`);
  }
  return findings;
}

export function validateSkillDocument(text, relativePath) {
  const errors = [];
  const frontmatter = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatter) return [`${relativePath}: valid YAML frontmatter is required`];
  if (!/^name:\s*[a-z0-9-]+\s*$/m.test(frontmatter[1])) {
    errors.push(`${relativePath}: lowercase hyphenated name is required`);
  }
  if (!/^description:\s*Use when\b.{10,}$/m.test(frontmatter[1])) {
    errors.push(`${relativePath}: description must start with Use when`);
  }
  if (!/\bAccess:\s*Nivel 5\b/i.test(text)) {
    errors.push(`${relativePath}: explicit Nivel 5 access is required`);
  }
  if (!/\bMode:\s*read-only\b/i.test(text)) {
    errors.push(`${relativePath}: explicit read-only mode is required`);
  }
  if (!/Never execute Mint, Certify, transfers, voucher changes, privacy changes,[\s\S]*NFC binding, uploads or wallet signing\./i.test(text)) {
    errors.push(`${relativePath}: complete mutation denial is required`);
  }
  return errors;
}

function validateOkfConcept(text, relativePath) {
  const errors = [];
  if (!/^status:\s*stable\s*$/m.test(text)) errors.push(`${relativePath}: OKF status must be stable`);
  if (!/^verified:\s*\{\s*by:\s*process:tokenizart-curation,/m.test(text)) {
    errors.push(`${relativePath}: OKF verification provenance is required`);
  }
  if (!/^source-sha256:\s*[a-f0-9]{64}\s*$/m.test(text)) {
    errors.push(`${relativePath}: OKF source hash is required`);
  }
  errors.push(...scanTextForLeaks(text, relativePath));
  return errors;
}

export async function validatePublicDistribution(root) {
  const errors = [];
  for (const relativePath of [...REQUIRED_FILES, ...REQUIRED_SKILLS]) {
    if (!await exists(path.join(root, relativePath))) errors.push(`${relativePath}: required file missing`);
  }

  const files = await walk(root);
  for (const file of files) {
    if (file.relative.startsWith("test/")) continue;
    if (!TEXT_EXTENSIONS.has(path.extname(file.relative).toLowerCase()) && path.basename(file.relative) !== "LICENSE") continue;
    const text = await fs.readFile(file.absolute, "utf8");
    errors.push(...scanTextForLeaks(text, file.relative));
    if (path.extname(file.relative).toLowerCase() === ".json") {
      try {
        JSON.parse(text);
      } catch (error) {
        errors.push(`${file.relative}: invalid JSON (${error.message})`);
      }
    }
  }

  let skills = 0;
  for (const relativePath of REQUIRED_SKILLS) {
    const absolute = path.join(root, relativePath);
    if (!await exists(absolute)) continue;
    skills += 1;
    errors.push(...validateSkillDocument(await fs.readFile(absolute, "utf8"), relativePath));
  }

  const conceptFiles = files.filter((file) =>
    file.relative.startsWith("okf/v0.2/") &&
    file.relative.endsWith(".md") &&
    !file.relative.endsWith("/index.md")
  );
  for (const file of conceptFiles) {
    errors.push(...validateOkfConcept(await fs.readFile(file.absolute, "utf8"), file.relative));
  }

  if (conceptFiles.length === 0) errors.push("okf/v0.2: at least one verified concept is required");

  return { errors: [...new Set(errors)].sort(), files: files.length, skills, okfConcepts: conceptFiles.length };
}

async function main() {
  const root = path.resolve(process.argv[2] || path.join(path.dirname(fileURLToPath(import.meta.url)), ".."));
  const result = await validatePublicDistribution(root);
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  process.exitCode = result.errors.length === 0 ? 0 : 1;
}

if (path.resolve(process.argv[1] || "") === fileURLToPath(import.meta.url)) {
  await main();
}

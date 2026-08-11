# Examples

Examples use synthetic identifiers and read-only commands. Configure
credentials through environment variables; never paste secrets into command
arguments, prompts, issue reports or committed files.

```powershell
node bin/tokenizart.js --profile staging --json knowledge search --query "como funciona Mint" --flow mint
node bin/tokenizart.js --profile staging --json gallery artwork-traceability --artwork-ref "atelier:artwork:313"
node bin/tokenizart.js --profile staging --json demo open --flow certify --lang es --scenario first-artwork
```

The CLI does not expose mutation commands.


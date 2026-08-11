import { Client, StreamableHTTPClientTransport } from "@modelcontextprotocol/client";

function parseToolJson(result = {}) {
  const block = Array.isArray(result.content)
    ? result.content.find(item => item?.type === "text")
    : null;
  if (!block?.text) throw new Error("mcp_tool_result_missing_json_text");
  try {
    return JSON.parse(block.text);
  } catch {
    throw new Error("mcp_tool_result_invalid_json");
  }
}

export async function createMcpClient({ endpoint, headers = {} }) {
  const transport = new StreamableHTTPClientTransport(new URL(endpoint), {
    requestInit: { headers },
  });
  const client = new Client({
    name: "tokenizart-official-cli",
    version: "0.1.0",
  }, {
    versionNegotiation: { mode: "auto" },
  });
  await client.connect(transport);
  return {
    async callTool(name, args) {
      return parseToolJson(await client.callTool({ name, arguments: args }));
    },
    async close() {
      await client.close();
    },
  };
}

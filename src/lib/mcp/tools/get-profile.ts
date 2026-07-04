import { defineTool } from "@lovable.dev/mcp-js";


const PROFILE = {
  name: "Алёна Кунилова",
  headline:
    "Head of Content · Head of Marketing & Brand Communications · Content Marketing Lead · B2C & B2B Marketing Lead · Marketing Lead · Growth & Content Lead · PR & Communications Lead · Brand & Content Lead · GTM Lead · Product Marketing Lead",
  summary:
    "Помогаю сложным продуктам находить общий язык с людьми — без официоза, штампов и абстракций. Объясняю, пишу, редактирую, упаковываю и помогаю командам доносить идеи через коммуникацию.",
  domains: [
    "B2B",
    "SaaS",
    "AI",
    "PropTech",
    "Gaming",
    "Blockchain",
    "Web3 / Crypto Acquiring",
    "Digital services",
    "B2C",
    "Media",
  ],
  languages: ["English — C1", "Russian — native"],
  website: "https://alyonakunilova-cv.lovable.app",
};

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Return Alyona Kunilova's professional profile summary: name, headline, positioning, industries, and languages.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(PROFILE, null, 2) }],
    structuredContent: PROFILE,
  }),
});


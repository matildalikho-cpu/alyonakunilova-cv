import { defineTool } from "@lovable.dev/mcp-js";

const EXPERIENCE = [
  {
    company: "Unitify",
    meta: "SaaS для управления недвижимостью — unitify.com",
    period: "нояб. 2025 — н.в.",
    role: "Marketing Executive",
    summary:
      "Международная B2B-коммуникация и digital-продвижение PropTech-продукта: LinkedIn-аутрич (2K+ контактов), Яндекс.Директ / Google Ads / LinkedIn Ads, блог и соцсети, участие в MOVE Summit 2026 и MIPIM 2026.",
  },
  {
    company: "Megamod",
    meta: "Gaming Ecosystem",
    period: "февр. 2022 — нояб. 2025",
    role: "Marketing Executive",
    summary:
      "Международная B2B-коммуникация и партнёрский маркетинг: аналитические брифы для совета директоров и инвесторов, CustDev-воронки (350+ компаний, 2K+ LinkedIn, 500+ email), коммуникация со 100+ инвестфондами.",
  },
  {
    company: "Ridero",
    meta: "Издательская платформа — ridero.ru",
    period: "нояб. 2015 — окт. 2021",
    role: "PR-менеджер",
    summary:
      "Контент-маркетинг, PR и образовательные проекты. 200+ вебинаров и событий, видео- и email-курсы, выставочное направление принесло 30% годовой выручки в 2021.",
  },
  {
    company: "Bosco di Ciliegi",
    meta: "Люксовый ритейл (Боско-Урал)",
    period: "февр. — нояб. 2015",
    role: "Ассистент гендиректора · менеджер по рекламе и маркетингу",
    summary:
      "Локальные маркетинговые коммуникации fashion- и luxury-брендов: Hugo Boss, Armani Collezioni, Etro, Carrera y Carrera.",
  },
  {
    company: "Honeymoon",
    meta: "Свадьбы за границей",
    period: "июль 2010 — дек. 2014",
    role: "Сооснователь · директор по маркетингу",
    summary:
      "Предпринимательский опыт. 320+ свадебных мероприятий в 17 странах.",
  },
  {
    company: "Австралийские каникулы",
    meta: "Туроператор по Австралии и Новой Зеландии",
    period: "февр. 2008 — июль 2009",
    role: "Руководитель московского офиса · директор по маркетингу",
    summary:
      "Запуск и развитие московского офиса туроператора, взаимодействие с посольствами Австралии и Новой Зеландии.",
  },
  {
    company: "Издательский дом «Абак-Пресс»",
    meta: "«Деловой квартал», «Я Покупаю»",
    period: "дек. 2001 — февр. 2008",
    role: "Журналист → Редактор → Бренд-менеджер → Руководитель отдела продвижения",
    summary:
      "Путь от журналиста до руководителя отдела продвижения. Участие в запуске сети журналов «Деловой квартал» в городах-миллионниках.",
  },
];

export default defineTool({
  name: "list_experience",
  title: "List work experience",
  description:
    "Return Alyona Kunilova's work experience: company, period, role, and a short summary of responsibilities and results.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(EXPERIENCE, null, 2) }],
    structuredContent: { experience: EXPERIENCE },
  }),
});

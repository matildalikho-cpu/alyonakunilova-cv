import { createFileRoute, Link } from "@tanstack/react-router";
import { Video } from "lucide-react";

import alenaPhoto from "@/assets/profile-orange.png";
import konturLogo from "@/assets/logo-kontur.png";
import projectKodGoroda from "@/assets/project-kod-goroda.jpg";
import projectSolidarnost from "@/assets/project-solidarnost.jpg";
import projectMampochitaiPoster from "@/assets/project-mampochitai-poster.jpg";
import projectMampochitaiBooks from "@/assets/project-mampochitai-books.jpg";
import projectEkbwalkYard from "@/assets/project-ekbwalk-yard.jpg";
import projectEkbwalkCrowd from "@/assets/project-ekbwalk-crowd.jpg";
import projectKonchalovskyPortrait from "@/assets/project-konchalovsky-portrait.jpg";
import projectMuseumPhoto from "@/assets/project-museum-photo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Алёна Кунилова — Контент-маркетолог, senior" },
      {
        name: "description",
        content:
          "Резюме Алёны Куниловой — контент-маркетолога с опытом в B2B, SaaS, AI, PropTech, Gaming, Blockchain, Digital services, B2C и медиа. Отклик на вакансию в Контур.Толк.",
      },
      { property: "og:title", content: "Алёна Кунилова — Контент-маркетолог в Толк, senior" },
      {
        property: "og:description",
        content: "Помогаю сложным продуктам говорить с аудиторией на понятном языке.",
      },
    ],
  }),
  component: Resume,
});

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground">
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
      {children}
    </h2>
  );
}

type Job = {
  company: string;
  meta?: React.ReactNode;
  period: string;
  role: string;
  body: React.ReactNode;
};

const jobs: Job[] = [
  {
    company: "Unitify",
    meta: (
      <>
        SaaS для управления недвижимостью ·{" "}
        
          href="https://unitify.com/"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
        >
          unitify.com
        </a>
      </>
    ),
    period: "нояб. 2025 — н.в.",
    role: "Marketing Executive",
    body: (
      <>
        <p>Отвечаю за международную B2B-коммуникацию и digital-продвижение PropTech-продукта:</p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li>— LinkedIn-аутрич: сегментация и рост целевой B2B-базы (2K+ контактов), развитие воронки коммуникации, подготовка питчей, автоматизация сообщений и сопровождение лидов от первого контакта до встречи.</li>
          <li>— Запуск и ведение рекламных кампаний в Яндекс.Директ, Google Ads и LinkedIn. За 2 месяца при бюджете ≈ $2,3K — 18K+ кликов и 380+ конверсий; CR в Яндекс.Директ — 2,12%, CTR в Google Ads — до 7,5%, ER в LinkedIn — до 1,4%.</li>
          <li>— Ведение корпоративных соцсетей и <a href="https://unitify.com/en/blog" target="_blank" rel="noreferrer" className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground">блога</a>: контент-план, публикации и развитие <a href="https://www.linkedin.com/company/unitifyandmanage/" target="_blank" rel="noreferrer" className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground">LinkedIn-страницы</a> — органический рост с 10 до 170+ подписчиков за 2 месяца.</li>
          <li>— Подготовка контента и коммуникации для B2B-партнёров и медиа (RU/EN): презентации, рекламные материалы, адаптация и переводы.</li>
          <li>— Организация участия в отраслевых мероприятиях, включая <a href="https://unitify.com/en/blog/key-takeaways-from-move-summit-in-tashkent" target="_blank" rel="noreferrer" className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground">MOVE Summit 2026</a> (Ташкент) и <a href="https://unitify.com/en/blog/what-mipim-2026-revealed-about-ai-in-real-estate" target="_blank" rel="noreferrer" className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground">MIPIM 2026</a> (Канны).</li>
          <li>— Сопровождение переговоров фаундера: follow-up коммуникация, координация договорённостей и партнёрских процессов.</li>
        </ul>
      </>
    ),
  },
  {
    company: "Megamod",
    meta: "Gaming Ecosystem",
    period: "февр. 2022 — нояб. 2025",
    role: "Marketing Executive",
    body: (
      <p className="text-muted-foreground">
        Отвечала за международную B2B-коммуникацию и партнёрский маркетинг: аналитические брифы и отчёты для совета директоров и инвесторов (RU/EN), корпоративные соцсети, блог и датарум. Готовила партнёрские встречи фаундера, работала с международными CustDev-воронками (350+ компаний, 2K+ LinkedIn-контактов, 500+ email). Сопровождала коммуникацию с инвестфондами: аутрич, ньюслеттер, организация встреч для базы из 100+ международных фондов.
      </p>
    ),
  },
  {
    company: "Ridero",
    meta: (
      <>
        Издательская платформа ·{" "}
        
          href="https://ridero.ru/"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
        >
          ridero.ru
        </a>
      </>
    ),
    period: "нояб. 2015 — окт. 2021",
    role: "PR-менеджер",
    body: (
      <p className="text-muted-foreground">
        Контент-маркетинг, PR и образовательные проекты платформы: блог, email-рассылки, корпоративные соцсети, вебинары и партнёрские проекты. Квартальные аналитические отчёты для совета директоров, совместный маркетинг с партнёрами, PR-коммуникация — пресс-релизы, СМИ, материалы для спикеров. Организовала и провела 200+ вебинаров и образовательных событий, продюсировала видео- и email-курсы. Запустила выставочное направление, которое в 2021 году принесло компании 30% от общей ежегодной выручки. Придумала и организовала работу блогерского жюри в рамках партнёрства с литературной премией для молодых авторов «Лицей».
      </p>
    ),
  },
  {
    company: "Bosco di Ciliegi",
    meta: "Люксовый ритейл («Боско–Урал»)",
    period: "февр. — нояб. 2015",
    role: "Ассистент гендиректора · менеджер по рекламе и маркетингу",
    body: (
      <p className="text-muted-foreground">
        Локальные маркетинговые коммуникации fashion- и luxury-брендов: Hugo Boss, Armani Collezioni, Etro, Carrera y Carrera. Размещение рекламы в глянце и наружке, клиентские мероприятия (презентации, показы, выставки), коммуникация и перевод на международных тренингах брендов (EN/RU), мероприятия с участием селебрити и бренд-амбассадоров в Екатеринбурге.
      </p>
    ),
  },
  {
    company: "Honeymoon",
    meta: "Свадьбы за границей",
    period: "июль 2010 — дек. 2014",
    role: "Сооснователь · директор по маркетингу",
    body: (
      <p className="text-muted-foreground">
        Предпринимательский опыт: вместе с партнёром развивала агентство свадеб и мероприятий за границей. Отвечала за продукт, клиентский сервис и маркетинг, стратегию продвижения, соцсети, рекламу, B2B-переговоры с международными партнёрами (EN). Организовала 320+ свадебных мероприятий в 17 странах мира.
      </p>
    ),
  },
  {
    company: "«Австралийские каникулы»",
    meta: "Туроператор по Австралии и Новой Зеландии",
    period: "февр. 2008 — июль 2009",
    role: "Руководитель московского офиса · директор по маркетингу",
    body: (
      <p className="text-muted-foreground">
        Запуск и развитие московского офиса туроператора: маркетинг, продажи, соцсети и блог, коммуникация с клиентами и партнёрами, взаимодействие с посольствами Австралии и Новой Зеландии по вопросам визовой поддержки и совместных проектов.
      </p>
    ),
  },
  {
    company: "Издательский дом «Абак-Пресс»",
    meta: "«Деловой квартал», «Я Покупаю»",
    period: "дек. 2001 — февр. 2008",
    role: "Журналист → Редактор → Бренд-менеджер → Руководитель отдела продвижения → Менеджер онлайн-портала",
    body: (
      <p className="text-muted-foreground">
        Прошла путь от журналиста до руководителя отдела продвижения в одном из крупнейших региональных медиахолдингов. Была частью управляющей команды «Делового квартала» — участвовала в запуске сети журналов в городах-миллионниках: Челябинск, Новосибирск, Рос

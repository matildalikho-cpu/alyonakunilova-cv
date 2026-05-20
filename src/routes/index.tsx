import { createFileRoute, Link } from "@tanstack/react-router";
import alenaPhoto from "@/assets/alena.png";
import konturLogo from "@/assets/logo-kontur.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Алёна Кунилова — Контент-маркетолог, senior" },
      {
        name: "description",
        content:
          "Резюме Алёны Куниловой — контент-маркетолога с опытом в B2B, SaaS, AI, PropTech, Gaming и Blockchain. Отклик на вакансию в Контур.Толк.",
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
        <a
          href="https://unitify.com/"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
        >
          unitify.com
        </a>
      </>
    ),
    period: "ноябрь 2025 — н.в.",
    role: "Marketing Executive",
    body: (
      <>
        <p>Отвечаю за международную B2B-коммуникацию и digital-продвижение PropTech-продукта:</p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li>— LinkedIn-аутрич: рост и сегментация целевой B2B-базы (2K+ контактов), развитие воронки коммуникации, подготовка питчей, автоматизация сообщений и сопровождение лидов от первого контакта до встречи.</li>
          <li>— Запуск и ведение рекламных кампаний в Яндекс.Директ, Google Ads и LinkedIn. За 2 месяца при бюджете ≈ $2,3K — 18K+ кликов и 380+ конверсий; CR в Яндекс.Директ — 2,12%, CTR в Google Ads — до 7,5%, ER в LinkedIn — до 1,4%.</li>
          <li>— Ведение корпоративных соцсетей и блога: контент-план, публикации и развитие LinkedIn-страницы — органический рост с 10 до 170+ подписчиков за 2 месяца.</li>
          <li>— Подготовка контента и коммуникации для B2B-партнёров и медиа (RU/EN): презентации, материалы, адаптация и переводы.</li>
          <li>— Организация участия в отраслевых мероприятиях, включая MOVE Summit 2026 (Ташкент) и MIPIM 2026 (Канны).</li>
          <li>— Сопровождение переговоров фаундера: follow-up, координация договорённостей и партнёрских процессов.</li>
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
        Отвечала за международную B2B-коммуникацию и партнёрский маркетинг: аналитические брифы и отчёты для совета директоров и инвесторов (RU/EN), корпоративные соцсети, блог и датарум. Готовила и сопровождала кастдевы фаундера, работала с международными партнёрскими и CustDev-воронками (350+ компаний, 2K+ LinkedIn-контактов, 500+ email). Сопровождала коммуникацию с инвестфондами: аутрич, ньюслеттер, организация встреч для базы из 100+ международных фондов.
      </p>
    ),
  },
  {
    company: "Ridero",
    meta: (
      <>
        Издательская платформа ·{" "}
        <a
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
        Контент-маркетинг, PR и образовательные проекты платформы: блог, email-рассылки, корпоративные соцсети, вебинары и партнёрские проекты. Квартальные аналитические отчёты для совета директоров, совместный маркетинг с партнёрами, PR-коммуникация — пресс-релизы, СМИ, материалы для спикеров. Организовала и провела 200+ вебинаров и образовательных событий, работала над видеокурсами и email-программами.
      </p>
    ),
  },
  {
    company: "Bosco di Ciliegi",
    meta: "Люксовый ритейл (Bosco-Ural)",
    period: "февр. — нояб. 2015",
    role: "Ассистент гендиректора · менеджер по рекламе и маркетингу",
    body: (
      <p className="text-muted-foreground">
        Локальные маркетинговые коммуникации fashion- и luxury-брендов: Hugo Boss, Armani, Etro, Carrera y Carrera. Размещение рекламы в глянце и наружке, клиентские мероприятия (презентации, показы, выставки), коммуникация и перевод на международных тренингах (EN/RU), мероприятия с участием селебрити и бренд-амбассадоров в Екатеринбурге.
      </p>
    ),
  },
  {
    company: "Honeymoon Travel",
    meta: "Свадьбы за границей",
    period: "июль 2010 — дек. 2014",
    role: "Сооснователь · директор по маркетингу",
    body: (
      <p className="text-muted-foreground">
        Предпринимательский опыт: вместе с партнёром развивала агентство свадеб и мероприятий за границей. Отвечала за развитие продукта, клиентский сервис и маркетинг, стратегию продвижения, соцсети, рекламу, B2B-переговоры с международными партнёрами (EN). Участвовала в организации 320+ международных event-проектов.
      </p>
    ),
  },
  {
    company: "Australia Holidays",
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
    company: "Abak-Press Media",
    meta: "«Деловой квартал», «Я Покупаю»",
    period: "дек. 2001 — февр. 2008",
    role: "Журналист → Редактор → Бренд-менеджер → Руководитель отдела маркетинга → Менеджер онлайн-портала",
    body: (
      <p className="text-muted-foreground">
        Прошла путь от журналиста до руководителя отдела маркетинга в одном из крупнейших региональных медиахолдингов. Была частью управляющей команды «Делового квартала» — участвовала в запуске сети журналов в городах-миллионниках: Челябинск, Новосибирск, Ростов-на-Дону, Красноярск. Ранее — репортёр «Коммерсантъ-Урал», копирайтер в бюро паблисити и PR «КБ-32».
      </p>
    ),
  },
];

const skillGroups = [
  { title: "Стратегия", items: ["Контент-стратегия", "Контентные воронки", "ABM-контент", "GTM-запуски"] },
  { title: "Каналы", items: ["Email-маркетинг", "Соцсети", "Блог / SEO", "Лендинги", "Вебинары", "PR и СМИ"] },
  { title: "Производство", items: ["Редактура", "Копирайтинг", "Управление подрядчиками", "ИИ-инструменты"] },
  { title: "Языки", items: ["Английский — C1", "Русский — родной"] },
];

const education = [
  { place: "МГИМО", what: "Международный маркетинг", note: "профпереподготовка · отлично" },
  { place: "ИМС, Екатеринбург", what: "Связи с общественностью", note: "специалист · отлично" },
  { place: "УГТУ–УПИ (УрФУ)", what: "Менеджмент", note: "квалификация: менеджер · отлично" },
  { place: "ИМС, Екатеринбург", what: "Переводчик в сфере профессиональной коммуникации", note: "повышение квалификации" },
];

const projects: React.ReactNode[] = [
  <>
    Редактор проекта{" "}
    <a
      href="https://xn--80ahlaacrtdbfqgfdien0v.xn--p1ai/"
      target="_blank"
      rel="noreferrer"
      className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
    >
      «История солидарности»
    </a>{" "}
    — книга и сайт о комьюнити Екатеринбурга (2021)
  </>,
  "Редактор проекта «Код города» — книга о ДНК Екатеринбурга (2022)",
  "Редактор: Продюсерский центр Андрея Кончаловского, Музей истории Екатеринбурга (2021–2022)",
  <>
    Участник сообщества «Екб_гуляем», автор городских прогулок и паблика{" "}
    <a
      href="https://t.me/ulitsabazhova"
      target="_blank"
      rel="noreferrer"
      className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
    >
      «Улица Бажова»
    </a>
  </>,
];

function Resume() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={konturLogo} alt="Контур" className="h-7 w-auto" />
            <a
              href="https://kontur.ru/career/vacancies/5737#ResumeForm"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
            >
              К вакансии →
            </a>
          </div>
          <nav className="hidden items-center gap-x-5 gap-y-2 text-sm text-muted-foreground md:flex md:flex-wrap md:justify-end">
            <a href="#about" className="transition-colors hover:text-foreground">О себе</a>
            <a href="#experience" className="transition-colors hover:text-foreground">Опыт работы</a>
            <a href="#skills" className="transition-colors hover:text-foreground">Навыки</a>
            <a href="#education" className="transition-colors hover:text-foreground">Образование</a>
            <a href="#projects" className="transition-colors hover:text-foreground">Проекты</a>
            <a href="#motivation" className="transition-colors hover:text-foreground">Мотивация и рекомендации</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-20 md:pt-20">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span>Резюме</span>
          <span>→</span>
          <span>Маркетинг</span>
          <span>→</span>
          <span className="text-foreground">Контент-маркетолог в Толк, senior</span>
        </div>

        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          <div>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Алёна Кунилова
            </h1>
            <p className="mt-6 text-2xl text-muted-foreground md:text-3xl">
              Контент-маркетолог в Толк, <span className="text-foreground">senior</span>
            </p>
            <p className="mt-8 max-w-2xl text-lg text-foreground/80">
              Специалист по маркетинговым коммуникациям с опытом в B2B, SaaS, AI, PropTech,
              Gaming, Blockchain, Digital services и B2C.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/chatgpt"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:opacity-90"
              >
                Что говорит про меня ChatGPT →
              </Link>
            </div>
          </div>

          <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-[2rem] bg-[var(--kontur-orange)] md:h-80 md:w-80">
            <img
              src={alenaPhoto}
              alt="Алёна Кунилова"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionTitle>О себе</SectionTitle>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Lead quote */}
            <div className="rounded-3xl border border-border bg-background p-8 md:p-10 lg:col-span-2">
              <p className="text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl">
                Помогаю сложным продуктам говорить с аудиторией на понятном языке — без
                официоза, штампов и абстракций.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-foreground/75">
                Объясняю, пишу, редактирую, упаковываю и помогаю команде доносить идеи через
                тексты во всех возможных форматах.
              </p>
            </div>

            {/* Mini facts */}
            <div className="flex flex-col gap-4">
              <div className="rounded-3xl border border-border bg-background p-6">
                <div className="text-4xl font-bold tracking-tight">24+</div>
                <div className="mt-2 text-sm text-muted-foreground">года в коммуникациях и медиа</div>
              </div>
              <div className="rounded-3xl border border-border bg-background p-6">
                <div className="text-4xl font-bold tracking-tight">B2B · SaaS · AI</div>
                <div className="mt-2 text-sm text-muted-foreground">PropTech, Gaming, Blockchain, Digital services, B2C</div>
              </div>
              <div className="rounded-3xl border border-[var(--kontur-green)] bg-[var(--kontur-green)]/15 p-6">
                <div className="text-sm font-medium uppercase tracking-wider text-foreground/70">Сейчас</div>
                <div className="mt-2 text-lg font-semibold">
                  Соло-маркетолог в международной PropTech-платформе
                </div>
              </div>
            </div>
          </div>

          {/* Origin + path */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-background p-8">
              <div className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Откуда я
              </div>
              <p className="text-lg leading-relaxed text-foreground/85">
                Свою карьеру начинала как копирайтер и журналист деловых изданий — отсюда
                привычка слышать тон, искать факт и собирать смысл из шума.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-background p-8">
              <div className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Как работаю
              </div>
              <p className="text-lg leading-relaxed text-foreground/85">
                В больших корпорациях, в стартапах и самостоятельно. С кросс-функциональными
                командами, подрядчиками, разработчиками, топ-менеджерами и фаундерами — со
                всеми нахожу общий язык и легко осваиваю новый контекст.
              </p>
            </div>
          </div>

          {/* What I love + current role */}
          <div className="mt-6 grid gap-6 md:grid-cols-5">
            <div className="rounded-3xl border border-border bg-background p-8 md:col-span-2">
              <div className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Что люблю
              </div>
              <p className="text-lg leading-relaxed text-foreground/85">
                Интеллектуальные задачи, где нужно быстро разобраться в теме и превратить хаос
                в систему. Комфортна как работа с конкретной зоной ответственности, так и
                многозадачные роли.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-background p-8 md:col-span-3">
              <div className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Сегодня
              </div>
              <p className="text-lg leading-relaxed text-foreground/85">
                Соло-маркетолог в команде международной платформы для управдомов и
                управляющих компаний. Отвечаю за маркетинговые коммуникации: контент для блога
                и соцсетей, презентационные материалы, лидогенерацию, ивенты, скрипты для
                продаж и коммерческие предложения. Активно использую AI-инструменты в работе —
                для текстов, изображений, видео, дизайна, лендингов.
              </p>
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-foreground px-5 py-4 text-background">
                <span className="text-2xl">💬</span>
                <p className="text-base">
                  И да — для созвонов внутри команды мы сейчас используем именно{" "}
                  <span className="font-semibold">«Толк»</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-20">
        <SectionTitle>Опыт работы</SectionTitle>
        <div className="space-y-5">
          {jobs.map((job) => (
            <article
              key={job.company + job.period}
              className="rounded-3xl border border-border bg-card p-8 transition-colors hover:bg-secondary md:p-10"
            >
              <div className="flex flex-col gap-2 border-b border-border pb-5 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground md:text-3xl">{job.company}</h3>
                  {job.meta && <p className="mt-1 text-muted-foreground">{job.meta}</p>}
                </div>
                <span className="shrink-0 text-sm text-muted-foreground">{job.period}</span>
              </div>
              <p className="mt-5 text-lg font-medium text-foreground">{job.role}</p>
              <div className="mt-4 text-base leading-relaxed">{job.body}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-20 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionTitle>Навыки</SectionTitle>
          <div className="grid gap-8 md:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.title} className="rounded-3xl border border-border bg-background p-8">
                <h3 className="mb-5 text-xl font-bold">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <Pill key={i}>{i}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-20">
        <SectionTitle>Образование</SectionTitle>
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e) => (
            <div key={e.place + e.what} className="rounded-3xl border border-border bg-card p-7">
              <h3 className="text-xl font-bold">{e.place}</h3>
              <p className="mt-2 text-foreground/85">{e.what}</p>
              <p className="mt-3 text-sm text-muted-foreground">{e.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionTitle>Проекты</SectionTitle>
          <ul className="space-y-4">
            {projects.map((p, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-border bg-background p-6 text-lg text-foreground/85"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--kontur-green)]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Motivation */}
      <section id="motivation" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-20">
        <SectionTitle>Мотивация и рекомендации</SectionTitle>
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <p className="text-xl leading-relaxed text-foreground/90">
            Мне близки ценности <span className="font-semibold">«Контура»</span> и интересен
            продукт. Думаю, что смогу здесь применить весь свой профессионализм и опыт, быстро
            стартовать в роли и эффективно решать задачи бизнеса. Среди моих экс-коллег есть те,
            кто сейчас или раньше работал в «Контуре», и они будут рады меня рекомендовать.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            А пока — чтобы дать более живое представление обо мне как специалисте и человеке —
            я попросила ChatGPT, с которым мы ежедневно работаем над проектами, рассказать про
            меня подробнее.
          </p>
          <Link
            to="/chatgpt"
            className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Прочитать рассказ ChatGPT →
          </Link>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
          Резюме · Алёна Кунилова · {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

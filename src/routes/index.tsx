import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

import alenaPhoto from "@/assets/profile-orange.png";
import projectKodGoroda from "@/assets/project-kod-goroda.jpg";
import projectSolidarnost from "@/assets/project-solidarnost.jpg";
import projectMampochitaiPoster from "@/assets/project-mampochitai-poster.jpg";
import projectMampochitaiBooks from "@/assets/project-mampochitai-books.jpg";
import projectEkbwalkYard from "@/assets/project-ekbwalk-yard.jpg";
import projectEkbwalkCrowd from "@/assets/project-ekbwalk-crowd.jpg";
import projectKonchalovskyPortrait from "@/assets/project-konchalovsky-portrait.jpg";
import projectMuseumPhoto from "@/assets/project-museum-photo.jpg";

export const Route = createFileRoute("/")({
  component: Resume,
});

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground">{children}</span>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{children}</h2>;
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
    meta: <><span>SaaS для управления недвижимостью · </span><a href="https://unitify.com/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">unitify.com</a></>,
    period: "нояб. 2025 — н.в.",
    role: "Marketing Lead",
    body: (
      <div>
        <p>Отвечаю за международную B2B-коммуникацию и digital-продвижение PropTech-продукта:</p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li>— LinkedIn-аутрич: сегментация и рост целевой B2B-базы (2K+ контактов), развитие воронки коммуникации, подготовка питчей, автоматизация сообщений и сопровождение лидов от первого контакта до встречи.</li>
          <li>— Запуск и ведение рекламных кампаний в Яндекс.Директ, Google Ads и LinkedIn. За 2 месяца при бюджете ≈ $2,3K — 18K+ кликов и 380+ конверсий; CR в Яндекс.Директ — 2,12%, CTR в Google Ads — до 7,5%, ER в LinkedIn — до 1,4%.</li>
          <li>— Ведение корпоративных соцсетей и <a href="https://unitify.com/en/blog" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">блога</a>: контент-план, публикации и развитие <a href="https://www.linkedin.com/company/unitifyandmanage/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">LinkedIn-страницы</a> — органический рост с 10 до 170+ подписчиков за 2 месяца.</li>
          <li>— Подготовка контента и коммуникации для B2B-партнёров и медиа (RU/EN): презентации, рекламные материалы, адаптация и переводы.</li>
          <li>— Организация участия в отраслевых мероприятиях, включая <a href="https://unitify.com/en/blog/key-takeaways-from-move-summit-in-tashkent" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">MOVE Summit 2026</a> (Ташкент),&nbsp;<a href="https://unitify.com/en/blog/what-mipim-2026-revealed-about-ai-in-real-estate" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">MIPIM 2026</a> (Канны) и Realty Forum Batumi.</li>
          <li>— Сопровождение переговоров фаундера: follow-up коммуникация, координация договорённостей и партнёрских процессов.</li>
        </ul>
      </div>
    ),
  },
  {
    company: "Megamod",
    meta: "Игровое издательство",
    period: "февр. 2022 — нояб. 2025",
    role: "Marketing Communications Executive",
    body: <p className="text-muted-foreground">Отвечала за международную B2B-коммуникацию и партнёрский маркетинг: аналитические брифы и отчёты для совета директоров и инвесторов (RU/EN), корпоративные соцсети, блог и датарум. Готовила партнёрские встречи фаундера, работала с международными CustDev-воронками (350+ компаний, 2K+ LinkedIn-контактов, 500+ email). Сопровождала коммуникацию с инвестфондами: аутрич, ньюслеттер, организация встреч для базы из 100+ международных фондов. Работала также в проектной группе издательства по привлечению инфлюенсеров (Youtube, Twitch).&nbsp;</p>,
  },
  {
    company: "Ridero",
    meta: <><span>Издательская платформа · </span><a href="https://ridero.ru/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">ridero.ru</a></>,
    period: "нояб. 2015 — окт. 2021",
    role: "PR-директор",
    body: <p className="text-muted-foreground">Контент-маркетинг, PR и образовательные проекты платформы: блог, email-рассылки, корпоративные соцсети, вебинары и партнёрские проекты. Квартальные аналитические отчёты для совета директоров, совместный маркетинг с партнёрами, PR-коммуникация — пресс-релизы, СМИ, материалы для спикеров. Организовала и провела 200+ вебинаров и образовательных событий, продюсировала видео- и email-курсы. Запустила выставочное направление, которое в 2021 году принесло компании 30% от общей ежегодной выручки.</p>,
  },
  {
    company: "Bosco di Ciliegi",
    meta: "Люксовый ритейл («Боско–Урал»)",
    period: "февр. — нояб. 2015",
    role: "Менеджер по рекламе и маркетингу",
    body: <p className="text-muted-foreground">Локальные маркетинговые коммуникации fashion- и luxury-брендов: Hugo Boss, Armani Collezioni, Etro, Carrera y Carrera. Размещение рекламы в глянце и наружке, клиентские мероприятия (презентации, показы, выставки), коммуникация и перевод на международных тренингах брендов (EN/RU).</p>,
  },
  {
    company: "Honeymoon",
    meta: "Свадьбы за границей",
    period: "июль 2010 — дек. 2014",
    role: "Сооснователь · Директор по маркетингу",
    body: <p className="text-muted-foreground">Предпринимательский опыт: вместе с партнёром развивала агентство свадеб и мероприятий за границей. Отвечала за продукт, клиентский сервис и маркетинг, стратегию продвижения, соцсети, рекламу, B2B-переговоры with международными партнёрами (EN). Организовала 320+ свадебных мероприятий в 17 странах мира.</p>,
  },
  {
    company: "«Австралийские каникулы»",
    meta: "Туроператор по Австралии и Новой Зеландии",
    period: "февр. 2008 — июль 2009",
    role: "Руководитель московского офиса · Директор по маркетингу",
    body: <p className="text-muted-foreground">Запуск и развитие московского офиса туроператора: маркетинг, продажи, соцсети и блог, коммуникация с клиентами и партнёрами, взаимодействие с посольствами Австралии и Новой Зеландии по вопросам визовой поддержки и совместных проектов.</p>,
  },
  {
    company: "Издательский дом «Абак-Пресс»",
    meta: "«Деловой квартал», «Я Покупаю»",
    period: "дек. 2001 — февр. 2008",
    role: "Журналист → Редактор → Бренд-менеджер → Руководитель отдела продвижения → Менеджер онлайн-портала",
    body: <p className="text-muted-foreground">Прошла путь от журналиста до руководителя отдела продвижения в одном из крупнейших региональных медиахолдингов. Была частью управляющей команды «Делового квартала» — участвовала в запуске сети журналов в городах-миллионниках: Челябинск, Новосибирск, Ростов-на-Дону, Красноярск.</p>,
  },
];

const skillGroups = [
  { title: "Стратегия", items: ["Контент-стратегия", "Контентные воронки", "ABM-контент", "GTM-запуски"] },
  { title: "Каналы", items: ["Email-маркетинг", "Соцсети", "Блог / SEO", "Лендинги", "Ивенты", "PR и СМИ"] },
  { title: "Продакшн", items: ["Редактура", "Копирайтинг", "ИИ-инструменты", "Продюсирование образовательных продуктов", "Ивент-менеджмент"] },
  { title: "Языки", items: ["Английский — C1", "Русский — родной"] },
];

function Spoiler({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = React.useState(false);
  return (
    <span
      role="button"
      tabIndex={0}
      onClick={() => setRevealed((v) => !v)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setRevealed((v) => !v); } }}
      className={`cursor-pointer transition-all ${revealed ? "text-inherit" : "text-muted-foreground/25 select-none"}`}
      title={revealed ? "Скрыть" : "Показать"}
    >
      {children}
    </span>
  );
}

const education: { place: React.ReactNode; what: string; note: string }[] = [
  { place: "МГИМО", what: "Международный маркетинг", note: "профессиональная переподготовка · отлично" },
  { place: "Институт Международных Связей", what: "Связи с общественностью", note: "специалист · отлично" },
  { place: "УГТУ–УПИ (УрФУ)", what: "Менеджмент", note: "специалист · отлично" },
  { place: "Институт Международных Связей", what: "Переводчик в сфере профессиональной коммуникации", note: "повышение квалификации" },
  { place: <Spoiler>Свободный университет</Spoiler>, what: "Урбанистика и социология городов", note: "слушатель" },
];


const projects: React.ReactNode[] = [
  <span>Куратор/Продюсер/Лектор: Музей истории Екатеринбурга (проект <a href="https://youtu.be/72W1vbg3erE" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">«Лаборатория воспоминаний»</a>) (2019 – 2022)</span>,
  <span>Редактор проекта <a href="https://xn--80ahlaacrtdbfqgfdien0v.xn--p1ai/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">«История солидарности»</a> — книга и сайт о комьюнити Екатеринбурга (2021)</span>,
  <span>Партнёр по рекламным интеграциям и коллаборациям: подкаст <a href="https://www.instagram.com/podcastmampochitai/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">«Мам, почитай»</a> (2021 – 2022)</span>,
  <span>Редактор: Продюсерский центр Андрея Кончаловского (проект <a href="https://vk.com/istoriya_ot_pervogo_lica" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">«Истории от первого лица»</a>) (2021)</span>,
  <span>Редактор проекта «Код города» — книга о ДНК Екатеринбурга (готовится к изданию)</span>,
  <span>Участник сообщества <a href="https://t.me/ekbwalk" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">«Екб_гуляем»</a>, автор городских прогулок и паблика <a href="https://t.me/ulitsabazhova" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">«Улица Бажова»</a></span>,
];

const images = [
  { src: projectSolidarnost, alt: "«История солидарности» — книга" },
  { src: projectKodGoroda, alt: "«Код города. Екатеринбург» — книга" },
  { src: projectMampochitaiPoster, alt: "Афиша подкаста «Мам, почитай»" },
  { src: projectMampochitaiBooks, alt: "Книги подкаста «Мам, почитай»" },
  { src: projectEkbwalkYard, alt: "Прогулка во дворе с Екб_гуляем" },
  { src: projectEkbwalkCrowd, alt: "Экскурсия Екб_гуляем" },
  { src: projectKonchalovskyPortrait, alt: "Портрет — проект для Продюсерского центра Кончаловского" },
  { src: projectMuseumPhoto, alt: "Музей истории Екатеринбурга" },
];

function Resume() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <div className="text-lg font-semibold tracking-tight">Алёна Кунилова</div>
          <nav className="hidden items-center gap-x-5 gap-y-2 text-sm text-muted-foreground md:flex md:flex-wrap md:justify-end">
            <a href="#about" className="transition-colors hover:text-foreground">О себе</a>
            <a href="#experience" className="transition-colors hover:text-foreground">Опыт работы</a>
            <a href="#skills" className="transition-colors hover:text-foreground">Навыки</a>
            <a href="#education" className="transition-colors hover:text-foreground">Образование</a>
            <a href="#projects" className="transition-colors hover:text-foreground">Сайд-проекты</a>
            <a href="#contacts" className="transition-colors hover:text-foreground">Контакты</a>
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1 transition-colors hover:text-foreground hover:bg-accent">↑ Наверх</button>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span>CV</span>
        </div>
        <div className="flex flex-col-reverse items-start gap-6 md:flex-row md:items-center md:gap-10">
          <div className="flex-1">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">Алёна Кунилова</h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Маркетинговые коммуникации
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              &nbsp;
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {"\n"}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contacts" className="inline-flex items-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent">Контакты ↓</a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{"\n"}</p>
          </div>
          <div className="shrink-0">
            <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-3xl bg-[var(--kontur-orange)] md:h-56 md:w-56">
              <img src={alenaPhoto} alt="Алёна Кунилова" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionTitle>О себе</SectionTitle>
          <div className="grid gap-6">
            <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
              <div className="space-y-6 text-lg leading-relaxed text-foreground/85 md:text-xl">
                <p className="text-muted-foreground">
                  Более 15 лет я работаю в маркетинге, PR и коммуникациях — в B2B и B2C, с компаниями и проектами разного масштаба. У меня профильное образование и опыт работы с брендом, контентом, медиа, инфлюенсерами и селебрити, мероприятиями, партнёрствами, подрядчиками, рекламными и презентационными материалами, а также с коммуникациями, связанными с привлечением клиентов и продажами. Я была публичным спикером компании и участвовала в образовательных проектах. Я работала и в периоды роста, и во время кризисов — умею и развивать то, что работает, и перестраиваться, когда меняются рынок, условия и задачи. Быстро разбираюсь в новой теме, вижу картину целиком, нахожу слабые места и превращаю разрозненные задачи в понятную рабочую систему, которая помогает доводить решения до результатов.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-background p-8">
              <div className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">Откуда я</div>
              <p className="text-lg leading-relaxed text-foreground/85">Свою карьеру начинала как копирайтер и журналист деловых изданий — отсюда привычка искать информацию, проверять факты, слышать тон и находить смыслы.</p>
            </div>
            <div className="rounded-3xl border border-border bg-background p-8">
              <div className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">Где и с кем я работала</div>
              <p className="text-lg leading-relaxed text-foreground/85">В больших корпорациях, в стартапах и самостоятельно. С кросс-функциональными командами и подрядчиками, разработчиками и креативными специалистами, топ-менеджерами и фаундерами — со всеми нахожу общий язык и легко осваиваю новый контекст.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-6">
            <div className="rounded-3xl border border-border bg-background p-8">
              <div className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">Сегодня</div>
              <p className="text-lg leading-relaxed text-foreground/85">Работаю в международном стартапе для управдомов и управляющих компаний. Отвечаю за маркетинговые коммуникации: контент для блога и соцсетей, презентационные материалы, лидогенерацию, ивенты, скрипты для продаж и коммерческие предложения. Активно использую AI-инструменты в работе.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-20">
        <SectionTitle>Опыт работы</SectionTitle>
        <div className="space-y-5">
          {jobs.map((job) => (
            <article key={job.company + job.period} className="rounded-3xl border border-border bg-card p-8 transition-colors hover:bg-secondary md:p-10">
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
          <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
            <p className="text-base leading-relaxed text-muted-foreground">Ранее — репортёр «Коммерсантъ-Урал», копирайтер в бюро паблисити и PR «КБ-32».</p>
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-20 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionTitle>Навыки</SectionTitle>
          <div className="grid gap-8 md:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.title} className="rounded-3xl border border-border bg-background p-8">
                <h3 className="mb-5 text-xl font-bold">{g.title}</h3>
                <div className="flex flex-wrap gap-2">{g.items.map((i) => <Pill key={i}>{i}</Pill>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-20">
        <SectionTitle>Образование</SectionTitle>
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <div key={i} className="rounded-3xl border border-border bg-card p-7">

              <h3 className="text-xl font-bold">{e.place}</h3>
              <p className="mt-2 text-foreground/85">{e.what}</p>
              <p className="mt-3 text-sm text-muted-foreground">{e.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionTitle>Сайд-проекты</SectionTitle>
          <div className="mb-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {images.map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl border border-border bg-background">
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
          <ul className="space-y-4">
            {projects.map((p, i) => (
              <li key={i} className="flex gap-4 rounded-2xl border border-border bg-background p-6 text-lg text-foreground/85">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--kontur-green)]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>


      <section id="contacts" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-20">
        <SectionTitle>Контакты</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a href="mailto:salyona@gmail.com" className="group rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary">
            <div className="text-sm text-muted-foreground">Почта</div>
            <div className="mt-2 text-lg font-medium text-foreground group-hover:text-primary">salyona@gmail.com</div>
          </a>
          <a href="tel:+79120486250" className="group rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary">
            <div className="text-sm text-muted-foreground">Телефон</div>
            <div className="mt-2 text-lg font-medium text-foreground group-hover:text-primary">+7 912 048-62-50</div>
          </a>
          <a href="https://t.me/AlyonaRocket" target="_blank" rel="noreferrer" className="group rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary">
            <div className="text-sm text-muted-foreground">Telegram</div>
            <div className="mt-2 text-lg font-medium text-foreground group-hover:text-primary">@AlyonaRocket</div>
          </a>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Алёна Кунилова</span>
        </div>
      </footer>
    </div>
  );
}
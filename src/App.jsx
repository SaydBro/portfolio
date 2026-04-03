import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronDown,
  GraduationCap,
  Mail,
  MapPin,
  Network,
  Phone,
  Radar,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";

const profile = {
  name: "Дмитрий Полуэктов",
  role: "Системный администратор / инфраструктурный инженер",
  tagline: "Развиваюсь от системного администрирования к инфраструктуре и DevOps-подходу: стабильность, автоматизация и надёжная работа сервисов.",
  city: "Красноярск · удалённый формат",
  phone: "+7 965 897-58-68",
  email: "donskoy2k18@mail.ru",
  about:
    "Практикующий системный и сетевой специалист с опытом в поддержке серверной и пользовательской инфраструктуры, сетевого оборудования, мониторинга, защиты конечных точек и сопровождения внутренних сервисов. Дальше хочу расти в сторону инфраструктурной инженерии и DevOps-практик.",
  note:
    "Быстро вхожу в операционные процессы, спокойно работаю с инцидентами и люблю наводить порядок в инфраструктуре. Интересуюсь автоматизацией, мониторингом и постепенным переходом к более инженерным задачам.",
};

const stats = [
  { value: "1 год 9 месяцев", label: "коммерческого опыта" },
  { value: "Windows / Linux", label: "рабочие среды" },
  { value: "Сети / ИБ / Поддержка", label: "основной фокус" },
];

const cases = [
  {
    title: "Сетевая стабильность и диагностика",
    subtitle: "ТТК связь",
    description:
      "Диагностика и локализация сетевых сбоев, работа с сетевым оборудованием D-Link, Huawei и Eltex, участие в восстановлении стабильной работы сервисов.",
    stack: ["D-Link", "Huawei", "Eltex", "Диагностика", "Сети"],
    icon: Network,
  },
  {
    title: "Безопасность и администрирование офисной инфраструктуры",
    subtitle: "Командор",
    description:
      "Сопровождение Kaspersky Security Center, внедрение 2FA, обработка и устранение уязвимостей, техническая поддержка пользователей, работа с Active Directory, Zabbix, 1С, Confluence и Jira.",
    stack: ["KSC", "2FA", "AD", "Zabbix", "1С", "Jira", "Мониторинг"],
    icon: ShieldCheck,
  },
  {
    title: "Поддержка пользователей и сервисный подход",
    subtitle: "Пользовательская поддержка и сервисный подход",
    description:
      "Опыт работы с людьми усилил коммуникацию, внимательность к деталям и умение спокойно вести задачи в условиях постоянного потока запросов.",
    stack: ["Поддержка", "Коммуникация", "Сервис", "Ответственность"],
    icon: Workflow,
  },
];

const experience = [
  {
    company: "ТТК связь",
    period: "Февраль 2026 — настоящее время",
    role: "Инженер",
    description:
      "Занимаюсь выявлением и локализацией сетевых сбоев, работаю с оборудованием D-Link, Huawei и Eltex, участвую в поддержании стабильности сетевой инфраструктуры.",
  },
  {
    company: "Командор, сеть супермаркетов",
    period: "Январь 2025 — Декабрь 2025",
    role: "Сетевой и системный администратор",
    description:
      "Администрировал и сопровождал Kaspersky Security Center, участвовал во внедрении двухфакторной аутентификации, закрытии выявленных уязвимостей, оказывал техническую поддержку пользователям, работал с Active Directory, Zabbix, 1С, Confluence и Jira.",
  },
  {
    company: "Colin’s",
    period: "Сентябрь 2024 — Ноябрь 2024",
    role: "Продавец-консультант",
    description:
      "Развил коммуникацию, стрессоустойчивость и навык аккуратной работы с запросами людей — это хорошо переносится в поддержку пользователей и внутренний IT-сервис.",
  },
];

const strongSkills = [
  "Администрирование Windows Server",
  "DNS / DHCP",
  "Kaspersky Security Center",
  "2FA / Multifactor",
  "IPTables",
  "VMware",
  "Alt Linux",
  "RDP",
  "Cisco Packet Tracer",
  "Atlassian Jira",
];

const mediumSkills = [
  "Linux",
  "VPN",
  "Bash",
  "PowerShell",
  "RDGW",
  "Active Directory",
  "Zabbix",
  "Информационная безопасность",
  "Автоматизация процессов",
  "Kali Linux",
  "1С",
  "Confluence",
];

const education = {
  title: "Сибирский государственный университет телекоммуникаций и информатики",
  city: "Новосибирск",
  program: "Сетевое и системное администрирование",
  details: "Среднее специальное, 2025",
};

const profileImage = "/profile.jpg";
const fallbackImage = "/profile-placeholder.svg";

function SectionHeading({ label, title, text }) {
  return (
    <div className="section-heading">
      <div className="eyebrow"><Sparkles size={14} /> {label}</div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}


function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onMove = (e) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
        setVisible(true);
      });
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <div
      className={`cursor-glow ${visible ? "is-visible" : ""}`}
      style={{ transform: `translate3d(${pos.x - 90}px, ${pos.y - 90}px, 0)` }}
      aria-hidden
    />
  );
}


function SkillCloud({ title, items }) {
  return (
    <div className="skill-cloud">
      <div className="skill-cloud__title">{title}</div>
      <div className="chips">
        {items.map((item) => (
          <span key={item} className="chip">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(profileImage);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          >
            <motion.div
              className="preloader__ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 3.6, ease: "linear", repeat: Infinity }}
            />
            <motion.div
              className="preloader__content"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span>ДМИТРИЙ ПОЛУЭКТОВ</span>
              <strong>Портфолио системного администратора</strong>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CursorGlow />
      <div className="page-shell">
        <div className="noise" />
        <div className="orb orb--gold" />
        <div className="orb orb--blue" />
        <div className="grid-mask" />

        <header className="topbar">
          <a className="brand" href="#top">
            <span className="brand__mark">DP</span>
            <span className="brand__text">
              <strong>Дмитрий Полуэктов</strong>
              <small>Системное администрирование / инфраструктура</small>
            </span>
          </a>

          <nav className="nav">
            <a href="#about">О себе</a>
            <a href="#cases">Кейсы</a>
            <a href="#stack">Стек</a>
            <a href="#contact">Контакты</a>
          </nav>
        </header>

        <main id="top">
          <section className="hero">
            <div className="hero__copy">
              <motion.div
                className="eyebrow"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.15 }}
              >
                <BadgeCheck size={14} />
                Открыт к предложениям и удалённой работе
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
              >
                Дмитрий
                <span>Полуэктов</span>
              </motion.h1>

              <motion.div
                className="hero__role"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
              >
                {profile.role}
                <span className="hero__role-sub">Сети • серверы • мониторинг • безопасность • путь к DevOps</span>
              </motion.div>

              <motion.p
                className="hero__lead"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
              >
                {profile.tagline}
              </motion.p>

              <motion.p
                className="hero__text"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
              >
                {profile.about}
              </motion.p>

              <motion.div
                className="hero__actions"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
              >
                <a className="btn btn--primary" href="#contact">
                  Связаться <ArrowUpRight size={18} />
                </a>
                <a className="btn btn--ghost" href="#cases">
                  Смотреть кейсы
                </a>
              </motion.div>

              <motion.div
                className="hero__stats"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.75 }}
              >
                {stats.map((item) => (
                  <div className="stat-card" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="hero__visual"
              initial={{ opacity: 0, scale: 0.94, y: 22 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35 }}
            >
              <div className="portrait-frame">
                <div className="portrait-frame__shine" />
                <img
                  src={imgSrc}
                  alt="Дмитрий Полуэктов"
                  onError={() => setImgSrc(fallbackImage)}
                />
              </div>

              <div className="floating-card floating-card--top">
                <Radar size={18} />
                <div>
                  <strong>Диагностика и поддержка</strong>
                  <span>Сети, инциденты, стабильность</span>
                </div>
              </div>

              <div className="floating-card floating-card--bottom">
                <ShieldCheck size={18} />
                <div>
                  <strong>Фокус на безопасности</strong>
                  <span>KSC, 2FA, базовые практики ИБ</span>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="about" className="section">
            <SectionHeading
              label="О себе"
              title="Системный подход, инженерное мышление и рост в инфраструктуру"
              text="В работе для меня важны стабильность инфраструктуры, аккуратная диагностика инцидентов, понятные процессы и движение в сторону автоматизации и инженерных практик."
            />

            <div className="about-grid">
              <motion.article
                className="panel panel--large"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <div className="panel__icon"><Server size={20} /></div>
                <h3>Мой профиль</h3>
                <p>{profile.note}</p>
                <p>
                  Мой текущий опыт позволяет уверенно решать повседневные задачи системного администрирования: сопровождение инфраструктуры, поддержка пользователей, работа с сетями, мониторингом и базовыми задачами информационной безопасности. Следующий шаг — глубже уходить в инфраструктурную инженерию и DevOps-подход.
                </p>
              </motion.article>

              <motion.article
                className="panel"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.08 }}
              >
                <div className="panel__icon"><Wrench size={20} /></div>
                <h3>Сильные стороны</h3>
                <ul className="feature-list">
                  <li>быстрое включение в операционные задачи</li>
                  <li>внимательность к инцидентам и деталям</li>
                  <li>спокойная техническая коммуникация</li>
                  <li>интерес к инфраструктуре и безопасности</li>
                </ul>
              </motion.article>

              <motion.article
                className="panel"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.16 }}
              >
                <div className="panel__icon"><MapPin size={20} /></div>
                <h3>Формат работы</h3>
                <p>{profile.city}</p>
                <p>Постоянная занятость, удалённый формат, возможны командировки при необходимости.</p>
              </motion.article>
            </div>
          </section>

          <section id="cases" className="section">
            <SectionHeading
              label="Кейсы"
              title="Опыт, который показывает базу и потенциал роста"
              text="Реальные задачи из опыта: поддержка инфраструктуры, работа с сетями, безопасностью, мониторингом и внутренними сервисами."
            />

            <div className="cases-grid">
              {cases.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    className="case-card"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                  >
                    <div className="case-card__top">
                      <div className="case-card__icon"><Icon size={20} /></div>
                      <div className="case-card__subtitle">{item.subtitle}</div>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="chips">
                      {item.stack.map((tag) => (
                        <span className="chip" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>

          <section id="stack" className="section">
            <SectionHeading
              label="Стек"
              title="Стек, с которым я уже работаю и хочу усиливать"
              text="Навыки сгруппированы по уровню и опыту применения, чтобы быстро показать мой текущий стек и направление дальнейшего роста."
            />

            <div className="stack-layout">
              <motion.div
                className="panel stack-panel"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <SkillCloud title="Уверенно работаю" items={strongSkills} />
                <SkillCloud title="Рабочий уровень" items={mediumSkills} />
              </motion.div>

              <motion.div
                className="meta-column"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.08 }}
              >
                <div className="panel meta-card">
                  <div className="panel__icon"><BriefcaseBusiness size={20} /></div>
                  <h3>Опыт</h3>
                  <div className="experience-list">
                    {experience.map((item) => (
                      <div className="experience-row" key={item.company + item.role}>
                        <strong>{item.role}</strong>
                        <span>{item.company}</span>
                        <small>{item.period}</small>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="panel meta-card">
                  <div className="panel__icon"><GraduationCap size={20} /></div>
                  <h3>Образование</h3>
                  <p className="education-title">{education.title}</p>
                  <p>{education.city}</p>
                  <p>{education.program}</p>
                  <small>{education.details}</small>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="contact" className="section">
            <motion.div
              className="contact-block"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className="contact-block__text">
                <div className="eyebrow"><Sparkles size={14} /> Контакты</div>
                <h2>Готов подключиться к сильной команде</h2>
                <p>
                  Ищу команду, где можно усиливать инфраструктуру, автоматизировать процессы и расти в сторону DevOps.
                </p>
              </div>

              <div className="contact-links">
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-link">
                  <Phone size={18} />
                  <span>{profile.phone}</span>
                </a>
                <a href={`mailto:${profile.email}`} className="contact-link">
                  <Mail size={18} />
                  <span>{profile.email}</span>
                </a>
                <a href="https://t.me/SaydBro" className="contact-link" target="_blank" rel="noreferrer">
                  <Send size={18} />
                  <span>@SaydBro</span>
                </a>
              </div>
            </motion.div>
          </section>

          <a href="#top" className="scroll-top">
            <ChevronDown size={16} />
          </a>
        </main>
      </div>
    </>
  );
}

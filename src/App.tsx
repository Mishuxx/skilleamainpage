import React, { useEffect } from "react";
import {
  ArrowRight,
  Star,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Compass,
  Linkedin,
  Users,
  Sparkles,
} from "lucide-react";

/* ==================== Utilidades SPA (URLs limpias) ==================== */
const BASE = import.meta.env.BASE_URL || "/";
const SECTION_IDS = ["", "nosotros", "servicios", "metodologia", "testimonios", "cta"] as const;
type SectionId = (typeof SECTION_IDS)[number];

function navigateTo(section: SectionId) {
  const path = section ? `${BASE}${section}` : BASE;
  if (window.location.pathname !== path) window.history.pushState({}, "", path);
  if (!section) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(section);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function parsePathname(): RouteState {
  const raw = window.location.pathname;
  let rest = raw.startsWith(BASE) ? raw.slice(BASE.length) : raw.replace(/^\/+/, "");
  rest = rest.replace(/^\/+|\/+$/g, "");
  if (PAGE_IDS.includes(rest as PageId)) {
    return { page: rest as PageId, section: null };
  }
  if (HOME_SECTION_IDS.includes(rest as HomeSectionId)) {
    return { page: "", section: rest as HomeSectionId };
  }
  return { page: "", section: null };
}

const LinkToRoute: React.FC<
  React.PropsWithChildren<{
    route: RouteId;
    className?: string;
    onNavigate: (route: RouteId) => void;
  }>
> = ({ route, className, onNavigate, children }) => {
  const href = route ? `${BASE}${route}` : BASE;
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(route);
      }}
    >
      {children}
    </a>
  );
};
/* ================== Fin utilidades SPA ================== */

type Service = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentWrapper: string;
  bulletAccent: string;
  bullets: string[];
  hoverDetails: string;
};

const services: Service[] = [
  {
    title: "Coaching Profesional",
    description:
      "Acompañamiento 1:1 con enfoque en claridad, estrategia y resultados medibles.",
    icon: Briefcase,
    accentWrapper:
      "bg-[var(--skillea-ice)] text-[var(--skillea-navy)] border border-[var(--skillea-soft-blue)]",
    bulletAccent: "text-[var(--skillea-soft-pink)]",
    bullets: [
      "Diagnóstico profundo de tu situación actual",
      "Sesiones estratégicas semanales",
      "Planes de acción medibles",
    ],
    hoverDetails:
      "Mapeamos tus objetivos, definimos indicadores de impacto y te acompañamos con ejercicios y seguimiento para mantener el ritmo.",
  },
  {
    title: "Desarrollo de Habilidades",
    description:
      "Plan de crecimiento con prácticas guiadas y seguimiento de metas.",
    icon: GraduationCap,
    accentWrapper:
      "bg-[var(--skillea-soft-peach)]/30 text-[var(--skillea-navy)]",
    bulletAccent: "text-[var(--skillea-star-yellow)]",
    bullets: [
      "Entrenamientos experienciales",
      "Prácticas guiadas con feedback",
      "Evaluaciones de progreso",
    ],
    hoverDetails:
      "Activamos habilidades técnicas y blandas con retos semanales, rúbricas y retroalimentación puntual para consolidar hábitos.",
  },
  {
    title: "Orientación Vocacional",
    description:
      "Descubre tu dirección profesional con evaluación y diseño de carrera.",
    icon: Compass,
    accentWrapper:
      "bg-[var(--skillea-soft-blue)]/30 text-[var(--skillea-navy)]",
    bulletAccent: "text-[var(--skillea-light-blue)]",
    bullets: [
      "Exploración de intereses y fortalezas",
      "Sesiones de diseño de carrera",
      "Plan de transición con hitos",
    ],
    hoverDetails:
      "Integramos assessments, entrevistas y prototipos de carrera para que tomes decisiones con claridad y pasos concretos.",
  },
];

const methodologySteps = [
  { step: 1, title: "Diagnóstico", description: "Definimos objetivos y líneas base para medir progreso desde el inicio." },
  { step: 2, title: "Plan de Acción", description: "Creamos un plan personalizado por etapas: foco, hábitos y entregables." },
  { step: 3, title: "Ejecución", description: "Sesiones, prácticas y retroalimentación continua para avanzar cada semana." },
  { step: 4, title: "Seguimiento", description: "Métricas de progreso y ajustes estratégicos para sostener resultados." },
];

type TeamMember = {
  name: string;
  role: string;
  focus: string;
  photo: string;
  accent: string;
  linkedinUrl?: string;
};

type TeamMember = {
  name: string;
  role: string;
  focus: string;
  photo: string;
  accent: string;
  linkedinUrl?: string;
};

// 🟦 USO DE TUS NUEVAS IMÁGENES
const teamMembers: TeamMember[] = [
  {
    name: "Daniela Medina",
    role: "Coach de Transformación",
    focus: "Acompaña procesos de cambio cultural y liderazgo femenino.",
    photo: "Danipixel.png",
    accent: "from-[var(--skillea-soft-pink)] to-[var(--skillea-light-blue)]",
  },
  {
    name: "Gustavo Mujica",
    role: "Mentor de Carrera",
    focus: "Especialista en planes de transición hacia roles directivos.",
    photo: "Guspixel.png",
    accent: "from-[var(--skillea-star-yellow)] to-[var(--skillea-soft-peach)]",
  },
  {
    name: "Ricardo Pulgar",
    role: "Consultor en Innovación",
    focus: "Integra metodologías ágiles para equipos orientados a resultados.",
    photo: "Rickpixel.png",
    accent: "from-[var(--skillea-light-blue)] to-[var(--skillea-soft-blue)]",
    linkedinUrl: "https://www.linkedin.com/in/rickpm/",
  },
];

const academyTracks = [
  {
    title: "Bootcamps de habilidades",
    description:
      "Programas intensivos para consolidar competencias digitales, liderazgo y comunicación efectiva.",
  },
  {
    title: "Rutas de certificación",
    description:
      "Trayectorias guiadas con proyectos prácticos y evaluaciones para validar tu progreso.",
  },
  {
    title: "Workshops para equipos",
    description:
      "Sesiones personalizadas para potenciar el desempeño colectivo y la cultura de aprendizaje continuo.",
  },
];

function App() {
  const academyUrl = "https://academia.skillea.com";
  const [activePage, setActivePage] = useState<PageId>("");
  const pendingScroll = useRef<HomeSectionId | null>(null);

  const handleNavigate = useCallback((route: RouteId) => {
    const path = route ? `${BASE}${route}` : BASE;
    if (window.location.pathname !== path) window.history.pushState({}, "", path);

    if (PAGE_IDS.includes(route as PageId)) {
      setActivePage(route as PageId);
      pendingScroll.current = null;
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    pendingScroll.current = route as HomeSectionId;
    setActivePage("");
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const h = window.location.hash.replace("#", "");
      if (HOME_SECTION_IDS.includes(h as HomeSectionId)) {
        setActivePage("");
        pendingScroll.current = h as HomeSectionId;
      } else if (PAGE_IDS.includes(h as PageId)) {
        setActivePage(h as PageId);
        pendingScroll.current = null;
      }
    } else {
      sync();
    }

    const onPop = () => sync();
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (!pendingScroll.current) return;
    const section = pendingScroll.current;
    pendingScroll.current = null;
    requestAnimationFrame(() => {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [activePage]);

  const logoSrc = `${BASE}WhatsApp_Image_2025-10-30_at_13.44.54_546e4640-removebg-preview.png`;

  return (
    <div className="min-h-screen bg-[var(--skillea-cloud)] text-[var(--skillea-navy)]">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-[var(--skillea-ice)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            <LinkToSection section="" className="inline-flex items-center gap-3">
              <img src={logoSrc} alt="Skillea" className="h-14 w-auto" />
            </LinkToSection>

            <div className="hidden md:flex items-center gap-8">
              <LinkToSection section="nosotros">Nosotros</LinkToSection>
              <LinkToSection section="servicios">Servicios</LinkToSection>
              <LinkToSection section="metodologia">Metodología</LinkToSection>
              <LinkToSection section="testimonios">Testimonios</LinkToSection>
              <LinkToSection section="cta" className="bg-gradient-to-r from-[var(--skillea-soft-pink)] to-[var(--skillea-star-yellow)] px-6 py-2.5 rounded-full font-semibold">Comenzar</LinkToSection>
            </div>
          </div>
        </div>
      </nav>

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-24 px-6" id="">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative overflow-hidden rounded-[32px] text-white"
            style={{
              backgroundImage: "var(--skillea-hero-gradient)",
              backgroundColor: "var(--skillea-deep-navy)",
            }}
          >
            <div className="absolute -right-24 -top-20 w-72 h-72 bg-[var(--skillea-soft-pink)]/40 blur-3xl rounded-full" />
            <div className="absolute -left-20 bottom-0 w-64 h-64 bg-[var(--skillea-star-yellow)]/30 blur-3xl rounded-full" />

            <div className="relative grid lg:grid-cols-[1.2fr,1fr] gap-16 p-10 md:p-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--skillea-star-yellow)]" />
                  Coaching Profesional & Desarrollo Vocacional
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  Alcanza tu máximo potencial profesional
                </h1>

                <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
                  Impulsamos carreras a través de procesos personalizados, acompañamiento experto y una comunidad vibrante lista para apoyarte.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <LinkToSection section="cta" className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[var(--skillea-navy)] font-semibold shadow-xl">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--skillea-star-yellow)] via-[var(--skillea-soft-peach)] to-[var(--skillea-soft-pink)] opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all" />
                    <span className="relative flex items-center gap-2">
                      Agenda tu sesión gratuita
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </LinkToSection>

                  <LinkToSection section="servicios" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border.white/60 text-white/90">
                    Conocer más
                  </LinkToSection>
                </div>

                <div className="mt-12 grid sm:grid-cols-3 gap-6">
                  <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
                    <div className="text-3xl font-bold text-[var(--skillea-star-yellow)]">500+</div>
                    <p className="text-sm text-white/80">Profesionales formados</p>
                  </div>

                  <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
                    <div className="text-3xl font-bold text-[var(--skillea-star-yellow)]">95%</div>
                    <p className="text-sm text-white/80">Tasa de satisfacción</p>
                  </div>

                  <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[var(--skillea-star-yellow)] text-[var(--skillea-star-yellow)]" />
                      ))}
                    </div>
                    <p className="text-sm text-white/80">Valoración promedio</p>
                  </div>
                </div>
              </div>

              {/* ===== Card derecha ===== */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl bg-white text-[var(--skillea-navy)] shadow-2xl">
                  <div className="absolute -top-24 -right-16 w-48 h-48 bg-[var(--skillea-soft-pink)]/20 blur-3xl rounded-full" />

                  <div className="p-10 space-y-6 relative">
                    <div>
                      <p className="text-sm font-semibold text-[var(--skillea-navy)]/60 mb-2">Lo que trabajaremos</p>
                      <h3 className="text-2xl font-bold">Tu plan de crecimiento personalizado</h3>
                    </div>

                    <div className="space-y-5">
                      {[
                        { title: "Orientación Personalizada", description: "Sesiones diseñadas para tus metas únicas." },
                        { title: "Resultados Medibles", description: "Seguimiento continuo de tu progreso." },
                        { title: "Comunidad de Apoyo", description: "Red de profesionales que impulsan tu crecimiento." },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--skillea-ice)] text-[var(--skillea-navy)]">
                            <CheckCircle className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                            <p className="text-sm text-[var(--skillea-navy)]/70">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-[var(--skillea-ice)]">
                      <p className="text-sm text-[var(--skillea-navy)]/60 mb-2">Incluye</p>
                      <p className="text-base font-semibold">Evaluaciones, sesiones 1:1 y acompañamiento continuo.</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>




      {/* ==================== NOSOTROS ==================== */}
      <section id="nosotros" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[1.1fr,0.9fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--skillea-soft-peach)]/60 px-4 py-2 text-sm font-semibold text-[var(--skillea-navy)]">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--skillea-star-yellow)]" /> Nosotros
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[var(--skillea-navy)]">
              Acompañamos a profesionales y equipos hacia su próxima etapa
            </h2>

            <p className="mt-6 text-lg text-[var(--skillea-navy)]/70 leading-relaxed">
              Somos un colectivo de coaches, consultores y especialistas en talento que combina metodologías ágiles,
              psicología organizacional y data para impulsar decisiones profesionales con confianza. Diseñamos programas
              que conectan propósito & ejecución en cada acompañamiento.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-[var(--skillea-soft-blue)]/40 bg-[var(--skillea-cloud)] p-6">
                <h3 className="text-xl font-semibold text-[var(--skillea-navy)] mb-2">Misión</h3>
                <p className="text-sm text-[var(--skillea-navy)]/70">
                  Empoderar a cada profesional para diseñar un camino laboral sostenible, alineado con sus talentos y valores.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--skillea-soft-blue)]/40 bg-[var(--skillea-cloud)] p-6">
                <h3 className="text-xl font-semibold text-[var(--skillea-navy)] mb-2">Visión</h3>
                <p className="text-sm text-[var(--skillea-navy)]/70">
                  Ser la referencia en América Latina en coaching profesional basado en evidencia y acompañamiento humano.
                </p>
              </div>
            </div>
          </div>

          {/* ==== Tarjeta derecha: Equipo ==== */}
          <div className="relative">
            <div className="absolute -top-10 -right-14 h-48 w-48 rounded-full bg-[var(--skillea-soft-blue)]/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_35px_60px_-40px_rgba(16,45,107,0.35)] border border-[var(--skillea-soft-blue)]/30">
              <div className="px-10 py-12 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--skillea-navy)]">Nuestro equipo</h3>
                  <p className="mt-3 text-sm text-[var(--skillea-navy)]/70 leading-relaxed">
                    Facilitadores certificados en coaching ejecutivo, desarrollo de habilidades digitales y diseño de carrera.
                  </p>
                </div>

                <div className="grid gap-4">
                  {teamMembers.map((member) => {
                    const hasLinkedin = Boolean(member.linkedinUrl);
                    const photoSrc = `${BASE}${member.photo}`;
                    const Wrapper = hasLinkedin ? "a" : "span";

                    return (
                      <div
                        key={member.name}
                        className="flex gap-4 items-center rounded-2xl border border-[var(--skillea-ice)] bg-[var(--skillea-cloud)]/60 p-4"
                      >
                        <div
                          className={`relative h-20 w-20 rounded-[28px] bg-gradient-to-br ${member.accent} p-1.5 shadow-lg`}
                        >
                          <div className="h-full w-full rounded-[22px] bg-white flex items-center justify-center overflow-hidden">
                            <img src={photoSrc} alt={member.name} className="h-full w-full object-contain p-2" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <p className="font-semibold text-[var(--skillea-navy)]">{member.name}</p>
                          <p className="text-sm text-[var(--skillea-navy)]/70">{member.role}</p>
                          <p className="mt-1 text-sm text-[var(--skillea-navy)]/60">{member.focus}</p>

                          <div className="mt-3">
                            <Wrapper
                              {...(hasLinkedin
                                ? {
                                    href: member.linkedinUrl,
                                    target: "_blank",
                                    className:
                                      "inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--skillea-soft-blue)] text-[var(--skillea-navy)] hover:text-black",
                                  }
                                : {
                                    className:
                                      "inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--skillea-ice)] text-[var(--skillea-navy)]/30 cursor-not-allowed",
                                  })}
                            >
                              <Linkedin className="w-4 h-4" />
                            </Wrapper>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        </section>
      )}




      {/* ==================== SERVICIOS ==================== */}
      <section id="servicios" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--skillea-soft-pink)]" /> Servicios
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[var(--skillea-navy)]">
              Soluciones para cada etapa de tu carrera
            </h2>
            <p className="mt-4 text-lg text-[var(--skillea-navy)]/70">
              Diseñamos experiencias que equilibran estrategia, habilidades y claridad vocacional.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-[0_35px_60px_-40px_rgba(16,45,107,0.35)] border border-[var(--skillea-soft-blue)]/40"
              >
                <div className="absolute -top-20 -right-20 h-40 w-40 bg-[var(--skillea-soft-blue)]/30 blur-3xl group-hover:scale-125 transition-transform" />

                <div
                  className={`relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.accentWrapper}`}
                >
                  <service.icon className="w-7 h-7" />
                </div>

                <h3 className="relative text-2xl font-bold mb-4">{service.title}</h3>
                <p className="relative text-[var(--skillea-navy)]/70 mb-6">{service.description}</p>

                <ul className="relative space-y-3 mb-6">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-sm text-[var(--skillea-navy)]/80">
                      <CheckCircle className={`w-5 h-5 ${service.bulletAccent}`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative rounded-2xl bg-[var(--skillea-cloud)]/70 px-4 py-3 text-sm text-[var(--skillea-navy)]/80 opacity-0 group-hover:opacity-100 transition-all">
                  {service.hoverDetails}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--skillea-soft-pink)]/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      )}





      {/* ==================== METODOLOGÍA ==================== */}
      <section id="metodologia" className="py-24 px-6 bg-[var(--skillea-cloud)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center.max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--skillea-ice)] px-4 py-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--skillea-star-yellow)]" /> Metodología
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold">Un proceso diseñado para ver resultados</h2>

            <p className="mt-4 text-lg text-[var(--skillea-navy)]/70">
              Acompañamos cada etapa con claridad, herramientas y seguimiento constante.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {methodologySteps.map((step, index) => (
              <div
                key={step.step}
                className="relative rounded-3xl bg-white p-8 border border-[var(--skillea-soft-blue)]/40 shadow-sm"
              >
                <div className="text-5xl font-bold text-[var(--skillea-soft-blue)]/70 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-[var(--skillea-navy)]/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* ==================== TESTIMONIOS ==================== */}
      <section id="testimonios" className="py-24 px-6 bg-[var(--skillea-ice)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4.py-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--skillea-soft-pink)]" /> Testimonios
            </span>

            <h2 className="mt-6.text-4xl md:text-5xl font-bold">Historias de evolución profesional</h2>

            <p className="mt-4 text-lg text-[var(--skillea-navy)]/70">
              Profesionales que transformaron su carrera y encontraron claridad con nuestra metodología.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative rounded-3xl bg-white p-8 shadow-[0_25px_60px_-40px_rgba(16,45,107,0.35)] border border-[var(--skillea-soft-blue)]/40"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--skillea-star-yellow)] text-[var(--skillea-star-yellow)]" />
                  ))}
                </div>

                <p className="text-base text-[var(--skillea-navy)]/80 mb-6 italic">
                  “{t.text}”
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--skillea-soft-pink)] to-[var(--skillea-light-blue)] text-[var(--skillea-navy)] font-semibold">
                    {t.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-[var(--skillea-navy)]/60">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* ==================== CTA ==================== */}
      <section id="cta" className="py-24 px-6">
        <div
          className="max-w-5xl mx-auto overflow-hidden rounded-[32px] shadow-[0_45px_80px_-50px_rgba(16,45,107,0.5)] text-[var(--skillea-navy)]"
          style={{
            backgroundImage: "var(--skillea-cta-gradient)",
            backgroundColor: "var(--skillea-soft-pink)",
          }}
        >
          <div className="px-10 py-16 md:px-20 md:py-20 text-center">
            <h2 className="text-4xl md:text-5xl.font-bold leading-tight mb-6">
              ¿Listo para transformar tu carrera?
            </h2>

            <p className="text-lg md:text-xl text-[var(--skillea-navy)]/80 max-w-3xl mx-auto mb-10">
              Agenda una sesión gratuita y descubre cómo podemos ayudarte a construir el futuro profesional que imaginas.
            </p>

            <LinkToSection
              section="cta"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold shadow-lg"
            >
              Comenzar ahora <ArrowRight className="w-6 h-6" />
            </LinkToSection>
          </div>
        </div>
      </section>




      {/* ==================== FOOTER (CORREGIDO) ==================== */}
      <footer className="bg-[var(--skillea-mid-blue)] text-[var(--skillea-ice)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            
            {/* Columna 1 */}
            <div>
              <img src={logoSrc} className="h-10 w-auto mb-4" />
              <p className="text-sm text-[var(--skillea-ice)]/80">
                Transformando carreras a través del coaching profesional,
                el desarrollo continuo y la claridad vocacional.
              </p>
            </div>

            {/* Columna 2 */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-[var(--skillea-ice)]/80">
                <li><LinkToSection section="servicios">Coaching Profesional</LinkToSection></li>
                <li><LinkToSection section="servicios">Desarrollo de Habilidades</LinkToSection></li>
                <li><LinkToSection section="servicios">Orientación Vocacional</LinkToSection></li>
              </ul>
            </div>

            {/* Columna 3 — CORREGIDA */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-[var(--skillea-ice)]/80">
                <li><LinkToSection section="nosotros">Nosotros</LinkToSection></li>
                <li><LinkToSection section="testimonios">Testimonios</LinkToSection></li>
              </ul>
            </div>

            {/* Columna 4 */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-[var(--skillea-ice)]/80">
                <li><a href="mailto:hello@skillea.com">Contáctanos</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="mailto:soporte@skillea.com">Soporte</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-[var(--skillea-ice)]/70">
            <p>&copy; {new Date().getFullYear()} Skillea. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;

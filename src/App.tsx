// src/App.tsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Star,
  CheckCircle,
  Linkedin,
  Users,
  Sparkles,
} from "lucide-react";

/* ==================== Utilidades SPA (URLs limpias) ==================== */
const BASE = import.meta.env.BASE_URL || "/"; // p.ej. '/skilleamainpage/'
const NORMALIZED_BASE = BASE.endsWith("/") ? BASE : `${BASE}/`;
const PAGE_IDS = ["", "nosotros", "staffing"] as const;
const HOME_SECTION_IDS = ["metodologia", "academia", "cta"] as const;

type PageId = (typeof PAGE_IDS)[number];
type HomeSectionId = (typeof HOME_SECTION_IDS)[number];
type RouteId = PageId | HomeSectionId;

type RouteState = {
  page: PageId;
  section: HomeSectionId | null;
};

function parsePathname(): RouteState {
  const raw = window.location.pathname;
  let rest = raw.startsWith(NORMALIZED_BASE)
    ? raw.slice(NORMALIZED_BASE.length)
    : raw.replace(/^\/+/, "");
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
  const href = route ? `${NORMALIZED_BASE}${route}` : NORMALIZED_BASE;
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
/* ================== Fin utilidades SPA (URLs limpias) ================== */

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

const teamMembers: TeamMember[] = [
  {
    name: "Daniela Medina",
    role: "Consultora",
    focus: "Psicóloga conductual y especialista en adquisición de talento.",
    photo: "https://skillea-media-prod.s3.us-east-2.amazonaws.com/Danipixel.png",
    accent: "from-[var(--skillea-soft-pink)] to-[var(--skillea-light-blue)]",
  },
  {
    name: "Gustavo Mujica",
    role: "Consultor",
    focus: "Abogado y estratega de talento para el ecosistema FinTech y Blockchain.",
    photo: "https://skillea-media-prod.s3.us-east-2.amazonaws.com/Guspixel.png",
    accent: "from-[var(--skillea-star-yellow)] to-[var(--skillea-soft-peach)]",
  },
  {
    name: "Ricardo Pulgar",
    role: "Consultor",
    focus: "Psicólogo dinámico, especialista en RR. HH. y en adquisición de talento IT.",
    photo: "https://skillea-media-prod.s3.us-east-2.amazonaws.com/Rickpixel.png",
    accent: "from-[var(--skillea-light-blue)] to-[var(--skillea-soft-blue)]",
    linkedinUrl: "https://www.linkedin.com/in/rickpm/",
  },
];

// Content blocks below are copy-managed to keep landing updates simple for non-dev edits.
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
    const path = route ? `${NORMALIZED_BASE}${route}` : NORMALIZED_BASE;
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
    const sync = () => {
      const parsed = parsePathname();
      setActivePage(parsed.page);
      pendingScroll.current = parsed.section;
    };

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

  const assetUrl = useCallback((path: string) => {
    if (/^https?:\/\//i.test(path)) return path;
    return `${NORMALIZED_BASE}${path.replace(/^\/+/, "")}`;
  }, []);
  const logoSrc = assetUrl("WhatsApp_Image_2025-10-30_at_13.44.54_546e4640-removebg-preview.png");

  return (
    <div className="min-h-screen bg-[var(--skillea-cloud)] text-[var(--skillea-navy)]">
      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-[var(--skillea-ice)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            <LinkToRoute route="" onNavigate={handleNavigate} className="inline-flex items-center gap-3" aria-label="Ir al inicio">
              <img src={logoSrc} alt="Skillea" className="h-14 w-auto" />
              <span className="sr-only">Skillea</span>
            </LinkToRoute>
            <div className="hidden md:flex items-center gap-8">
              <LinkToRoute route="nosotros" onNavigate={handleNavigate} className="text-[var(--skillea-navy)]/70 hover:text-[var(--skillea-navy)] transition-colors">Nosotros</LinkToRoute>
              <LinkToRoute route="metodologia" onNavigate={handleNavigate} className="text-[var(--skillea-navy)]/70 hover:text-[var(--skillea-navy)] transition-colors">Metodología</LinkToRoute>
              <LinkToRoute route="staffing" onNavigate={handleNavigate} className="text-[var(--skillea-navy)]/70 hover:text-[var(--skillea-navy)] transition-colors">Staffing</LinkToRoute>
              <LinkToRoute route="academia" onNavigate={handleNavigate} className="text-[var(--skillea-navy)]/70 hover:text-[var(--skillea-navy)] transition-colors">Academia</LinkToRoute>
              <LinkToRoute route="cta" onNavigate={handleNavigate} className="bg-gradient-to-r from-[var(--skillea-soft-pink)] to-[var(--skillea-star-yellow)] text-[var(--skillea-navy)] px-6 py-2.5 rounded-full font-semibold shadow-sm hover:shadow-md transition-all">Comenzar</LinkToRoute>
            </div>
          </div>
        </div>
      </nav>

      {activePage === "nosotros" && (
        <section id="nosotros" className="pt-32 pb-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--skillea-soft-peach)]/60 px-4 py-2 text-sm font-semibold text-[var(--skillea-navy)]">
                <span className="inline-block h-2 w-2 rounded-full bg-[var(--skillea-star-yellow)]" /> Nosotros
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl font-bold text-[var(--skillea-navy)]">La identidad profesional no se encuentra, se construye.</h1>
              <p className="mt-6 text-lg text-[var(--skillea-navy)]/70 leading-relaxed">
                Somos un colectivo de coaches, consultores y especialistas en talento que combina metodologías ágiles,
                psicología organizacional y data para impulsar decisiones profesionales con confianza. Diseñamos programas
                que conectan propósito, estrategia y ejecución en cada acompañamiento.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Misión",
                    description:
                      "Acompañar a cada persona en el diseño de una trayectoria laboral sostenible, auténtica y alineada con sus talentos, valores y aspiraciones, brindando herramientas concretas para tomar decisiones con claridad en un entorno cambiante.",
                  },
                  {
                    title: "Visión",
                    description:
                      "Ser referentes en América Latina en el desarrollo vocacional basado en evidencia, tecnología y acompañamiento humano, contribuyendo a una transformación profesional profunda y consciente.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-[var(--skillea-soft-blue)]/40 bg-[var(--skillea-cloud)] p-6">
                    <h2 className="text-xl font-semibold text-[var(--skillea-navy)] mb-2">{item.title}</h2>
                    <p className="text-sm text-[var(--skillea-navy)]/70 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-14 h-48 w-48 rounded-full bg-[var(--skillea-soft-blue)]/40 blur-3xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_35px_60px_-40px_rgba(16,45,107,0.35)] border border-[var(--skillea-soft-blue)]/30">
                <div className="px-10 py-12 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--skillea-navy)]">Nuestro equipo</h2>
                    <p className="mt-3 text-sm text-[var(--skillea-navy)]/70 leading-relaxed">
                      Facilitadores certificados en coaching ejecutivo, desarrollo de habilidades digitales y diseño de carrera acompañan
                      cada proceso con cercanía y métricas claras.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    {teamMembers.map((member) => {
                      const hasLinkedin = Boolean(member.linkedinUrl);
                      const WrapperTag = (hasLinkedin ? "a" : "span") as const;
                      const photoSrc = assetUrl(member.photo);
                      return (
                        <div
                          key={member.name}
                          className="flex gap-4 items-center rounded-2xl border border-[var(--skillea-ice)] bg-[var(--skillea-cloud)]/60 p-4"
                        >
                          <div
                            className={`relative h-20 w-20 rounded-[28px] bg-gradient-to-br ${member.accent} p-1.5 shadow-[0_15px_30px_-20px_rgba(16,45,107,0.7)]`}
                            aria-hidden="true"
                          >
                            <div className="h-full w-full rounded-[22px] bg-white flex items-center justify-center overflow-hidden">
                              <img src={photoSrc} alt={member.name} className="h-full w-full object-contain p-2" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-[var(--skillea-navy)]">{member.name}</p>
                            <p className="text-sm text-[var(--skillea-navy)]/70">{member.role}</p>
                            <p className="mt-1 text-sm text-[var(--skillea-navy)]/60 leading-relaxed">{member.focus}</p>
                            <div className="mt-3">
                              <WrapperTag
                                {...(hasLinkedin
                                  ? {
                                      href: member.linkedinUrl,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className:
                                        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--skillea-soft-blue)]/60 text-[var(--skillea-navy)]/70 hover:text-[var(--skillea-navy)] hover:border-[var(--skillea-navy)] transition-colors",
                                    }
                                  : {
                                      className:
                                        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--skillea-ice)] text-[var(--skillea-navy)]/30 cursor-not-allowed",
                                      title: "Perfil de LinkedIn próximamente",
                                    })}
                              >
                                <Linkedin className="w-4 h-4" aria-hidden="true" />
                                {hasLinkedin && (
                                  <span className="sr-only">LinkedIn de {member.name}</span>
                                )}
                              </WrapperTag>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activePage === "staffing" && (
        <section id="staffing" className="pt-32 pb-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--skillea-ice)] px-4 py-2 text-sm font-semibold text-[var(--skillea-navy)]">
                <span className="inline-block h-2 w-2 rounded-full bg-[var(--skillea-soft-pink)]" /> Staffing
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl font-bold">Staffing &amp; Staff Augmentation</h1>
              <p className="mt-4 text-lg text-[var(--skillea-navy)]/70">
                Conectamos talento especializado con equipos que necesitan escalar rápido, combinando selección ágil,
                acompañamiento y foco en resultados.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Talento validado",
                  description:
                    "Profesionales evaluados por habilidades técnicas, experiencia en proyectos y ajuste cultural.",
                },
                {
                  title: "Integración rápida",
                  description:
                    "Procesos de onboarding y alineación para que el talento aporte valor desde la primera semana.",
                },
                {
                  title: "Seguimiento continuo",
                  description:
                    "Acompañamos con métricas, feedback y optimización de la colaboración entre equipos.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-[var(--skillea-soft-blue)]/40 bg-[var(--skillea-cloud)] p-8 shadow-sm">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[var(--skillea-navy)]">
                    <Users className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
                  <p className="text-sm text-[var(--skillea-navy)]/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 rounded-[32px] bg-gradient-to-r from-[var(--skillea-soft-pink)]/20 via-white to-[var(--skillea-soft-blue)]/30 p-10 border border-[var(--skillea-soft-blue)]/30">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-[var(--skillea-navy)]">¿Buscas escalar tu equipo?</h2>
                  <p className="mt-2 text-sm text-[var(--skillea-navy)]/70">
                    Armamos squads, perfiles individuales o equipos híbridos según la etapa de tu negocio.
                  </p>
                </div>
                <LinkToRoute
                  route="cta"
                  onNavigate={handleNavigate}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--skillea-navy)] text-white px-6 py-3 font-semibold shadow-md"
                >
                  Conversemos
                  <ArrowRight className="w-5 h-5" />
                </LinkToRoute>
              </div>
            </div>
          </div>
        </section>
      )}

      {activePage === "" && (
        <>
          {/* HERO */}
          <section className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div
                className="relative overflow-hidden rounded-[32px] text-white"
                style={{ backgroundImage: "var(--skillea-hero-gradient)", backgroundColor: "var(--skillea-deep-navy)" }}
              >
                <div className="absolute -right-24 -top-20 w-72 h-72 bg-[var(--skillea-soft-pink)]/40 blur-3xl rounded-full" />
                <div className="absolute -left-20 bottom-0 w-64 h-64 bg-[var(--skillea-star-yellow)]/30 blur-3xl rounded-full" />
                <div className="relative grid lg:grid-cols-[1.2fr,1fr] gap-16 p-10 md:p-16 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--skillea-star-yellow)]" />
                      Coaching Profesional &amp; Desarrollo Vocacional
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Alcanza tu máximo potencial profesional</h1>
                    <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
                      Impulsamos carreras a través de procesos personalizados, acompañamiento experto y una comunidad vibrante lista para apoyarte.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <LinkToRoute route="cta" onNavigate={handleNavigate} className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[var(--skillea-navy)] font-semibold shadow-xl">
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--skillea-star-yellow)] via-[var(--skillea-soft-peach)] to-[var(--skillea-soft-pink)] opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all" />
                        <span className="relative flex items-center gap-2">
                          Agenda tu sesión gratuita
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </LinkToRoute>
                      <LinkToRoute route="metodologia" onNavigate={handleNavigate} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/60 text-white/90 hover:bg-white/10 transition-colors font-semibold">
                        Conocer más
                      </LinkToRoute>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* METODOLOGÍA */}
          <section id="metodologia" className="py-24 px-6" style={{ backgroundColor: "var(--skillea-cloud)" }}>
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--skillea-ice)] px-4 py-2 text-sm font-semibold text-[var(--skillea-navy)]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[var(--skillea-star-yellow)]" /> Metodología
                </span>
                <h2 className="mt-6 text-4xl md:text-5xl font-bold">Un proceso diseñado para ver resultados</h2>
                <p className="mt-4 text-lg text-[var(--skillea-navy)]/70">Acompañamos cada etapa con claridad, herramientas y seguimiento constante para garantizar avances sostenidos.</p>
              </div>
              <div className="grid gap-8 md:grid-cols-4">
                {methodologySteps.map((step, index) => (
                  <div key={step.step} className="relative rounded-3xl border border-[var(--skillea-soft-blue)]/40 bg-white p-8 shadow-sm">
                    <div className="text-5xl font-bold text-[var(--skillea-soft-blue)]/70 mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[var(--skillea-navy)]/70">{step.description}</p>
                    {index < methodologySteps.length - 1 && <div className="hidden md:block absolute top-1/2 right-[-20px] h-px w-10 bg-[var(--skillea-soft-blue)]/40" />}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ACADEMIA */}
          <section id="academia" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--skillea-soft-peach)]/60 px-4 py-2 text-sm font-semibold text-[var(--skillea-navy)]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[var(--skillea-star-yellow)]" /> Academia
                </span>
                <h2 className="mt-6 text-4xl md:text-5xl font-bold">Aprende con programas diseñados para acelerar tu carrera</h2>
                <p className="mt-4 text-lg text-[var(--skillea-navy)]/70">
                  Nuestra academia combina aprendizaje práctico, acompañamiento experto y comunidades activas para potenciar tu crecimiento profesional.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {academyTracks.map((track) => (
                  <div key={track.title} className="rounded-3xl border border-[var(--skillea-soft-blue)]/40 bg-[var(--skillea-cloud)] p-8 shadow-sm">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[var(--skillea-navy)]">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{track.title}</h3>
                    <p className="text-sm text-[var(--skillea-navy)]/70 leading-relaxed">{track.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex flex-col items-center text-center">
                <p className="text-sm text-[var(--skillea-navy)]/60 max-w-2xl">
                  La experiencia completa vive en Skillea Academy. Abriremos la plataforma en una nueva pestaña para que puedas explorar cursos,
                  rutas y contenidos sin perder esta página.
                </p>
                <a
                  href={academyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--skillea-navy)] text-white px-7 py-3 font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  Abrir Academia en nueva pestaña
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="py-24 px-6">
            <div
              className="max-w-5xl mx-auto overflow-hidden rounded-[32px] text-[var(--skillea-navy)] shadow-[0_45px_80px_-50px_rgba(16,45,107,0.5)]"
              style={{ backgroundImage: "var(--skillea-cta-gradient)", backgroundColor: "var(--skillea-soft-pink)" }}
            >
              <div className="px-10 py-16 md:px-20 md:py-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">¿Listo para transformar tu carrera?</h2>
                <p className="text-lg md:text-xl text-[var(--skillea-navy)]/80 max-w-3xl mx-auto mb-10">
                  Agenda una sesión gratuita y descubre cómo podemos ayudarte a construir el futuro profesional que imaginas.
                </p>
                <LinkToRoute
                  route="cta"
                  onNavigate={handleNavigate}
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[var(--skillea-navy)] shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5"
                >
                  Comenzar ahora
                  <ArrowRight className="w-6 h-6" />
                </LinkToRoute>
              </div>
            </div>
          </section>
        </>
      )}

      {/* FOOTER */}
      <footer className="bg-[var(--skillea-mid-blue)] text-[var(--skillea-ice)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 md:grid-cols-3 mb-12">
            <div>
              <img src={logoSrc} alt="Skillea" className="h-10 w-auto mb-4" />
              <p className="text-sm text-[var(--skillea-ice)]/80 leading-relaxed">
                Transformando carreras a través del coaching profesional, el desarrollo continuo y la claridad vocacional.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-[var(--skillea-ice)]/80">
                <li><LinkToRoute route="nosotros" onNavigate={handleNavigate} className="hover:text-white transition-colors">Nosotros</LinkToRoute></li>
                <li><LinkToRoute route="staffing" onNavigate={handleNavigate} className="hover:text-white transition-colors">Staffing</LinkToRoute></li>
                <li><LinkToRoute route="academia" onNavigate={handleNavigate} className="hover:text-white transition-colors">Academia</LinkToRoute></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-[var(--skillea-ice)]/80">
                <li><a href="mailto:hello@skillea.com" className="hover:text-white transition-colors">Contáctanos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="mailto:soporte@skillea.com" className="hover:text-white transition-colors">Soporte</a></li>
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

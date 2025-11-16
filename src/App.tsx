// src/App.tsx
import React, { useEffect } from "react";
import {
  ArrowRight,
  Star,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Compass,
  Linkedin,
} from "lucide-react";

/* ==================== Utilidades SPA (URLs limpias) ==================== */
const BASE = import.meta.env.BASE_URL || "/"; // p.ej. '/skilleamainpage/'
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

function syncFromPathname() {
  const raw = window.location.pathname;
  let rest = raw.startsWith(BASE) ? raw.slice(BASE.length) : raw.replace(/^\/+/, "");
  rest = rest.replace(/^\/+|\/+$/g, "");
  const section = (rest as SectionId) || "";
  if (SECTION_IDS.includes(section)) navigateTo(section);
}

const LinkToSection: React.FC<
  React.PropsWithChildren<{ section: SectionId; className?: string }>
> = ({ section, className, children }) => {
  const href = section ? `${BASE}${section}` : BASE;
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigateTo(section);
      }}
    >
      {children}
    </a>
  );
};
/* ================== Fin utilidades SPA (URLs limpias) ================== */

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

const testimonials = [
  { name: "María G.", role: "Product Manager", text: "Logré claridad para mi cambio de carrera y en 8 semanas cerré una oferta." },
  { name: "Luis R.", role: "Data Analyst", text: "El plan y la mentoría me ayudaron a enfocarme y crecer con resultados." },
  { name: "Ana P.", role: "UX Designer", text: "Conseguí estructura, feedback y seguridad para mis entrevistas." },
];

const teamMembers = [
  {
    name: "Daniela Medina",
    role: "Coach de Transformación",
    focus: "Acompaña procesos de cambio cultural y liderazgo femenino.",
  },
  {
    name: "Gustavo Mujica",
    role: "Mentor de Carrera",
    focus: "Especialista en planes de transición hacia roles directivos.",
  },
  {
    name: "Ricardo Pulgar",
    role: "Consultor en Innovación",
    focus: "Integra metodologías ágiles para equipos orientados a resultados.",
    linkedinUrl: "https://www.linkedin.com/in/rickpm/",
  },
];

function App() {
  useEffect(() => {
    // Compat: si llega con #hash lo traducimos a ruta limpia
    if (window.location.hash) {
      const h = window.location.hash.replace("#", "");
      if (SECTION_IDS.includes(h as SectionId)) navigateTo(h as SectionId);
    } else {
      syncFromPathname();
    }
    const onPop = () => syncFromPathname();
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const logoSrc = `${BASE}WhatsApp_Image_2025-10-30_at_13.44.54_546e4640-removebg-preview.png`;

  return (
    <div className="min-h-screen bg-[var(--skillea-cloud)] text-[var(--skillea-navy)]">
      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-[var(--skillea-ice)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            <LinkToSection section="" className="inline-flex items-center gap-3" aria-label="Ir al inicio">
              <img src={logoSrc} alt="Skillea" className="h-14 w-auto" />
              <span className="sr-only">Skillea</span>
            </LinkToSection>
            <div className="hidden md:flex items-center gap-8">
              <LinkToSection section="nosotros" className="text-[var(--skillea-navy)]/70 hover:text-[var(--skillea-navy)] transition-colors">Nosotros</LinkToSection>
              <LinkToSection section="servicios" className="text-[var(--skillea-navy)]/70 hover:text-[var(--skillea-navy)] transition-colors">Servicios</LinkToSection>
              <LinkToSection section="metodologia" className="text-[var(--skillea-navy)]/70 hover:text-[var(--skillea-navy)] transition-colors">Metodología</LinkToSection>
              <LinkToSection section="testimonios" className="text-[var(--skillea-navy)]/70 hover:text-[var(--skillea-navy)] transition-colors">Testimonios</LinkToSection>
              <LinkToSection section="cta" className="bg-gradient-to-r from-[var(--skillea-soft-pink)] to-[var(--skillea-star-yellow)] text-[var(--skillea-navy)] px-6 py-2.5 rounded-full font-semibold shadow-sm hover:shadow-md transition-all">Comenzar</LinkToSection>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6" id="">
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
                  <LinkToSection section="cta" className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[var(--skillea-navy)] font-semibold shadow-xl">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--skillea-star-yellow)] via-[var(--skillea-soft-peach)] to-[var(--skillea-soft-pink)] opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all" />
                    <span className="relative flex items-center gap-2">
                      Agenda tu sesión gratuita
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </LinkToSection>
                  <LinkToSection section="servicios" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/60 text-white/90 hover:bg-white/10 transition-colors font-semibold">
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

      {/* NOSOTROS */}
      <section id="nosotros" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[1.1fr,0.9fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--skillea-soft-peach)]/60 px-4 py-2 text-sm font-semibold text-[var(--skillea-navy)]">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--skillea-star-yellow)]" /> Nosotros
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[var(--skillea-navy)]">Acompañamos a profesionales y equipos hacia su próxima etapa</h2>
            <p className="mt-6 text-lg text-[var(--skillea-navy)]/70 leading-relaxed">
              Somos un colectivo de coaches, consultores y especialistas en talento que combina metodologías ágiles,
              psicología organizacional y data para impulsar decisiones profesionales con confianza. Diseñamos programas
              que conectan propósito, estrategia y ejecución en cada acompañamiento.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { title: "Misión", description: "Empoderar a cada profesional para diseñar un camino laboral sostenible, alineado con sus talentos y valores." },
                { title: "Visión", description: "Ser la referencia en América Latina en coaching profesional basado en evidencia y acompañamiento humano." },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-[var(--skillea-soft-blue)]/40 bg-[var(--skillea-cloud)] p-6">
                  <h3 className="text-xl font-semibold text-[var(--skillea-navy)] mb-2">{item.title}</h3>
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
                  <h3 className="text-2xl font-bold text-[var(--skillea-navy)]">Nuestro equipo</h3>
                  <p className="mt-3 text-sm text-[var(--skillea-navy)]/70 leading-relaxed">
                    Facilitadores certificados en coaching ejecutivo, desarrollo de habilidades digitales y diseño de carrera acompañan
                    cada proceso con cercanía y métricas claras.
                  </p>
                </div>
                  {/* Nuestro equipo */}
                  <div className="grid gap-4">
                    {teamMembers.map((member) => {
                      const hasLinkedin = Boolean(member.linkedinUrl);
                      const WrapperTag = (hasLinkedin ? "a" : "span") as const;
                      return (
                        <div key={member.name} className="flex gap-4 items-start">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--skillea-soft-pink)] to-[var(--skillea-light-blue)] text-[var(--skillea-navy)] font-semibold">
                            {member.name.charAt(0)}
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

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--skillea-navy)]">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--skillea-soft-pink)]" /> Servicios
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[var(--skillea-navy)]">Soluciones para cada etapa de tu carrera</h2>
            <p className="mt-4 text-lg text-[var(--skillea-navy)]/70">Diseñamos experiencias que equilibran la estrategia, el desarrollo de habilidades y la claridad vocacional.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-[0_35px_60px_-40px_rgba(16,45,107,0.35)] border border-[var(--skillea-soft-blue)]/40">
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[var(--skillea-soft-blue)]/30 blur-3xl transition-transform duration-500 group-hover:scale-125" />
                <div className={`relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.accentWrapper}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="relative text-2xl font-bold mb-4">{service.title}</h3>
                <p className="relative text-[var(--skillea-navy)]/70 leading-relaxed mb-6">{service.description}</p>
                <ul className="relative space-y-3 mb-6">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-sm text-[var(--skillea-navy)]/80">
                      <CheckCircle className={`w-5 h-5 ${service.bulletAccent}`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative rounded-2xl bg-[var(--skillea-cloud)]/70 px-4 py-3 text-sm text-[var(--skillea-navy)]/80 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {service.hoverDetails}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--skillea-soft-pink)]/40 to-transparent" />
              </div>
            ))}
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

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-24 px-6 bg-[var(--skillea-ice)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--skillea-navy)]">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--skillea-soft-pink)]" /> Testimonios
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">Historias de evolución profesional</h2>
            <p className="mt-4 text-lg text-[var(--skillea-navy)]/70">Profesionales que transformaron su carrera y encontraron claridad con nuestra metodología.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="relative rounded-3xl bg-white p-8 shadow-[0_25px_60px_-40px_rgba(16,45,107,0.35)] border border-[var(--skillea-soft-blue)]/40">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--skillea-star-yellow)] text-[var(--skillea-star-yellow)]" />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-[var(--skillea-navy)]/80 mb-6 italic">“{t.text}”</p>
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
            <LinkToSection
              section="cta"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[var(--skillea-navy)] shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5"
            >
              Comenzar ahora
              <ArrowRight className="w-6 h-6" />
            </LinkToSection>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--skillea-mid-blue)] text-[var(--skillea-ice)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div>
              <img src={logoSrc} alt="Skillea" className="h-10 w-auto mb-4" />
              <p className="text-sm text-[var(--skillea-ice)]/80 leading-relaxed">
                Transformando carreras a través del coaching profesional, el desarrollo continuo y la claridad vocacional.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-[var(--skillea-ice)]/80">
                <li><LinkToSection section="servicios" className="hover:text-white transition-colors">Coaching Profesional</LinkToSection></li>
                <li><LinkToSection section="servicios" className="hover:text-white transition-colors">Desarrollo de Habilidades</LinkToSection></li>
                <li><LinkToSection section="servicios" className="hover:text-white transition-colors">Orientación Vocacional</LinkToSection></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-[var(--skillea-ice)]/80">
                <li><LinkToSection section="nosotros" className="hover:text-white transition-colors">Nosotros</LinkToSection></li>
                <li><LinkToSection section="testimonios" className="hover:text-white transition-colors">Equipo</LinkToSection></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
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


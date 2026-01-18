import React, { useCallback, useEffect, useRef, useState } from "react";
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
const NORMALIZED_BASE = BASE.endsWith("/") ? BASE : `${BASE}/`;
const PAGE_IDS = ["", "nosotros", "staffing"] as const;
const HOME_SECTION_IDS = ["servicios", "metodologia", "academia", "cta"] as const;

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

/* ================== Datos ================== */
const services = [
  {
    title: "Coaching Profesional",
    description: "Acompañamiento 1:1 con enfoque en claridad, estrategia y resultados medibles.",
    icon: Briefcase,
    accentWrapper: "bg-[var(--skillea-ice)] text-[var(--skillea-navy)] border border-[var(--skillea-soft-blue)]",
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
    description: "Plan de crecimiento con prácticas guiadas y seguimiento de metas.",
    icon: GraduationCap,
    accentWrapper: "bg-[var(--skillea-soft-peach)]/30 text-[var(--skillea-navy)]",
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
    description: "Descubre tu dirección profesional con evaluación y diseño de carrera.",
    icon: Compass,
    accentWrapper: "bg-[var(--skillea-soft-blue)]/30 text-[var(--skillea-navy)]",
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

const teamMembers = [
  {
    name: "Daniela Medina",
    role: "Coach de Transformación",
    focus: "Acompaña procesos de cambio cultural y liderazgo femenino.",
    photo: "team/daniela-medina.svg",
    accent: "from-[var(--skillea-soft-pink)] to-[var(--skillea-light-blue)]",
  },
  {
    name: "Gustavo Mujica",
    role: "Mentor de Carrera",
    focus: "Especialista en planes de transición hacia roles directivos.",
    photo: "team/gustavo-mujica.svg",
    accent: "from-[var(--skillea-star-yellow)] to-[var(--skillea-soft-peach)]",
  },
  {
    name: "Ricardo Pulgar",
    role: "Consultor en Innovación",
    focus: "Integra metodologías ágiles para equipos orientados a resultados.",
    photo: "team/ricardo-pulgar.svg",
    accent: "from-[var(--skillea-light-blue)] to-[var(--skillea-soft-blue)]",
    linkedinUrl: "https://www.linkedin.com/in/rickpm/",
  },
];

const academyTracks = [
  {
    title: "Bootcamps de habilidades",
    description: "Programas intensivos para consolidar competencias digitales, liderazgo y comunicación efectiva.",
  },
  {
    title: "Rutas de certificación",
    description: "Trayectorias guiadas con proyectos prácticos y evaluaciones para validar tu progreso.",
  },
  {
    title: "Workshops para equipos",
    description: "Sesiones personalizadas para potenciar el desempeño colectivo y la cultura de aprendizaje continuo.",
  },
];

function App() {
  const academyUrl = "https://academia.skillea.com";
  const [activePage, setActivePage] = useState<PageId>("");
  const pendingScroll = useRef<HomeSectionId | null>(null);

  const sync = useCallback(() => {
    const parsed = parsePathname();
    setActivePage(parsed.page);
    pendingScroll.current = parsed.section;
  }, []);

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
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, [sync]);

  useEffect(() => {
    if (!pendingScroll.current) return;
    const section = pendingScroll.current;
    pendingScroll.current = null;
    requestAnimationFrame(() => {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [activePage]);

  const logoSrc = `${NORMALIZED_BASE}WhatsApp_Image_2025-10-30_at_13.44.54_546e4640-removebg-preview.png`;

  return (
    <div className="min-h-screen bg-[var(--skillea-cloud)] text-[var(--skillea-navy)]">
      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-[var(--skillea-ice)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <LinkToRoute route="" onNavigate={handleNavigate} className="inline-flex items-center gap-3">
            <img src={logoSrc} alt="Skillea" className="h-14 w-auto" />
          </LinkToRoute>
          <div className="hidden md:flex items-center gap-8">
            <LinkToRoute route="nosotros" onNavigate={handleNavigate}>Nosotros</LinkToRoute>
            <LinkToRoute route="servicios" onNavigate={handleNavigate}>Servicios</LinkToRoute>
            <LinkToRoute route="metodologia" onNavigate={handleNavigate}>Metodología</LinkToRoute>
            <LinkToRoute route="staffing" onNavigate={handleNavigate}>Staffing</LinkToRoute>
            <LinkToRoute route="academia" onNavigate={handleNavigate}>Academia</LinkToRoute>
            <LinkToRoute route="cta" onNavigate={handleNavigate} className="bg-gradient-to-r from-[var(--skillea-soft-pink)] to-[var(--skillea-star-yellow)] px-6 py-2.5 rounded-full font-semibold">Comenzar</LinkToRoute>
          </div>
        </div>
      </nav>

      {/* RENDERIZADO CONDICIONAL */}
      {activePage === "nosotros" ? (
        <section id="nosotros" className="pt-32 pb-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">Sobre Nosotros</h1>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="p-6 bg-gray-50 rounded-3xl border">
                  <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${member.accent} p-1 mb-4`}>
                    <div className="h-full w-full bg-white rounded-xl flex items-center justify-center overflow-hidden">
                      <img src={`${NORMALIZED_BASE}${member.photo}`} alt={member.name} className="h-full w-full object-contain p-2" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : activePage === "staffing" ? (
        <section id="staffing" className="pt-32 pb-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Staffing Solutions</h1>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { title: "Talento validado", icon: Users },
                { title: "Integración rápida", icon: Sparkles },
                { title: "Seguimiento", icon: CheckCircle }
              ].map((item) => (
                <div key={item.title} className="p-8 bg-gray-50 rounded-3xl border">
                  <item.icon className="h-10 w-10 mx-auto mb-4 text-navy" />
                  <h3 className="font-bold">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* HOME / HERO */}
          <section className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto bg-[var(--skillea-deep-navy)] rounded-[32px] p-16 text-white text-center relative overflow-hidden">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Alcanza tu potencial</h1>
              <p className="text-xl opacity-80 mb-10">Coaching profesional y desarrollo vocacional personalizado.</p>
              <LinkToRoute route="cta" onNavigate={handleNavigate} className="bg-white text-navy px-8 py-4 rounded-full font-bold">Agenda tu sesión</LinkToRoute>
            </div>
          </section>

          {/* SERVICIOS */}
          <section id="servicios" className="py-24 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.title} className="group relative p-10 bg-white rounded-3xl border shadow-lg overflow-hidden">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-6 ${service.accentWrapper}`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="opacity-0 group-hover:opacity-100 transition-all text-sm bg-gray-50 p-4 rounded-xl">
                    {service.hoverDetails}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* FOOTER */}
      <footer className="bg-navy text-white py-16 px-6 text-center">
        <img src={logoSrc} alt="Skillea" className="h-10 mx-auto mb-6" />
        <p className="opacity-70">&copy; {new Date().getFullYear()} Skillea. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

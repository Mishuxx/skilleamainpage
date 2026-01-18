import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  ArrowRight,
  Star,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Compass,
  Linkedin,
} from "lucide-react";

/* ==================== Utilidades SPA ==================== */
const BASE = import.meta.env.BASE_URL || "/";
const HOME_SECTION_IDS = ["", "nosotros", "servicios", "metodologia", "testimonios", "cta"] as const;
const PAGE_IDS = ["staffing"] as const;

type HomeSectionId = (typeof HOME_SECTION_IDS)[number];
type PageId = (typeof PAGE_IDS)[number] | "";
type RouteId = HomeSectionId | PageId;

interface RouteState {
  page: PageId;
  section: HomeSectionId | null;
}

const LinkToSection: React.FC<React.PropsWithChildren<{ section: HomeSectionId; className?: string }>> = ({
  section,
  className,
  children,
}) => {
  const href = section ? `${BASE}#${section}` : BASE;
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState({}, "", href);
      }}
    >
      {children}
    </a>
  );
};

/* ================== Tipos y Datos ================== */
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
    description: "Acompañamiento 1:1 con enfoque en claridad, estrategia y resultados medibles.",
    icon: Briefcase,
    accentWrapper: "bg-[var(--skillea-ice)] text-[var(--skillea-navy)] border border-[var(--skillea-soft-blue)]",
    bulletAccent: "text-[var(--skillea-soft-pink)]",
    bullets: ["Diagnóstico profundo", "Sesiones estratégicas", "Planes de acción"],
    hoverDetails: "Mapeamos tus objetivos y definimos indicadores de impacto.",
  },
  {
    title: "Desarrollo de Habilidades",
    description: "Plan de crecimiento con prácticas guiadas y seguimiento de metas.",
    icon: GraduationCap,
    accentWrapper: "bg-[var(--skillea-soft-peach)]/30 text-[var(--skillea-navy)]",
    bulletAccent: "text-[var(--skillea-star-yellow)]",
    bullets: ["Entrenamientos experienciales", "Feedback constante", "Evaluaciones"],
    hoverDetails: "Activamos habilidades técnicas y blandas con retos semanales.",
  },
  {
    title: "Orientación Vocacional",
    description: "Descubre tu dirección profesional con evaluación y diseño de carrera.",
    icon: Compass,
    accentWrapper: "bg-[var(--skillea-soft-blue)]/30 text-[var(--skillea-navy)]",
    bulletAccent: "text-[var(--skillea-light-blue)]",
    bullets: ["Exploración de fortalezas", "Diseño de carrera", "Plan de transición"],
    hoverDetails: "Tomarás decisiones con claridad y pasos concretos.",
  },
];

const teamMembers = [
  {
    name: "Daniela Medina",
    role: "Coach de Transformación",
    focus: "Acompaña procesos de cambio cultural.",
    photo: "Danipixel.png",
    accent: "from-[var(--skillea-soft-pink)] to-[var(--skillea-light-blue)]",
  },
  {
    name: "Gustavo Mujica",
    role: "Mentor de Carrera",
    focus: "Especialista en transiciones directivas.",
    photo: "Guspixel.png",
    accent: "from-[var(--skillea-star-yellow)] to-[var(--skillea-soft-peach)]",
  },
  {
    name: "Ricardo Pulgar",
    role: "Consultor en Innovación",
    focus: "Metodologías ágiles para equipos.",
    photo: "Rickpixel.png",
    accent: "from-[var(--skillea-light-blue)] to-[var(--skillea-soft-blue)]",
    linkedinUrl: "https://www.linkedin.com/in/rickpm/",
  },
];

const methodologySteps = [
  { step: 1, title: "Diagnóstico", description: "Definimos objetivos." },
  { step: 2, title: "Plan de Acción", description: "Creamos tu ruta personalizada." },
  { step: 3, title: "Ejecución", description: "Avanzamos cada semana." },
  { step: 4, title: "Seguimiento", description: "Medimos resultados." },
];

const testimonials = [
  { name: "Andrés G.", role: "Senior Dev", text: "Encontré el foco que necesitaba para mi próximo paso." },
  { name: "Maria F.", role: "Product Manager", text: "La metodología es clara y muy humana." },
  { name: "Carlos R.", role: "Team Lead", text: "Excelente acompañamiento estratégico." },
];

function App() {
  const [activePage, setActivePage] = useState<PageId>("");
  const pendingScroll = useRef<HomeSectionId | null>(null);

  const sync = useCallback(() => {
    const raw = window.location.pathname;
    let rest = raw.startsWith(BASE) ? raw.slice(BASE.length) : raw.replace(/^\/+/, "");
    rest = rest.replace(/^\/+|\/+$/g, "");
    if (PAGE_IDS.includes(rest as PageId)) {
      setActivePage(rest as PageId);
    } else {
      setActivePage("");
    }
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, [sync]);

  const logoSrc = `${BASE}WhatsApp_Image_2025-10-30_at_13.44.54_546e4640-removebg-preview.png`;

  return (
    <div className="min-h-screen bg-[var(--skillea-cloud)] text-[var(--skillea-navy)]">
      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-[var(--skillea-ice)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
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
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6" id="">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[32px] text-white bg-[var(--skillea-deep-navy)] p-10 md:p-16">
            <div className="relative grid lg:grid-cols-[1.2fr,1fr] gap-16 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Alcanza tu máximo potencial profesional</h1>
                <p className="text-lg text-white/80 mb-8">Impulsamos carreras a través de procesos personalizados.</p>
                <div className="flex gap-4">
                  <LinkToSection section="cta" className="bg-white text-navy px-8 py-4 rounded-full font-bold">Agenda tu sesión</LinkToSection>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-10 text-navy shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-[var(--skillea-navy)]">Plan de crecimiento</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[var(--skillea-navy)]"><CheckCircle className="w-6 h-6" /> Orientación Personalizada</div>
                  <div className="flex items-center gap-3 text-[var(--skillea-navy)]"><CheckCircle className="w-6 h-6" /> Resultados Medibles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Acompañamos a profesionales</h2>
            <p className="text-lg text-gray-600">Somos un colectivo de coaches y consultores expertos.</p>
          </div>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border">
                <div className={`h-16 w-16 rounded-full bg-gradient-to-br ${member.accent} p-1`}>
                  <div className="h-full w-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img src={`${BASE}${member.photo}`} alt={member.name} className="h-10 w-10 object-contain" />
                  </div>
                </div>
                <div>
                  <p className="font-bold">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="p-10 bg-white rounded-3xl border shadow-lg group">
              <div className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-6 ${s.accentWrapper}`}>
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-600 mb-6">{s.description}</p>
              <div className="opacity-0 group-hover:opacity-100 transition-all text-sm bg-gray-50 p-3 rounded-xl">{s.hoverDetails}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[var(--skillea-soft-pink)] to-[var(--skillea-star-yellow)] rounded-[32px] p-16 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para transformar tu carrera?</h2>
          <LinkToSection section="cta" className="inline-flex bg-white px-8 py-4 rounded-full font-bold shadow-lg">Comenzar ahora <ArrowRight className="ml-2" /></LinkToSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--skillea-mid-blue)] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <img src={logoSrc} className="h-10 mx-auto mb-6" alt="Logo" />
          <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} Skillea. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

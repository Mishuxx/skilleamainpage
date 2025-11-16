import { ArrowRight, HeartHandshake, Sparkles, Target } from 'lucide-react';

const assetBase = import.meta.env.BASE_URL ?? '/';

const teamMembers = [
  {
    name: 'Daniela Medina',
    role: 'Co-Fundadora & Coach Ejecutiva',
    bio: 'Especialista en liderazgo consciente y desarrollo de equipos de alto rendimiento con más de 12 años de experiencia en transformación organizacional.',
    image: `${assetBase}team/daniela-medina.svg`
  },
  {
    name: 'Ricardo Pulgar',
    role: 'Mentor de Innovación y Talento',
    bio: 'Facilitador de metodologías ágiles, mentor de emprendedores y apasionado por crear culturas que impulsan la experimentación continua.',
    image: `${assetBase}team/ricardo-pulgar.svg`
  },
  {
    name: 'Gustavo Mujica',
    role: 'Director de Estrategia de Carrera',
    bio: 'Diseña rutas de aprendizaje y planes de carrera que conectan talento latinoamericano con oportunidades globales en tecnología y negocios.',
    image: `${assetBase}team/gustavo-mujica.svg`
  }
];

type AboutPageProps = {
  onNavigateToSection?: (sectionId: string) => void;
};

function AboutPage({ onNavigateToSection }: AboutPageProps) {
  return (
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className="relative overflow-hidden rounded-[32px] bg-[var(--skillea-deep-navy)] text-white"
            style={{ backgroundImage: 'var(--skillea-hero-gradient)' }}
          >
            <div className="absolute inset-0 bg-[var(--skillea-deep-navy)]/40" aria-hidden="true" />
            <div className="absolute -right-32 -top-20 w-80 h-80 bg-[var(--skillea-soft-pink)]/30 blur-3xl rounded-full" aria-hidden="true" />
            <div className="absolute -left-24 bottom-0 w-72 h-72 bg-[var(--skillea-star-yellow)]/20 blur-3xl rounded-full" aria-hidden="true" />
            <div className="relative px-10 py-16 md:px-16 md:py-20 grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/80">
                  <Sparkles className="w-4 h-4" /> Nuestro Propósito
                </span>
                <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                  Acompañamos a profesionales latinoamericanos a diseñar carreras con sentido
                </h1>
                <p className="mt-6 text-lg text-white/80 leading-relaxed">
                  Creemos en el poder de combinar coaching humano, datos y comunidad para desbloquear oportunidades. Nuestra misión es que cada persona encuentre claridad, confianza y herramientas para evolucionar sin perder su autenticidad.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a
                    href="/#servicios"
                    onClick={(event) => {
                      if (onNavigateToSection) {
                        event.preventDefault();
                        onNavigateToSection('servicios');
                      }
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[var(--skillea-navy)] font-semibold shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5"
                  >
                    Explorar servicios
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:hello@skillea.com"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-8 py-4 text-white/90 font-semibold hover:bg-white/10 transition-colors"
                  >
                    Conversemos
                  </a>
                </div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-lg">
                <h2 className="text-2xl font-semibold mb-4">Lo que nos mueve</h2>
                <ul className="space-y-4 text-sm text-white/80">
                  <li className="flex gap-3">
                    <Target className="w-5 h-5 text-[var(--skillea-star-yellow)]" />
                    Diseñar estrategias accionables que conecten metas personales con oportunidades reales.
                  </li>
                  <li className="flex gap-3">
                    <HeartHandshake className="w-5 h-5 text-[var(--skillea-soft-peach)]" />
                    Acompañar con empatía, respeto y procesos inclusivos que celebran la diversidad de trayectorias.
                  </li>
                  <li className="flex gap-3">
                    <Sparkles className="w-5 h-5 text-[var(--skillea-soft-pink)]" />
                    Crear experiencias memorables que combinan metodologías ágiles con creatividad y bienestar.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[var(--skillea-ice)]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--skillea-navy)] shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--skillea-soft-pink)]" /> Nuestro Equipo
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[var(--skillea-navy)]">Personas que acompañan tu evolución</h2>
          <p className="mt-4 text-lg text-[var(--skillea-navy)]/70 max-w-3xl mx-auto">
            Conectamos múltiples disciplinas para ofrecerte acompañamiento estratégico y humano en cada etapa de tu trayectoria profesional.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative h-full rounded-3xl bg-white p-8 text-left shadow-[0_35px_60px_-40px_rgba(16,45,107,0.35)] border border-[var(--skillea-soft-blue)]/40"
            >
              <div className="mb-6 flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-48 w-32 object-contain drop-shadow-[0_20px_30px_rgba(16,45,107,0.25)]"
                  loading="lazy"
                />
              </div>
              <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--skillea-soft-pink)] via-[var(--skillea-light-blue)] to-[var(--skillea-star-yellow)] px-4 py-3 text-sm font-semibold text-[var(--skillea-navy)]">
                {member.role}
              </div>
              <h3 className="text-2xl font-bold text-[var(--skillea-navy)] mb-3">{member.name}</h3>
              <p className="text-sm leading-relaxed text-[var(--skillea-navy)]/70">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--skillea-navy)] mb-6">Creamos alianzas que potencian tu futuro</h2>
          <p className="text-lg text-[var(--skillea-navy)]/70 mb-10">
            Trabajamos con universidades, empresas y comunidades tecnológicas para abrir nuevas rutas de crecimiento profesional. Nuestras experiencias combinan mentoría especializada, networking y herramientas prácticas.
          </p>
          <a
            href="mailto:alianzas@skillea.com"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--skillea-soft-pink)] via-[var(--skillea-soft-peach)] to-[var(--skillea-star-yellow)] px-10 py-4 text-lg font-semibold text-[var(--skillea-navy)] shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5"
          >
            Explorar colaboración
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </>
  );
}

export default AboutPage;

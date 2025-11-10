import { ArrowRight, BookOpen, CheckCircle, Star, Target, TrendingUp } from 'lucide-react';

const services = [
  {
    title: 'Coaching Profesional',
    description:
      'Sesiones individuales enfocadas en definir y alcanzar tus objetivos profesionales con estrategias personalizadas.',
    icon: Target,
    accentWrapper: 'bg-[var(--skillea-star-yellow)] text-[var(--skillea-navy)]',
    bulletAccent: 'text-[var(--skillea-star-yellow)]'
  },
  {
    title: 'Desarrollo de Habilidades',
    description:
      'Programas educativos diseñados para potenciar competencias clave del mercado laboral actual.',
    icon: BookOpen,
    accentWrapper: 'bg-[var(--skillea-soft-pink)] text-[var(--skillea-navy)]',
    bulletAccent: 'text-[var(--skillea-soft-pink)]'
  },
  {
    title: 'Orientación Vocacional',
    description:
      'Descubre tu camino profesional ideal con evaluaciones especializadas y asesoría experta.',
    icon: TrendingUp,
    accentWrapper: 'bg-[var(--skillea-soft-peach)] text-[var(--skillea-navy)]',
    bulletAccent: 'text-[var(--skillea-soft-peach)]'
  }
];

const methodologySteps = [
  {
    step: '01',
    title: 'Diagnóstico',
    description: 'Evaluamos tu situación actual y definimos objetivos claros.'
  },
  {
    step: '02',
    title: 'Planificación',
    description: 'Diseñamos una estrategia personalizada para tu desarrollo.'
  },
  {
    step: '03',
    title: 'Acción',
    description: 'Implementamos el plan con sesiones y recursos específicos.'
  },
  {
    step: '04',
    title: 'Evolución',
    description: 'Medimos resultados y ajustamos para una mejora continua.'
  }
];

const testimonials = [
  {
    name: 'María González',
    role: 'Product Manager',
    text: 'Skillea me ayudó a hacer la transición de marketing a producto. El coaching fue fundamental para ganar confianza y las habilidades necesarias.'
  },
  {
    name: 'Carlos Ruiz',
    role: 'Senior Developer',
    text: 'Gracias al programa de desarrollo, conseguí mi primer rol senior. La orientación fue precisa y las sesiones muy prácticas.'
  },
  {
    name: 'Ana Martínez',
    role: 'UX Designer',
    text: 'Después de años sin dirección clara, encontré mi vocación. El equipo de Skillea me acompañó en cada paso del proceso.'
  }
];

function HomePage() {
  return (
    <>
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative overflow-hidden rounded-[32px] text-white"
            style={{ backgroundImage: 'var(--skillea-hero-gradient)', backgroundColor: 'var(--skillea-deep-navy)' }}
          >
            <div className="absolute -right-24 -top-20 w-72 h-72 bg-[var(--skillea-soft-pink)]/40 blur-3xl rounded-full" aria-hidden="true" />
            <div className="absolute -left-20 bottom-0 w-64 h-64 bg-[var(--skillea-star-yellow)]/30 blur-3xl rounded-full" aria-hidden="true" />
            <div className="relative grid lg:grid-cols-[1.2fr,1fr] gap-16 p-10 md:p-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--skillea-star-yellow)]" />
                  Coaching Profesional & Desarrollo Vocacional
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Alcanza tu máximo potencial profesional
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
                  Impulsamos carreras a través de procesos personalizados, acompañamiento experto y una comunidad vibrante lista para apoyarte.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[var(--skillea-navy)] font-semibold shadow-xl transition-transform focus:outline-none focus:ring-2 focus:ring-white/40">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--skillea-star-yellow)] via-[var(--skillea-soft-peach)] to-[var(--skillea-soft-pink)] opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all" />
                    <span className="relative flex items-center gap-2">
                      Agenda tu sesión gratuita
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                  <a
                    href="/#servicios"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/60 text-white/90 hover:bg-white/10 transition-colors font-semibold"
                  >
                    Conocer más
                  </a>
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
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="w-5 h-5 fill-[var(--skillea-star-yellow)] text-[var(--skillea-star-yellow)]" />
                      ))}
                    </div>
                    <p className="text-sm text-white/80">Valoración promedio</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl bg-white text-[var(--skillea-navy)] shadow-2xl">
                  <div className="absolute -top-24 -right-16 w-48 h-48 bg-[var(--skillea-soft-pink)]/20 blur-3xl rounded-full" aria-hidden="true" />
                  <div className="p-10 space-y-6 relative">
                    <div>
                      <p className="text-sm font-semibold text-[var(--skillea-navy)]/60 mb-2">Lo que trabajaremos</p>
                      <h3 className="text-2xl font-bold">Tu plan de crecimiento personalizado</h3>
                    </div>
                    <div className="space-y-5">
                      {[
                        {
                          title: 'Orientación Personalizada',
                          description: 'Sesiones diseñadas para tus metas únicas.'
                        },
                        {
                          title: 'Resultados Medibles',
                          description: 'Seguimiento continuo de tu progreso.'
                        },
                        {
                          title: 'Comunidad de Apoyo',
                          description: 'Red de profesionales que impulsan tu crecimiento.'
                        }
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

      <section id="servicios" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--skillea-navy)] shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--skillea-soft-pink)]" /> Servicios
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[var(--skillea-navy)]">Soluciones para cada etapa de tu carrera</h2>
            <p className="mt-4 text-lg text-[var(--skillea-navy)]/70">
              Diseñamos experiencias que equilibran la estrategia, el desarrollo de habilidades y la claridad vocacional.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-[0_35px_60px_-40px_rgba(16,45,107,0.35)] border border-[var(--skillea-soft-blue)]/40"
              >
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[var(--skillea-soft-blue)]/30 blur-3xl transition-transform duration-500 group-hover:scale-125" aria-hidden="true" />
                <div className={`relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.accentWrapper}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="relative text-2xl font-bold mb-4">{service.title}</h3>
                <p className="relative text-[var(--skillea-navy)]/70 leading-relaxed mb-6">{service.description}</p>
                <ul className="relative space-y-3 mb-6">
                  {['Plan de desarrollo personalizado', 'Sesiones semanales 1-on-1', 'Seguimiento de metas'].map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-center gap-3 text-sm text-[var(--skillea-navy)]/80">
                      <CheckCircle className={`w-5 h-5 ${service.bulletAccent}`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <button className="relative inline-flex items-center gap-2 text-sm font-semibold text-[var(--skillea-navy)] transition-transform group-hover:translate-x-1">
                  Saber más
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--skillea-soft-pink)]/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="metodologia"
        className="py-24 px-6"
        style={{ backgroundColor: 'var(--skillea-cloud)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--skillea-ice)] px-4 py-2 text-sm font-semibold text-[var(--skillea-navy)]">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--skillea-star-yellow)]" /> Metodología
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">Un proceso diseñado para ver resultados</h2>
            <p className="mt-4 text-lg text-[var(--skillea-navy)]/70">
              Acompañamos cada etapa con claridad, herramientas y seguimiento constante para garantizar avances sostenidos.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {methodologySteps.map((step, index) => (
              <div key={step.step} className="relative rounded-3xl border border-[var(--skillea-soft-blue)]/40 bg-white p-8 shadow-sm">
                <div className="text-5xl font-bold text-[var(--skillea-soft-blue)]/70 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--skillea-navy)]/70">{step.description}</p>
                {index < methodologySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-[-20px] h-px w-10 bg-[var(--skillea-soft-blue)]/40" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonios" className="py-24 px-6 bg-[var(--skillea-ice)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--skillea-navy)]">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--skillea-soft-pink)]" /> Testimonios
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">Historias de evolución profesional</h2>
            <p className="mt-4 text-lg text-[var(--skillea-navy)]/70">
              Profesionales que transformaron su carrera y encontraron claridad con nuestra metodología.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative rounded-3xl bg-white p-8 shadow-[0_25px_60px_-40px_rgba(16,45,107,0.35)] border border-[var(--skillea-soft-blue)]/40"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-[var(--skillea-star-yellow)] text-[var(--skillea-star-yellow)]" />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-[var(--skillea-navy)]/80 mb-6 italic">
                  “{testimonial.text}”
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--skillea-soft-pink)] to-[var(--skillea-light-blue)] text-[var(--skillea-navy)] font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-[var(--skillea-navy)]/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div
          className="max-w-5xl mx-auto overflow-hidden rounded-[32px] text-[var(--skillea-navy)] shadow-[0_45px_80px_-50px_rgba(16,45,107,0.5)]"
          style={{ backgroundImage: 'var(--skillea-cta-gradient)', backgroundColor: 'var(--skillea-soft-pink)' }}
        >
          <div className="px-10 py-16 md:px-20 md:py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">¿Listo para transformar tu carrera?</h2>
            <p className="text-lg md:text-xl text-[var(--skillea-navy)]/80 max-w-3xl mx-auto mb-10">
              Agenda una sesión gratuita y descubre cómo podemos ayudarte a construir el futuro profesional que imaginas.
            </p>
            <button className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[var(--skillea-navy)] shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5">
              Comenzar ahora
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;

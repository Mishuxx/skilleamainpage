import { ArrowRight, BookOpen, Target, Users, TrendingUp, CheckCircle, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/WhatsApp_Image_2025-10-30_at_13.44.54_546e4640-removebg-preview.png"
                alt="Skillea"
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Servicios</a>
              <a href="#metodologia" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Metodología</a>
              <a href="#testimonios" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Testimonios</a>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm hover:shadow-md">
                Comenzar
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Coaching Profesional & Desarrollo Vocacional
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Alcanza tu máximo potencial profesional
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transformamos carreras a través de coaching personalizado, desarrollo de habilidades y estrategias probadas para el éxito profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                  Agenda tu sesión gratuita
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all font-semibold">
                  Conocer más
                </button>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Profesionales formados</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Tasa de satisfacción</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">Valoración promedio</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-8 transform -rotate-3">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Orientación Personalizada</h3>
                        <p className="text-sm text-gray-600">Coaching adaptado a tus metas únicas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Resultados Medibles</h3>
                        <p className="text-sm text-gray-600">Seguimiento continuo de tu progreso</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Comunidad de Apoyo</h3>
                        <p className="text-sm text-gray-600">Red de profesionales en crecimiento</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones integrales para impulsar tu carrera profesional
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Coaching Profesional</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sesiones individuales enfocadas en definir y alcanzar tus objetivos profesionales con estrategias personalizadas.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Plan de desarrollo personalizado</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Sesiones semanales 1-on-1</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Seguimiento de metas</span>
                </li>
              </ul>
              <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Saber más <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Desarrollo de Habilidades</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Programas educativos diseñados para potenciar competencias clave del mercado laboral actual.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Cursos especializados</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Talleres prácticos</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Certificaciones reconocidas</span>
                </li>
              </ul>
              <button className="text-green-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Saber más <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Orientación Vocacional</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Descubre tu camino profesional ideal con evaluaciones especializadas y asesoría experta.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>Evaluaciones vocacionales</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>Análisis de fortalezas</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>Plan de carrera</span>
                </li>
              </ul>
              <button className="text-purple-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Saber más <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="metodologia" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestra Metodología
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un proceso estructurado que garantiza resultados tangibles
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Diagnóstico', desc: 'Evaluamos tu situación actual y definimos objetivos claros' },
              { step: '02', title: 'Planificación', desc: 'Diseñamos una estrategia personalizada para tu desarrollo' },
              { step: '03', title: 'Acción', desc: 'Implementamos el plan con sesiones y recursos específicos' },
              { step: '04', title: 'Evolución', desc: 'Medimos resultados y ajustamos para mejora continua' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="text-5xl font-bold text-blue-100 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonios" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Historias de Éxito
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesionales que transformaron su carrera con Skillea
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'María González', role: 'Product Manager', text: 'Skillea me ayudó a hacer la transición de marketing a producto. El coaching fue fundamental para ganar confianza y las habilidades necesarias.' },
              { name: 'Carlos Ruiz', role: 'Senior Developer', text: 'Gracias al programa de desarrollo, conseguí mi primer rol senior. La orientación fue precisa y las sesiones muy prácticas.' },
              { name: 'Ana Martínez', role: 'UX Designer', text: 'Después de años sin dirección clara, encontré mi vocación. El equipo de Skillea me acompañó en cada paso del proceso.' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para transformar tu carrera?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Agenda una sesión gratuita y descubre cómo podemos ayudarte a alcanzar tus metas profesionales
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-gray-50 transition-all font-bold shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto text-lg group">
            Comenzar ahora
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="/WhatsApp_Image_2025-10-30_at_13.44.54_546e4640-removebg-preview.png"
                alt="Skillea"
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm text-gray-400 leading-relaxed">
                Transformando carreras a través del coaching profesional y el desarrollo continuo.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Coaching Profesional</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Desarrollo de Habilidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Orientación Vocacional</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Equipo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Contáctanos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Soporte</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Skillea. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

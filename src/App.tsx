import type { MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

type RouteKey = 'home' | 'nosotros';

const getRouteFromPathname = (pathname: string): RouteKey => (pathname === '/nosotros' ? 'nosotros' : 'home');

function App() {
  const isBrowser = typeof window !== 'undefined';

  const [route, setRoute] = useState<RouteKey>(() => {
    if (typeof window === 'undefined') {
      return 'home';
    }
    return getRouteFromPathname(window.location.pathname);
  });
  const [pendingSection, setPendingSection] = useState<string | null>(null);

  useEffect(() => {
    if (!isBrowser) {
      return;
    }

    const handlePopState = () => {
      setRoute(getRouteFromPathname(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isBrowser]);

  useEffect(() => {
    if (!pendingSection || !isBrowser) {
      return;
    }

    const sectionId = pendingSection;
    const scrollToSection = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const raf = window.requestAnimationFrame(() => {
      scrollToSection();
      setPendingSection(null);
    });

    return () => window.cancelAnimationFrame(raf);
  }, [pendingSection, route, isBrowser]);

  const changeRoute = (target: RouteKey) => {
    const pathname = target === 'nosotros' ? '/nosotros' : '/';
    if (isBrowser && window.location.pathname !== pathname) {
      window.history.pushState({}, '', pathname);
    }
    setRoute(target);
  };

  const navigateToSection = (sectionId: string) => {
    if (route !== 'home') {
      setPendingSection(sectionId);
      changeRoute('home');
      return;
    }

    if (!isBrowser) {
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRouteLink = (target: RouteKey) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    changeRoute(target);
  };

  const handleSectionLink = (sectionId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigateToSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-[var(--skillea-ice)] text-[var(--skillea-navy)]">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-[var(--skillea-soft-blue)]/40 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" onClick={handleRouteLink('home')} className="flex items-center gap-3">
              <img
                src="/WhatsApp_Image_2025-10-30_at_13.44.54_546e4640-removebg-preview.png"
                alt="Skillea"
                className="h-12 w-auto"
              />
              <span className="hidden sm:block text-lg font-semibold tracking-tight text-[var(--skillea-navy)]">
                Skillea Coaching
              </span>
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a
                href="/#servicios"
                onClick={handleSectionLink('servicios')}
                className="text-[var(--skillea-navy)]/70 hover:text-[var(--skillea-navy)] transition-colors"
              >
                Servicios
              </a>
              <a
                href="/#metodologia"
                onClick={handleSectionLink('metodologia')}
                className="text-[var(--skillea-navy)]/70 hover:text-[var(--skillea-navy)] transition-colors"
              >
                Metodología
              </a>
              <a
                href="/#testimonios"
                onClick={handleSectionLink('testimonios')}
                className="text-[var(--skillea-navy)]/70 hover:text-[var(--skillea-navy)] transition-colors"
              >
                Testimonios
              </a>
              <a
                href="/nosotros"
                onClick={handleRouteLink('nosotros')}
                className={`text-[var(--skillea-navy)]/70 hover:text-[var(--skillea-navy)] transition-colors ${
                  route === 'nosotros' ? 'text-[var(--skillea-navy)]' : ''
                }`}
              >
                Nosotros
              </a>
              <a
                href="mailto:hello@skillea.com"
                className="bg-gradient-to-r from-[var(--skillea-soft-pink)] to-[var(--skillea-star-yellow)] text-[var(--skillea-navy)] px-6 py-2.5 rounded-full font-semibold shadow-sm hover:shadow-md transition-all"
              >
                Comenzar
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {route === 'home' ? <HomePage /> : <AboutPage onNavigateToSection={navigateToSection} />}
      </main>

      <footer className="bg-[var(--skillea-mid-blue)] text-[var(--skillea-ice)] py-16 px-6 mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div>
              <a href="/" onClick={handleRouteLink('home')} className="inline-flex items-center gap-3 mb-4">
                <img
                  src="/WhatsApp_Image_2025-10-30_at_13.44.54_546e4640-removebg-preview.png"
                  alt="Skillea"
                  className="h-10 w-auto"
                />
                <span className="text-lg font-semibold text-[var(--skillea-ice)] hidden sm:inline">Skillea Coaching</span>
              </a>
              <p className="text-sm text-[var(--skillea-ice)]/80 leading-relaxed">
                Transformando carreras a través del coaching profesional, el desarrollo continuo y la claridad vocacional.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-[var(--skillea-ice)]/80">
                <li>
                  <a href="/#servicios" onClick={handleSectionLink('servicios')} className="hover:text-white transition-colors">
                    Coaching Profesional
                  </a>
                </li>
                <li>
                  <a href="/#servicios" onClick={handleSectionLink('servicios')} className="hover:text-white transition-colors">
                    Desarrollo de Habilidades
                  </a>
                </li>
                <li>
                  <a href="/#servicios" onClick={handleSectionLink('servicios')} className="hover:text-white transition-colors">
                    Orientación Vocacional
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-[var(--skillea-ice)]/80">
                <li>
                  <a href="/nosotros" onClick={handleRouteLink('nosotros')} className="hover:text-white transition-colors">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="/nosotros" onClick={handleRouteLink('nosotros')} className="hover:text-white transition-colors">
                    Equipo
                  </a>
                </li>
                <li>
                  <a href="mailto:alianzas@skillea.com" className="hover:text-white transition-colors">
                    Alianzas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-[var(--skillea-ice)]/80">
                <li>
                  <a href="mailto:hello@skillea.com" className="hover:text-white transition-colors">
                    Contáctanos
                  </a>
                </li>
                <li>
                  <a href="mailto:soporte@skillea.com" className="hover:text-white transition-colors">
                    Soporte
                  </a>
                </li>
                <li>
                  <a href="mailto:talento@skillea.com" className="hover:text-white transition-colors">
                    Talento
                  </a>
                </li>
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

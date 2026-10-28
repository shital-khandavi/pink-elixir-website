import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Fragrances', href: '#fragrances' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Track active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-gold py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="group flex items-center gap-2"
          >
            <span className="font-display text-2xl font-semibold tracking-[0.2em] text-gold-gradient transition-transform group-hover:scale-105">
              PINK ELIXIR
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative font-body text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-amber-300'
                    : 'text-neutral-400 hover:text-amber-200'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold-gradient transition-all duration-300 ${
                    activeSection === link.href.slice(1) ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => handleNavClick('#fragrances')}
            className="hidden rounded-full border border-gold px-6 py-2 font-body text-xs tracking-[0.2em] uppercase text-amber-200 transition-all duration-300 hover:bg-gold-gradient hover:text-black lg:block"
          >
            Shop Now
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-amber-200 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-display text-3xl tracking-[0.15em] text-amber-200 transition-colors hover:text-gold-gradient"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#fragrances')}
            className="mt-4 rounded-full border border-gold px-10 py-3 font-body text-sm tracking-[0.2em] uppercase text-amber-200 transition-all hover:bg-gold-gradient hover:text-black"
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}

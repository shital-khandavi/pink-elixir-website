import { Instagram, Facebook, Twitter } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Fragrances', href: '#fragrances' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="relative border-t border-gold bg-black py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl font-semibold tracking-[0.2em] text-gold-gradient">
              PINK ELIXIR
            </h3>
            <div className="my-4 h-px w-32 bg-gradient-to-r from-amber-400/50 to-transparent" />
            <p className="max-w-sm font-body text-sm leading-relaxed text-neutral-500">
              Luxury in every drop. A maison dedicated to the art of fine perfumery,
              crafting unforgettable fragrances since 2015.
            </p>
            <div className="mt-6 flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-amber-300 transition-all duration-300 hover:bg-gold-gradient hover:text-black hover:scale-110"
                  aria-label="Social media"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-body text-xs tracking-[0.25em] uppercase text-amber-300/60">
              Explore
            </h4>
            <div className="my-4 h-px w-16 bg-gradient-to-r from-amber-400/30 to-transparent" />
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-body text-sm text-neutral-400 transition-colors hover:text-amber-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-body text-xs tracking-[0.25em] uppercase text-amber-300/60">
              Newsletter
            </h4>
            <div className="my-4 h-px w-16 bg-gradient-to-r from-amber-400/30 to-transparent" />
            <p className="font-body text-sm text-neutral-500">
              Join our world for exclusive previews and private events.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="Your email"
                className="rounded-full border border-gold/20 bg-black/40 px-5 py-3 font-body text-sm text-amber-100 placeholder-neutral-600 outline-none transition-all focus:border-amber-400/50"
              />
              <button
                type="submit"
                className="rounded-full border border-gold px-5 py-3 font-body text-xs tracking-[0.2em] uppercase text-amber-200 transition-all hover:bg-gold-gradient hover:text-black"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/20 pt-8 md:flex-row">
          <p className="font-body text-xs tracking-wider text-neutral-600">
            © {new Date().getFullYear()} PINK ELIXIR Maison de Parfum. All rights reserved.
          </p>
          <p className="font-body text-xs tracking-wider text-neutral-600">
            Crafted with passion in Grasse, France
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { Sparkles } from 'lucide-react';

const PRIMARY_IMAGE =
  'https://images.pexels.com/photos/7702669/pexels-photo-7702669.jpeg?auto=compress&cs=tinysrgb&w=900';
const FALLBACK_IMAGE =
  'https://images.pexels.com/photos/12556542/pexels-photo-12556542.jpeg?auto=compress&cs=tinysrgb&w=900';

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function BottleImage() {
  const [src, setSrc] = useState(PRIMARY_IMAGE);
  const [triedFallback, setTriedFallback] = useState(false);

  return (
    <img
      src={src}
      alt="PINK ELIXIR luxury perfume bottle with sculptural gold cap"
      onError={() => {
        if (!triedFallback) {
          setTriedFallback(true);
          setSrc(FALLBACK_IMAGE);
        }
      }}
      className="h-full w-full object-contain drop-shadow-[0_20px_60px_rgba(232,184,106,0.25)]"
      style={{
        filter: 'drop-shadow(0 0 40px rgba(232,184,106,0.15))',
        maxHeight: '100%',
        maxWidth: '100%',
      }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(232,184,106,0.08), transparent 70%), radial-gradient(ellipse 40% 60% at 70% 60%, rgba(255,150,180,0.06), transparent 70%), #000',
        }}
      />

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-24 lg:grid-cols-2 lg:px-10">
        {/* Left: text */}
        <div className="text-center lg:text-left">
          <div className="animate-fade-up mb-6 flex items-center justify-center gap-3 lg:justify-start" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <Sparkles size={16} className="text-amber-400" />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-amber-300/70">
              Maison de Parfum
            </span>
            <Sparkles size={16} className="text-amber-400" />
          </div>

          <h1
            className="animate-fade-up font-display text-6xl font-light leading-none tracking-[0.05em] text-gold-gradient sm:text-7xl md:text-8xl"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            PINK
            <br />
            ELIXIR
          </h1>

          <div
            className="animate-fade-up mx-auto my-8 gold-hairline lg:mx-0"
            style={{ animationDelay: '0.5s', opacity: 0, maxWidth: '300px' }}
          />

          <p
            className="animate-fade-up font-display text-2xl italic text-amber-100/80 sm:text-3xl"
            style={{ animationDelay: '0.6s', opacity: 0 }}
          >
            Luxury in Every Drop
          </p>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-md font-body text-sm leading-relaxed text-neutral-400 lg:mx-0"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            An olfactory masterpiece crafted from the rarest blooms and golden resins.
            Indulge in a fragrance that transcends time.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            style={{ animationDelay: '0.8s', opacity: 0 }}
          >
            <button
              onClick={() => scrollTo('#fragrances')}
              className="group relative overflow-hidden rounded-full bg-gold-gradient px-10 py-4 font-body text-sm tracking-[0.2em] uppercase text-black transition-all duration-300 hover:shadow-gold-glow"
            >
              <span className="relative z-10">Shop Now</span>
              <span className="absolute inset-0 bg-white/20 translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            </button>

            <button
              onClick={() => scrollTo('#about')}
              className="rounded-full border border-gold px-10 py-4 font-body text-sm tracking-[0.2em] uppercase text-amber-200 transition-all duration-300 hover:bg-amber-400/10"
            >
              Discover More
            </button>
          </div>
        </div>

        {/* Right: perfume bottle image */}
        <div className="relative flex h-[420px] w-full items-center justify-center sm:h-[520px] lg:h-[640px]">
          {/* Golden glow behind bottle */}
          <div
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl sm:h-96 sm:w-96 lg:h-[28rem] lg:w-[28rem]"
            style={{ background: 'radial-gradient(circle, rgba(232,184,106,0.3), transparent)' }}
          />
          {/* Decorative ring */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/20 sm:h-80 sm:w-80 lg:h-96 lg:w-96 animate-slow-spin" />
          <div className="relative z-10 h-full w-full">
            <BottleImage />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-label="Scroll down"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-amber-300/50">
          Scroll
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-amber-400/50 to-transparent" />
      </button>
    </section>
  );
}

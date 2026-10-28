import { useState } from 'react';
import { ShoppingBag, X, Check } from 'lucide-react';
import { fragrances } from '@/data/perfume';
import { useReveal } from '@/hooks/useReveal';

export default function Fragrances() {
  const ref = useReveal<HTMLDivElement>();
  const [selected, setSelected] = useState<(typeof fragrances)[0] | null>(null);

  return (
    <section id="fragrances" ref={ref} className="relative py-24 lg:py-32">
      {/* Section background glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 30% 50%, rgba(232,184,106,0.05), transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-16 text-center">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-amber-300/60">
            The Collection
          </span>
          <h2 className="mt-4 font-display text-5xl font-light text-gold-gradient sm:text-6xl">
            Signature Fragrances
          </h2>
          <div className="mx-auto mt-6 gold-hairline" style={{ maxWidth: '200px' }} />
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-neutral-400">
            Six extraordinary compositions, each a world of its own. Discover the scent
            that becomes your signature.
          </p>
        </div>

        {/* Fragrance grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {fragrances.map((perfume, i) => (
            <div
              key={perfume.id}
              className="reveal group cursor-pointer overflow-hidden rounded-2xl glass-card transition-all duration-500 hover:shadow-gold-glow hover:border-amber-400/30 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 0.08}s` }}
              onClick={() => setSelected(perfume)}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-gold px-3 py-1 font-body text-[10px] tracking-[0.2em] uppercase text-amber-200 backdrop-blur-sm">
                  {perfume.tagline}
                </div>
                <div className="absolute bottom-4 right-4 font-display text-3xl text-gold-gradient">
                  {perfume.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-medium text-amber-100">
                  {perfume.name}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {perfume.notes.slice(0, 3).map((note) => (
                    <span
                      key={note}
                      className="rounded-full bg-amber-400/10 px-3 py-1 font-body text-[10px] tracking-wider uppercase text-amber-300/70"
                    >
                      {note}
                    </span>
                  ))}
                </div>
                <p className="mt-4 font-body text-sm leading-relaxed text-neutral-400 line-clamp-2">
                  {perfume.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-body text-xs tracking-wider uppercase text-neutral-500">
                    {perfume.size}
                  </span>
                  <span className="flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-amber-300 transition-colors group-hover:text-amber-200">
                    <ShoppingBag size={14} />
                    View Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative grid max-w-4xl grid-cols-1 overflow-hidden rounded-3xl glass-card md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold text-amber-200 transition-colors hover:bg-amber-400/20"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="relative h-72 md:h-full">
              <img
                src={selected.image}
                alt={selected.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="p-8 md:p-10">
              <span className="font-body text-xs tracking-[0.3em] uppercase text-amber-300/60">
                {selected.tagline}
              </span>
              <h3 className="mt-2 font-display text-4xl font-light text-gold-gradient">
                {selected.name}
              </h3>
              <div className="my-4 gold-hairline" style={{ maxWidth: '150px' }} />

              <p className="font-body text-sm leading-relaxed text-neutral-300">
                {selected.description}
              </p>

              <div className="mt-6">
                <h4 className="font-body text-xs tracking-[0.2em] uppercase text-amber-300/70">
                  Fragrance Notes
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.notes.map((note) => (
                    <span
                      key={note}
                      className="flex items-center gap-1.5 rounded-full border border-gold px-4 py-1.5 font-body text-xs text-amber-200"
                    >
                      <Check size={12} className="text-amber-400" />
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-gold pt-6">
                <div>
                  <span className="font-body text-xs tracking-wider uppercase text-neutral-500">
                    {selected.size}
                  </span>
                  <div className="font-display text-4xl text-gold-gradient">
                    {selected.price}
                  </div>
                </div>
                <button className="rounded-full bg-gold-gradient px-8 py-3.5 font-body text-sm tracking-[0.15em] uppercase text-black transition-all duration-300 hover:shadow-gold-glow">
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

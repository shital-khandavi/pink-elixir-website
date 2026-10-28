import { galleryImages } from '@/data/perfume';
import { useReveal } from '@/hooks/useReveal';

export default function Gallery() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="gallery" ref={ref} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-16 text-center">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-amber-300/60">
            Visual Journey
          </span>
          <h2 className="mt-4 font-display text-5xl font-light text-gold-gradient sm:text-6xl">
            The Gallery
          </h2>
          <div className="mx-auto mt-6 gold-hairline" style={{ maxWidth: '200px' }} />
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-neutral-400">
            A curated visual story of bottles, blooms, and golden light.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="reveal group relative overflow-hidden rounded-2xl"
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="font-body text-xs tracking-[0.15em] uppercase text-amber-200">
                  {img.alt}
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-amber-400/0 transition-all duration-500 group-hover:border-amber-400/30 group-hover:inset-2 rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

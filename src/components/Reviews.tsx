import { Star, Quote } from 'lucide-react';
import { reviews } from '@/data/perfume';
import { useReveal } from '@/hooks/useReveal';

export default function Reviews() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="reviews" ref={ref} className="relative py-24 lg:py-32">
      {/* Background glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 40% 50% at 70% 50%, rgba(255,150,180,0.04), transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-16 text-center">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-amber-300/60">
            Testimonials
          </span>
          <h2 className="mt-4 font-display text-5xl font-light text-gold-gradient sm:text-6xl">
            Words of Devotion
          </h2>
          <div className="mx-auto mt-6 gold-hairline" style={{ maxWidth: '200px' }} />
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-neutral-400">
            From collectors and connoisseurs around the world — the voices of those
            who have made PINK ELIXIR their own.
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={review.id}
              className="reveal group relative flex flex-col rounded-2xl glass-card p-8 transition-all duration-500 hover:shadow-gold-glow hover:border-amber-400/30"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Quote icon */}
              <Quote
                size={40}
                className="mb-4 text-amber-400/20 transition-colors duration-500 group-hover:text-amber-400/40"
              />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="flex-1 font-display text-lg italic leading-relaxed text-neutral-300">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="mt-6 border-t border-gold pt-5">
                <div className="font-display text-xl text-amber-100">
                  {review.name}
                </div>
                <div className="mt-1 flex items-center gap-2 font-body text-xs tracking-wider uppercase text-neutral-500">
                  {review.location}
                  <span className="text-amber-400/40">•</span>
                  <span className="text-amber-300/70">{review.fragrance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

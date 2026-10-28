import { Award, Gem, Truck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description:
      'Each fragrance is crafted in Grasse, France, using the finest natural essences and age-old perfumery techniques. No compromise, ever.',
  },
  {
    icon: Gem,
    title: 'Unique Scents',
    description:
      'Our master perfumers blend rare ingredients — Bulgarian rose, Mysore sandalwood, amber resin — into compositions you will find nowhere else.',
  },
  {
    icon: Truck,
    title: 'Fast & Safe Delivery',
    description:
      'Every bottle is hand-packaged in a signature velvet box and shipped worldwide with insured, climate-controlled delivery to your door.',
  },
];

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="reveal mb-16 text-center">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-amber-300/60">
            The Maison
          </span>
          <h2 className="mt-4 font-display text-5xl font-light text-gold-gradient sm:text-6xl">
            Crafted Beyond Perfection
          </h2>
          <div className="mx-auto mt-6 gold-hairline" style={{ maxWidth: '200px' }} />
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-neutral-400">
            Born from a passion for the extraordinary, PINK ELIXIR represents the pinnacle
            of haute parfumerie. Every bottle is a testament to artistry, heritage, and an
            unwavering pursuit of beauty.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="reveal glass-card group rounded-2xl p-10 text-center transition-all duration-500 hover:shadow-gold-glow hover:border-amber-400/30"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold transition-all duration-500 group-hover:bg-gold-gradient group-hover:scale-110">
                  <Icon
                    size={28}
                    className="text-amber-300 transition-colors duration-300 group-hover:text-black"
                  />
                </div>
                <h3 className="font-display text-2xl font-medium text-amber-100">
                  {feature.title}
                </h3>
                <div className="mx-auto my-4 h-px w-12 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
                <p className="font-body text-sm leading-relaxed text-neutral-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

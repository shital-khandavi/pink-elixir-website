import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Check } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'concierge@pinkelixir.com' },
    { icon: Phone, label: 'Phone', value: '+1 (212) 555-0147' },
    { icon: MapPin, label: 'Boutique', value: '12 Rue Saint-Honoré, Paris' },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(232,184,106,0.05), transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-16 text-center">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-amber-300/60">
            Get in Touch
          </span>
          <h2 className="mt-4 font-display text-5xl font-light text-gold-gradient sm:text-6xl">
            Contact the Maison
          </h2>
          <div className="mx-auto mt-6 gold-hairline" style={{ maxWidth: '200px' }} />
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-neutral-400">
            For private consultations, custom fragrance commissions, or concierge
            service — our team is at your disposal.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div className="reveal flex flex-col gap-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="group flex items-center gap-6 rounded-2xl glass-card p-6 transition-all duration-300 hover:border-amber-400/30"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-gold transition-all duration-300 group-hover:bg-gold-gradient">
                    <Icon
                      size={22}
                      className="text-amber-300 transition-colors group-hover:text-black"
                    />
                  </div>
                  <div>
                    <div className="font-body text-xs tracking-[0.2em] uppercase text-amber-300/60">
                      {info.label}
                    </div>
                    <div className="mt-1 font-display text-xl text-amber-100">
                      {info.value}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Decorative quote */}
            <div className="mt-4 rounded-2xl border border-gold/20 bg-gradient-to-br from-amber-950/20 to-transparent p-8">
              <p className="font-display text-2xl italic text-amber-200/70">
                "Perfume is the most intense form of memory."
              </p>
              <p className="mt-3 font-body text-xs tracking-[0.2em] uppercase text-amber-400/50">
                — PINK ELIXIR Maison
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl glass-card p-8 lg:p-10"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gold-gradient animate-pulse-glow">
                    <Check size={36} className="text-black" />
                  </div>
                  <h3 className="font-display text-3xl text-gold-gradient">
                    Message Sent
                  </h3>
                  <p className="mt-3 font-body text-sm text-neutral-400">
                    Thank you for reaching out. Our concierge will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="mb-6 font-display text-2xl text-amber-100">
                    Send a Message
                  </h3>

                  <div className="mb-5">
                    <label className="mb-2 block font-body text-xs tracking-[0.15em] uppercase text-amber-300/60">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-gold/20 bg-black/40 px-4 py-3 font-body text-sm text-amber-100 placeholder-neutral-600 outline-none transition-all focus:border-amber-400/50 focus:bg-black/60"
                      placeholder="Isabella Moreau"
                    />
                  </div>

                  <div className="mb-5">
                    <label className="mb-2 block font-body text-xs tracking-[0.15em] uppercase text-amber-300/60">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-gold/20 bg-black/40 px-4 py-3 font-body text-sm text-amber-100 placeholder-neutral-600 outline-none transition-all focus:border-amber-400/50 focus:bg-black/60"
                      placeholder="isabella@example.com"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="mb-2 block font-body text-xs tracking-[0.15em] uppercase text-amber-300/60">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-gold/20 bg-black/40 px-4 py-3 font-body text-sm text-amber-100 placeholder-neutral-600 outline-none transition-all focus:border-amber-400/50 focus:bg-black/60"
                      placeholder="Tell us how we may assist you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-gold-gradient px-8 py-4 font-body text-sm tracking-[0.2em] uppercase text-black transition-all duration-300 hover:shadow-gold-glow"
                  >
                    <Send size={16} className="transition-transform group-hover:translate-x-1" />
                    Send Message
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';

/**
 * Animated golden particles and floating pink petals overlay.
 * Uses pure CSS animations for performance.
 */
export default function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Generate golden particles
    const particleCount = 35;
    const particles: HTMLSpanElement[] = [];
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('span');
      const size = Math.random() * 4 + 2;
      p.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        bottom: -20px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(246,211,101,0.9), rgba(232,184,106,0.3));
        box-shadow: 0 0 ${size * 3}px rgba(232,184,106,0.5);
        --drift: ${(Math.random() - 0.5) * 120}px;
        animation: floatParticle ${Math.random() * 8 + 12}s linear infinite;
        animation-delay: ${Math.random() * 15}s;
        pointer-events: none;
      `;
      container.appendChild(p);
      particles.push(p);
    }

    // Generate pink petals
    const petals: HTMLSpanElement[] = [];
    const petalCount = 12;
    for (let i = 0; i < petalCount; i++) {
      const p = document.createElement('span');
      const size = Math.random() * 18 + 10;
      const hue = Math.random() * 20 + 330;
      p.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        top: -30px;
        width: ${size}px;
        height: ${size * 0.7}px;
        border-radius: 50% 0 50% 50%;
        background: hsla(${hue}, 70%, 75%, 0.35);
        filter: blur(1px);
        --sway: ${(Math.random() - 0.5) * 200}px;
        animation: petalFall ${Math.random() * 10 + 18}s linear infinite;
        animation-delay: ${Math.random() * 20}s;
        pointer-events: none;
      `;
      container.appendChild(p);
      petals.push(p);
    }

    return () => {
      particles.forEach((p) => p.remove());
      petals.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    />
  );
}

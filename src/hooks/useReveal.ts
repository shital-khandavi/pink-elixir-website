import { useEffect, useRef } from 'react';

/**
 * IntersectionObserver hook that adds 'revealed' class when element
 * scrolls into view, enabling CSS-based reveal animations.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    // Observe all .reveal children
    const reveals = el.querySelectorAll('.reveal');
    reveals.forEach((r) => observer.observe(r));

    return () => observer.disconnect();
  }, []);

  return ref;
}

import { useEffect, useState } from 'react';

/**
 * Scroll-spy: returns the id of the section currently under the
 * reading line (30% down the viewport). Reads are batched into rAF
 * so scrolling stays smooth.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      const line = window.scrollY + window.innerHeight * 0.3;
      let current = '';

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= line) current = id;
      }

      // Pin the last section once the page is scrolled to the bottom,
      // otherwise short trailing sections can never become active.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
      if (atBottom) current = ids[ids.length - 1] ?? current;

      setActive(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids]);

  return active;
}

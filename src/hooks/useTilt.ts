import { useEffect, useRef } from 'react';

/**
 * Mouse-tracked 3D tilt. Writes --rx/--ry (rotation) and --mx/--my
 * (specular highlight position) onto the element; the CSS in
 * design-system.css turns those into the actual transform.
 *
 * Pointer moves are coalesced into one rAF so a fast cursor can't
 * queue up more work than the compositor can drain. Skipped entirely
 * on touch devices and when the user asked for reduced motion.
 */
export function useTilt<T extends HTMLElement>(max = 7) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const canTilt =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canTilt) return;

    let frame = 0;

    const handleMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;

        el.style.setProperty('--ry', `${(px - 0.5) * max * 2}deg`);
        el.style.setProperty('--rx', `${(0.5 - py) * max * 2}deg`);
        el.style.setProperty('--mx', `${px * 100}%`);
        el.style.setProperty('--my', `${py * 100}%`);
      });
    };

    const handleLeave = () => {
      cancelAnimationFrame(frame);
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    };

    el.addEventListener('pointermove', handleMove);
    el.addEventListener('pointerleave', handleLeave);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('pointermove', handleMove);
      el.removeEventListener('pointerleave', handleLeave);
    };
  }, [max]);

  return ref;
}

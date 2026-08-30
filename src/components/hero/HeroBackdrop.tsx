import { useEffect, useState } from 'react';

const covers = ['/images/cover/2.jpg', '/images/cover/16.jpg'] as const;
const ROTATE_MS = 14000;

/** Cross-fading cover photos with a slow Ken Burns push, under a scrim. */
export function HeroBackdrop() {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const first = new Image();
    first.onload = () => {
      if (!cancelled) setReady(true);
    };
    first.src = covers[0];

    // Warm the rest so the first cross-fade doesn't flash.
    covers.slice(1).forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const timer = setInterval(
      () => setActive((index) => (index + 1) % covers.length),
      ROTATE_MS
    );
    return () => clearInterval(timer);
  }, [ready]);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden="true">
      {covers.map((src, index) => (
        <div
          key={src}
          className="kenburns absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${src})`,
            opacity: ready && index === active ? 1 : 0,
            transition: 'opacity 2.4s ease-in-out',
          }}
        />
      ))}
      <div className="hero-scrim absolute inset-0" />
    </div>
  );
}

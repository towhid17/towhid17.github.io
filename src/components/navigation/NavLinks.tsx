import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { navIds, navItems, scrollToSection } from './navItems';
import { useActiveSection } from '../../hooks/useActiveSection';

/** Desktop links with a pill that slides to whichever section you're reading. */
export function NavLinks() {
  const active = useActiveSection(navIds);
  const listRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [pill, setPill] = useState({ left: 0, width: 0, visible: false });

  const positionPill = useCallback(() => {
    const el = active ? linkRefs.current[active] : null;
    if (!el) {
      setPill((prev) => ({ ...prev, visible: false }));
      return;
    }
    setPill({ left: el.offsetLeft, width: el.offsetWidth, visible: true });
  }, [active]);

  useLayoutEffect(positionPill, [positionPill]);

  useEffect(() => {
    window.addEventListener('resize', positionPill);
    return () => window.removeEventListener('resize', positionPill);
  }, [positionPill]);

  return (
    <ul ref={listRef} className="relative hidden items-center gap-1 lg:flex">
      <li
        aria-hidden="true"
        className="nav-pill"
        style={{
          transform: `translateX(${pill.left}px)`,
          width: pill.width,
          opacity: pill.visible ? 1 : 0,
        }}
      />
      {navItems.map((item) => (
        <li key={item.id}>
          <a
            ref={(el) => {
              linkRefs.current[item.id] = el;
            }}
            href={`#${item.id}`}
            data-active={active === item.id}
            className="nav-link"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection(item.id);
            }}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

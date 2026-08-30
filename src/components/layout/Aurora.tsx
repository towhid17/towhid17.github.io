/**
 * Ambient background: three slowly drifting colour orbs behind a
 * faint grid. Pure CSS animation on `transform` only, so it never
 * touches layout or paint once composited.
 */
export function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora__orb aurora__orb--1" />
      <div className="aurora__orb aurora__orb--2" />
      <div className="aurora__orb aurora__orb--3" />
      <div className="aurora__grid" />
    </div>
  );
}

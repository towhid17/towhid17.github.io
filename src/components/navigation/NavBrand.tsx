export function NavBrand() {
  return (
    <a
      href="#top"
      onClick={(event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className="group flex flex-none items-center gap-2.5"
      aria-label="Back to top"
    >
      <span className="brand-mark" aria-hidden="true">
        TI
      </span>
      <span className="text-base font-bold tracking-tight">
        Towhid
      </span>
    </a>
  );
}

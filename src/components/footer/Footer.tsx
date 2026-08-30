import { useEffect, useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  { href: 'https://github.com/towhid17', label: 'GitHub', icon: Github },
  {
    href: 'https://www.linkedin.com/in/towhidul-islam--/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  { href: 'mailto:towhidulislam2608@gmail.com', label: 'Email', icon: Mail },
] as const;

export function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer className="mx-auto mt-10 max-w-7xl px-3 pb-10 sm:px-5">
        <div className="card overflow-hidden">
          <div className="footer-beam" aria-hidden="true" />

          <div className="flex flex-col items-center gap-6 p-8 text-center sm:p-10">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                <span className="text-gradient">Let's build something</span>
              </h2>
              <p className="mt-2 text-sm text-[var(--text-2)]">
                Open to research collaborations in distributed systems, IoT, and AI.
              </p>
            </div>

            <a
              href="mailto:towhidulislam2608@gmail.com"
              className="btn btn-primary"
            >
              <Mail className="h-4 w-4" />
              towhidulislam2608@gmail.com
            </a>

            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="divider w-full max-w-xs" />

            <p className="text-xs text-[var(--text-3)]">
              © {new Date().getFullYear()} Towhidul Islam
            </p>
          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`back-to-top ${showTop ? 'is-visible' : ''}`}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}

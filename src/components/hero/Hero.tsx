import { FileText, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { HeroBackdrop } from './HeroBackdrop';
import { Avatar } from './Avatar';
import { useTilt } from '../../hooks/useTilt';

const CV_URL =
  'https://drive.google.com/file/d/15F8HXNFatHYtv_3mXzWnAKS58jDBpYPy/view?usp=sharing';
const CAREER_START_YEAR = 2023;

export function Hero() {
  // max=0 tracks the pointer for the sheen without rotating the hero or portrait.
  const glowRef = useTilt<HTMLDivElement>(0);

  return (
    <header className="relative">
      <div ref={glowRef} className="card sheen rim-glow relative overflow-hidden">
        <HeroBackdrop />

        <div className="relative z-10 grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-12 lg:p-14">
          {/* ---- Identity ---- */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <span className="chip mb-5 !border-white/25 !bg-white/10 text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              PhD Student at UCSB
            </span>

            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              <span className="text-shimmer">Towhidul Islam</span>
            </h1>

            <p className="mt-4 text-lg font-medium text-white/90 sm:text-xl">
              PhD researcher at RACELab, UC Santa Barbara.
            </p>

            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/70 lg:mx-0">
              Building adaptive application deployment and spatial data-placement methods
              for distributed IoT and edge environments.
            </p>

            {/* ---- Actions ---- */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FileText className="h-4 w-4" />
                View CV
              </a>
              <a
                href="mailto:towhidulislam2608@gmail.com"
                className="btn btn-ghost !border-white/25 !bg-white/10 !text-white backdrop-blur"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60 lg:justify-start">
              <MapPin className="h-4 w-4" />
              Santa Barbara, California
            </p>
          </div>

          {/* ---- Portrait ---- */}
          <div className="order-1 flex justify-center lg:order-2">
            <Avatar src="/images/profile/profile.jpg" alt="Towhidul Islam" />
          </div>
        </div>

        {/* ---- Stats rail ---- */}
        <div className="relative z-10 grid grid-cols-3 border-t border-white/15 bg-black/25 backdrop-blur-xl">
          <div className="stat-tile group/stat" style={{ '--accent': '217 70 239' } as React.CSSProperties}>
            <a
              href="https://github.com/towhid17"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn !border-white/25 !bg-white/10 !text-white backdrop-blur"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <span className="stat-label">GitHub</span>
          </div>

          <div className="stat-tile group/stat" style={{ '--accent': '6 182 212' } as React.CSSProperties}>
            <a
              href="https://www.linkedin.com/in/towhidul-islam--/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn !border-white/25 !bg-white/10 !text-white backdrop-blur"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <span className="stat-label">LinkedIn</span>
          </div>

          <div className="stat-tile group/stat" style={{ '--accent': '245 158 11' } as React.CSSProperties}>
            <span className="stat-value">
              {Math.max(1, new Date().getFullYear() - CAREER_START_YEAR)}
            </span>
            <span className="stat-label">Years building</span>
          </div>
        </div>
      </div>
    </header>
  );
}

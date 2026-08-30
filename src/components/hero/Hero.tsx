import { FileText, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { HeroBackdrop } from './HeroBackdrop';
import { Avatar } from './Avatar';
import { useTilt } from '../../hooks/useTilt';
import { academicProjects, publications } from '../../data/data';

const CV_URL =
  'https://drive.google.com/file/d/15F8HXNFatHYtv_3mXzWnAKS58jDBpYPy/view?usp=sharing';
const CAREER_START_YEAR = 2023;

const stats = [
  { label: 'Publications', value: publications.length, accent: 'fuchsia' },
  { label: 'Projects', value: academicProjects.length, accent: 'cyan' },
  {
    label: 'Years building',
    value: Math.max(1, new Date().getFullYear() - CAREER_START_YEAR),
    accent: 'amber',
  },
] as const;

const accentTriplets: Record<string, string> = {
  fuchsia: '217 70 239',
  cyan: '6 182 212',
  amber: '245 158 11',
};

export function Hero() {
  const tiltRef = useTilt<HTMLDivElement>(3);

  return (
    <header className="relative">
      <div ref={tiltRef} className="card tilt tilt-3d sheen relative overflow-hidden">
        <HeroBackdrop />

        <div className="relative z-10 grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-12 lg:p-14">
          {/* ---- Identity ---- */}
          <div className="tilt-layer order-2 text-center lg:order-1 lg:text-left">
            <span className="chip mb-5 !border-white/25 !bg-white/10 text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Incoming PhD Student
            </span>

            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              <span className="text-shimmer">Towhidul Islam</span>
            </h1>

            <p className="mt-4 text-lg font-medium text-white/90 sm:text-xl">
              Software Engineer at Therap BD, building distributed systems.
            </p>

            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/70 lg:mx-0">
              Researching distributed AI/ML systems, edge and cloud computing,
              and network security.
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

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/towhid17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn !border-white/25 !bg-white/10 !text-white backdrop-blur"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/towhidul-islam--/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn !border-white/25 !bg-white/10 !text-white backdrop-blur"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60 lg:justify-start">
              <MapPin className="h-4 w-4" />
              Dhaka, Bangladesh
            </p>
          </div>

          {/* ---- Portrait ---- */}
          <div className="tilt-layer order-1 flex justify-center lg:order-2">
            <Avatar src="/images/profile/profile.jpg" alt="Towhidul Islam" />
          </div>
        </div>

        {/* ---- Stats rail ---- */}
        <div className="relative z-10 grid grid-cols-3 border-t border-white/15 bg-black/25 backdrop-blur-xl">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-tile group/stat"
              style={{ '--accent': accentTriplets[stat.accent] } as React.CSSProperties}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

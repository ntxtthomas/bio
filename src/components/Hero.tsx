import headshot from '../assets/tthomas_3.png';
import type { CareerLens } from '../types/career';
import { careerLensOptions } from '../types/career';
import ResumeDownload from './ResumeDownload';

interface HeroProps {
  lens: CareerLens;
  onLensChange: (nextLens: CareerLens) => void;
}

const lensContent: Record<CareerLens, { title: string; subtitle: string }> = {
  engineer: {
    title: 'Senior Software Engineer',
    subtitle: 'Software Engineer · Systems & Reliability · SaaS Platforms',
  },
  builder: {
    title: 'Builder | Problem Solver | Operator',
    subtitle: 'Business Leadership · Technology Sales · Operations · Engineering',
  },
};

export default function Hero({ lens, onLensChange }: HeroProps) {
  const isBuilderLens = lens === 'builder';

  const handleToggleLens = () => {
    onLensChange(isBuilderLens ? 'engineer' : 'builder');
  };

  return (
    <section className="bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.22),transparent_32%),radial-gradient(circle_at_85%_0%,rgba(16,185,129,0.2),transparent_35%),linear-gradient(145deg,#020617,#0f172a_45%,#111827)] px-6 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900/50 p-6 shadow-[0_32px_90px_-40px_rgba(14,165,233,0.45)] backdrop-blur-md sm:p-8">
          <div className="absolute -right-20 top-8 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-16 bottom-0 h-44 w-44 rounded-full bg-emerald-300/10 blur-3xl" aria-hidden="true" />

          <div className="relative grid gap-8 lg:grid-cols-[auto,1fr] lg:items-center">
            <div className="mx-auto w-fit lg:mx-0">
              <div className="relative">
                <img
                  src={headshot}
                  alt="Terry Thomas"
                  className="h-36 w-36 rounded-full object-cover shadow-2xl ring-4 ring-white/20 sm:h-40 sm:w-40"
                />
                <span
                  className="absolute bottom-2 right-2 h-3.5 w-3.5 rounded-full bg-emerald-400 ring-2 ring-slate-900"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="space-y-4 text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/90">
                Product-minded technologist
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Terry Thomas
              </h1>
              <p className="text-xl font-semibold text-slate-100 sm:text-2xl">
                {lensContent[lens].title}
              </p>
              <p className="text-sm leading-7 text-slate-300 sm:text-base">
                {lensContent[lens].subtitle}
              </p>
            </div>
        </div>

          <div className="relative mt-8 grid gap-4 lg:grid-cols-[1fr,auto] lg:items-end">
            <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-3">
              <p className="px-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Choose your lens
              </p>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {careerLensOptions.map((option) => {
                  const isActive = option.id === lens;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => onLensChange(option.id)}
                      aria-pressed={isActive}
                      className={`rounded-xl border px-3 py-2.5 text-left transition-all ${
                        isActive
                          ? 'border-cyan-200/80 bg-white text-slate-900 shadow-md'
                          : 'border-white/10 bg-transparent text-slate-200 hover:border-white/25 hover:bg-white/5'
                      }`}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.12em]">{option.label}</p>
                      <p className={`mt-1 text-[0.72rem] leading-5 ${isActive ? 'text-slate-600' : 'text-slate-300'}`}>
                        {option.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2 sm:justify-start">
                <span className={`text-xs font-semibold uppercase tracking-wide ${!isBuilderLens ? 'text-white' : 'text-slate-400'}`}>
                  Engineer
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={isBuilderLens}
                  aria-label="Toggle career lens"
                  onClick={handleToggleLens}
                  className={`relative inline-flex h-7 w-14 items-center rounded-full border transition-colors ${
                    isBuilderLens ? 'border-emerald-300/70 bg-emerald-400/70' : 'border-cyan-300/70 bg-cyan-400/70'
                  }`}
                >
                  <span
                    className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${
                      isBuilderLens ? 'translate-x-8' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-xs font-semibold uppercase tracking-wide ${isBuilderLens ? 'text-white' : 'text-slate-400'}`}>
                  Builder
                </span>
              </div>

              <p className="mt-2 px-1 text-xs leading-5 text-slate-300">
                Same mission, different lens: reliable systems, measurable outcomes, real people served.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">
              <ResumeDownload lens={lens} />
              <a
                href="mailto:apm.tthomas@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative mt-7 flex items-center justify-center gap-6 border-t border-white/10 pt-4">
            <a
              href="https://github.com/ntxtthomas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-slate-400 transition-colors hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ntxtthomas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-slate-400 transition-colors hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

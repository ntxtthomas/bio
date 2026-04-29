import { useState } from 'react';

const traits = [
  { label: 'Outdoors', detail: 'backpacking · trail running · kayaking' },
  { label: 'Lifelong learner', detail: 'always expanding the knowledge base' },
  { label: 'Husband & father', detail: 'raising two teenage daughters' },
  { label: 'Community', detail: 'advocate against food & housing insecurity' },
];

export default function About() {
  const [activePill, setActivePill] = useState<number | null>(null);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">

        {/* Professional bio */}
        <div className="text-justify text-base leading-relaxed text-slate-700">
          <p className="mb-4">I’m a software engineer who builds reliable, production-grade systems for real users. 
          Over the past 8+ years in SaaS, I’ve worked on applications serving over a million users, 
          improving data integrity, reducing operational costs, and making systems easier to trust and maintain.
          </p>

          <p>I’m drawn to the parts of software that aren’t always visible—data integrity, reliability, 
          and the structure that helps teams move faster without breaking things. I enjoy untangling 
          complex, workflow-driven systems and working with teams to turn messy problems into solutions 
          that are clear, stable, and built to last.
          </p>
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-100" />
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            Outside the keyboard
          </span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>

        {/* Trait pills */}
        <div className="flex flex-wrap justify-start gap-3 sm:justify-center">
          {traits.map(({ label, detail }, i) => {
            const isActive = activePill === i;
            return (
              <div
                key={label}
                onClick={() => setActivePill(isActive ? null : i)}
                className={`group cursor-pointer rounded-full border px-4 py-1.5 text-sm transition-all duration-200 hover:px-5 hover:shadow-sm ${
                  isActive
                    ? 'border-indigo-200 bg-indigo-50 px-5 text-indigo-700 shadow-sm'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700'
                }`}
              >
                <span>{label}</span>
                <span
                  className={`overflow-hidden whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'max-w-xs opacity-100'
                      : 'max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100'
                  }`}
                >
                  &ensp;·&ensp;{detail}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

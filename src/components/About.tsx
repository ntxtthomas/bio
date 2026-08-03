import { useState } from 'react';
import Community from './Community';
import HusbandFather from './HusbandFather';
import LifelongLearner from './LifelongLearner';
import Outdoors from './Outdoors';

const traits = [
  { id: 'outdoors', label: 'Outdoors', detail: 'backpacking · trail running · kayaking' },
  { id: 'lifelong-learner', label: 'Lifelong learner', detail: 'always expanding the knowledge base' },
  { id: 'husband-father', label: 'Husband & father', detail: 'raising two teenage daughters' },
  { id: 'community', label: 'Community', detail: 'advocate against food & housing insecurity' },
];

export default function About() {
  const [activePill, setActivePill] = useState<string | null>(null);
  const hasActivePill = activePill !== null;
  const orderedTraits = traits;

  const closeActivePanel = () => {
    setActivePill(null);
  };

  const renderActivePanel = () => {
    switch (activePill) {
      case 'outdoors':
        return <Outdoors onClose={closeActivePanel} />;
      case 'lifelong-learner':
        return <LifelongLearner onClose={closeActivePanel} />;
      case 'husband-father':
        return <HusbandFather onClose={closeActivePanel} />;
      case 'community':
        return <Community onClose={closeActivePanel} />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-justify text-base leading-relaxed text-slate-700">
          <p className="mb-4">
            Work is one part of my story. Outside of role titles, I care about the habits and values that
            carry across every chapter: being useful, staying accountable, and treating people with respect.
          </p>

          <p>
            These sections give more context on what shapes how I show up day to day. They are not
            separate from my professional work, but they are where a lot of the perspective behind it is built.
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
        <div className="mx-[-0.5rem] flex flex-nowrap justify-center gap-3 overflow-x-auto px-2 py-2 transition-all duration-300">
          {orderedTraits.map(({ id, label, detail }) => {
            const isActive = activePill === id;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setActivePill(isActive ? null : id)}
                aria-expanded={isActive}
                className={`flex h-full min-h-[4.5rem] w-[13rem] flex-shrink-0 flex-col items-center justify-center rounded-full border px-4 py-2.5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                  isActive
                    ? 'border-slate-900 bg-slate-900 text-white shadow-lg'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span className="text-sm font-semibold">{label}</span>
                <span
                  className={`mt-1 text-[0.72rem] leading-5 ${
                    isActive ? 'text-white/80' : 'text-slate-500'
                  }`}
                >
                  {detail}
                </span>
              </button>
            );
          })}
        </div>

        <div
          className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${
            hasActivePill ? 'mt-8 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            {renderActivePanel()}
          </div>
        </div>

      </div>
    </section>
  );
}

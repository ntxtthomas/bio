import { useMemo, useState } from 'react';
import TraitPanel from './TraitPanel';

interface StoryItem {
  title: string;
  eyebrow: string;
  description: string;
  accent: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface StoryTrack {
  id: string;
  title: string;
  period: string;
  summary: string;
  heading: string;
  description: string;
  focusLabel: string;
  focusCopy: string;
  tags: string[];
  items: StoryItem[];
}

const assetPath = (fileName: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${fileName}`;
};

const engineerTracks: StoryTrack[] = [
  {
    id: 'teaching-strategies',
    title: 'Teaching Strategies',
    period: '2020-2025',
    summary: 'Rails, integrations, CI/CD, and platform reliability at scale',
    heading: 'Software Engineer building reliability for 1M+ user workflows',
    description:
      'Led integration audits, refactored Rails systems, and improved deployment confidence in a high-traffic SaaS product used by educators and families.',
    focusLabel: 'Impact',
    focusCopy:
      'Reduced data inconsistencies, lowered unnecessary API usage, improved release safety, and strengthened production diagnostics so teams could ship faster with less operational risk.',
    tags: ['Ruby on Rails', 'AWS', 'CI/CD ownership', 'Reliability engineering'],
    items: [
      {
        title: 'Integration Quality',
        eyebrow: 'Data integrity',
        description:
          'Audited and refactored integration flows to remove inconsistencies, improve trust in downstream data, and reduce avoidable platform costs.',
        accent: 'from-emerald-300 via-teal-200 to-cyan-50',
        imageSrc: assetPath('data_integrity.png'),
        imageAlt: 'Data integrity dashboard and quality checks',
      },
      {
        title: 'Safe Releases',
        eyebrow: 'Operational discipline',
        description:
          'Owned release validation and rollback strategies, improving deployment reliability and reducing high-severity incidents.',
        accent: 'from-sky-300 via-cyan-200 to-blue-50',
        imageSrc: assetPath('opex_discipline.png'),
        imageAlt: 'Release pipeline and operational discipline visual',
      },
      {
        title: 'Observability',
        eyebrow: 'Faster diagnosis',
        description:
          'Implemented monitoring and error tracking to shorten time-to-detection and make production issue resolution more predictable.',
        accent: 'from-indigo-300 via-violet-200 to-fuchsia-50',
        imageSrc: assetPath('observibility.png'),
        imageAlt: 'Observability and monitoring signal dashboards',
      },
    ],
  },
  {
    id: 'readyrosie',
    title: 'ReadyRosie',
    period: '2017-2020',
    summary: 'Application stability, performance, and product execution',
    heading: 'Built strong SaaS foundations through pragmatic Rails engineering',
    description:
      'Delivered and maintained customer-facing Rails features while improving stability, introducing service abstractions, and partnering cross-functionally to prioritize high-value work.',
    focusLabel: 'Core contribution',
    focusCopy:
      'Blended product delivery with systems thinking by reducing friction in key workflows and improving maintainability in areas that were previously costly to change.',
    tags: ['Rails', 'Cross-functional delivery', 'Service abstractions', 'Workflow design'],
    items: [
      {
        title: 'System Stability',
        eyebrow: 'Production health',
        description:
          'Targeted reliability fixes and performance improvements that lowered downtime and improved day-to-day confidence in the platform.',
        accent: 'from-amber-300 via-orange-200 to-rose-50',
        imageSrc: assetPath('health.jpeg'),
        imageAlt: 'Production Health'
      },
      {
        title: 'Product Collaboration',
        eyebrow: 'Execution',
        description:
          'Worked closely with product partners and stakeholders to scope and ship features that reduced friction in key user journeys.',
        accent: 'from-cyan-300 via-sky-200 to-blue-50',
        imageSrc: assetPath('team_collaboration.jpeg'),
        imageAlt: 'Execution and Collaboration'
      },
      {
        title: 'Maintainable Architecture',
        eyebrow: 'Long-term velocity',
        description:
          'Introduced cleaner service boundaries to improve reliability, simplify debugging, and support faster future iteration.',
        accent: 'from-lime-300 via-emerald-200 to-green-50',
        imageSrc: assetPath('maintainable.jpeg'),
        imageAlt: 'Maintainability and Clean Archittecture'
      },
    ],
  },
];

export default function ProfessionalStory() {
  const tracks = engineerTracks;
  const [activeTrackId, setActiveTrackId] = useState<string>(tracks[0].id);
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  const resolvedActiveTrackId = tracks.some((track) => track.id === activeTrackId)
    ? activeTrackId
    : tracks[0].id;

  const activeTrack = useMemo(
    () => tracks.find((track) => track.id === resolvedActiveTrackId) ?? tracks[0],
    [resolvedActiveTrackId, tracks],
  );

  const sectionDescription = 'What I have been building since 2017 across Rails, AWS, CI/CD, and platform reliability.';

  return (
    <section className="bg-slate-100 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
          Career Story
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-slate-600 sm:text-base">
          {sectionDescription}
        </p>

        <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Select a chapter to expand details
        </p>

        <div className="mx-auto mt-3 flex max-w-4xl flex-wrap justify-center gap-3">
          {tracks.map(({ id, title, period, summary }) => {
            const isActive = resolvedActiveTrackId === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setActiveTrackId(id);
                  setIsPanelOpen(true);
                }}
                aria-pressed={isActive}
                className={`h-full w-full max-w-sm rounded-2xl border px-4 py-3 text-center transition-all sm:w-[calc(50%-0.375rem)] lg:w-[calc(50%-0.375rem)] ${
                  isActive
                    ? 'border-slate-900 bg-slate-900 text-white shadow-lg'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wider opacity-70">{period}</p>
                <p className="mt-1 text-sm font-semibold">{title}</p>
                <p className="mt-1 text-xs leading-5 opacity-75">{summary}</p>
              </button>
            );
          })}
        </div>

        {isPanelOpen && (
          <div className="mt-8">
            <TraitPanel
              sectionLabel="Software engineering focus"
              heading={activeTrack.heading}
              description={activeTrack.description}
              focusLabel={activeTrack.focusLabel}
              focusCopy={activeTrack.focusCopy}
              tags={activeTrack.tags}
              items={activeTrack.items}
              onClose={() => setIsPanelOpen(false)}
            />
          </div>
        )}
      </div>
    </section>
  );
}

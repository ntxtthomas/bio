import { useMemo, useState } from 'react';
import TraitPanel from './TraitPanel';
import type { CareerLens } from '../types/career';

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

interface ProfessionalStoryProps {
  lens: CareerLens;
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

const builderTracks: StoryTrack[] = [
  {
    id: 'software-engineering',
    title: 'Software Engineering & Technology',
    period: '2017-2025',
    summary: 'Teaching Strategies and ReadyRosie',
    heading: 'Delivered reliable SaaS outcomes across product, quality, and operations',
    description:
      'Built and supported educator-focused SaaS applications while improving integrations, testing, data quality, and production operations in high-traffic environments.',
    focusLabel: 'What this proved',
    focusCopy:
      'Consistently solved complex technical and workflow problems by coordinating engineering, product, and stakeholder priorities into practical execution plans.',
    tags: ['SaaS delivery', 'Integration ownership', 'Cross-team execution', 'Operational stability'],
    items: [
      {
        title: 'Complex Issue Resolution',
        eyebrow: 'Problem solving',
        description:
          'Investigated integration and data-quality issues that impacted customer outcomes and resolved them with durable, testable improvements.',
        accent: 'from-sky-300 via-cyan-200 to-blue-50',
        imageSrc: assetPath('debugging.jpeg'),
        imageAlt: 'Issue resolution and Problem Solving'
      },
      {
        title: 'Execution Across Teams',
        eyebrow: 'Operator behavior',
        description:
          'Aligned product, QA, and engineering priorities to ship customer-facing improvements with clear ownership and predictable delivery.',
        accent: 'from-emerald-300 via-teal-200 to-cyan-50',
        imageSrc: assetPath('collaboration.jpeg'),
        imageAlt: 'Collaboration and Ownership'
      },
      {
        title: 'Platform Reliability',
        eyebrow: 'Business impact',
        description:
          'Improved uptime, maintainability, and operational confidence through better patterns, diagnostics, and release practices.',
        accent: 'from-indigo-300 via-violet-200 to-fuchsia-50',
        imageSrc: assetPath('reliability.jpeg'),
        imageAlt: 'Reliability and Operational Confidence'
      },
    ],
  },
  {
    id: 'business-owner',
    title: 'Business Owner & Operator',
    period: '2002-2016',
    summary: 'Real estate operations and property management',
    heading: 'Built and operated businesses with full P&L and people accountability',
    description:
      'Managed employees, vendors, budgets, leasing, maintenance, and daily operations while scaling regional presence and improving consistency of service delivery.',
    focusLabel: 'Operating scope',
    focusCopy:
      'Balanced strategy with execution by designing processes, implementing technology, and training teams to improve performance, reduce manual effort, and protect customer experience.',
    tags: ['Business ownership', 'Process design', 'Team leadership', 'Operational systems'],
    items: [
      {
        title: 'Process Improvement',
        eyebrow: 'Operational leverage',
        description:
          'Implemented systems that reduced friction in core workflows and improved consistency across daily operations.',
        accent: 'from-amber-300 via-orange-200 to-rose-50',
        imageSrc: assetPath('process_improvement.jpeg'),
        imageAlt: 'Process Improvement'
      },
      {
        title: 'Technology Adoption',
        eyebrow: 'Change enablement',
        description:
          'Researched and rolled out platforms that automated administrative and field workflows, then trained staff on implementation.',
        accent: 'from-lime-300 via-emerald-200 to-green-50',
        imageSrc: assetPath('technology_adoption.jpeg'),
        imageAlt: 'Technology Adoption'
      },
      {
        title: 'People & Vendor Management',
        eyebrow: 'Execution engine',
        description:
          'Coordinated contractors, staff, and service partners to maintain quality standards and dependable outcomes.',
        accent: 'from-slate-300 via-slate-200 to-stone-50',
        imageSrc: assetPath('people_and_vendor_mgmt.jpeg'),
        imageAlt: 'People & Vendor Management'
      },
    ],
  },
  {
    id: 'tech-sales',
    title: 'Technology Sales & Product Enablement',
    period: '1992-2002',
    summary: 'Immersion Corporation (NASDAQ: IMMR)',
    heading: 'Translated advanced technology into customer value and market adoption',
    description:
      'Delivered product demos, workshops, and technical enablement while partnering with sales, product, and engineering to accelerate evaluations and improve solution fit.',
    focusLabel: 'Go-to-market impact',
    focusCopy:
      'Supported domestic and international customers, expanded distribution channels, and connected technical depth to business outcomes in North America, Europe, and Asia.',
    tags: ['Technology sales', 'Customer enablement', 'Global channels', 'Technical storytelling'],
    items: [
      {
        title: 'Customer Enablement',
        eyebrow: 'Adoption outcomes',
        description:
          'Guided evaluations and implementations that helped customers understand capability, risk, and practical integration paths.',
        accent: 'from-cyan-300 via-sky-200 to-blue-50',
        imageSrc: assetPath('customer_enablement.jpeg'),
        imageAlt: 'Customer Enablement'
      },
      {
        title: 'Cross-Functional Alignment',
        eyebrow: 'Shorter sales cycles',
        description:
          'Bridged customer requirements with product and engineering priorities to improve fit and speed up decisions.',
        accent: 'from-violet-300 via-fuchsia-200 to-rose-50',
        imageSrc: assetPath('cross_functional_alignment.jpeg'),
        imageAlt: 'Cross-Functional Alignment'
      },
      {
        title: 'Global Distribution Growth',
        eyebrow: 'Market expansion',
        description:
          'Developed and supported partner channels through technical demonstrations, training, and ongoing enablement support.',
        accent: 'from-emerald-300 via-teal-200 to-cyan-50',
        imageSrc: assetPath('global_distribution.jpeg'),
        imageAlt: 'Global Distribution Growth'
      },
    ],
  },
];

export default function ProfessionalStory({ lens }: ProfessionalStoryProps) {
  const isBuilderLens = lens === 'builder';
  const tracks = lens === 'engineer' ? engineerTracks : builderTracks;
  const [activeTrackId, setActiveTrackId] = useState<string>(tracks[0].id);
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  const resolvedActiveTrackId = tracks.some((track) => track.id === activeTrackId)
    ? activeTrackId
    : tracks[0].id;

  const activeTrack = useMemo(
    () => tracks.find((track) => track.id === resolvedActiveTrackId) ?? tracks[0],
    [resolvedActiveTrackId, tracks],
  );

  const sectionDescription =
    lens === 'engineer'
      ? 'What I have been building since 2017 across Rails, AWS, CI/CD, and platform reliability.'
      : 'A full-career arc across business leadership, technology sales, operations, and engineering execution.';

  return (
    <section className="bg-slate-100 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
          Career Story
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-slate-600 sm:text-base">
          {sectionDescription}
        </p>

        {isBuilderLens && (
          <figure className="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.85)]">
            <img
              src="/thirty_years.jpeg"
              alt="30-year career timeline connecting technology sales, business operations, and software engineering"
              className="block h-auto w-full object-contain"
            />
          </figure>
        )}

        <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Select a chapter to expand details
        </p>

        <div className="mt-3 grid gap-3 sm:grid-cols-3">
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
                className={`h-full w-full rounded-2xl border px-4 py-3 text-left transition-all ${
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
              sectionLabel={lens === 'engineer' ? 'Senior software engineer lens' : 'Builder and operator lens'}
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

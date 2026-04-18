const traits = [
  { label: 'Outdoors', detail: 'backpacking · trail running · kayaking' },
  { label: 'Lifelong learner', detail: 'always expanding the knowledge base' },
  { label: 'Husband & father', detail: 'raising two teenage daughters' },
  { label: 'Community', detail: 'advocate against food & housing insecurity' },
];

export default function About() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-2xl px-6">

        {/* Professional bio */}
        <p className="text-base leading-relaxed text-slate-700">
          Software engineer with 8+ years of experience building and scaling multi-tenant SaaS
          platforms. Led a system-integration audit that improved data integrity and reduced API
          costs, and refactored a Rails service supporting over a million users to increase
          reliability and test coverage. Experienced with AWS infrastructure, CI/CD pipelines,
          and observability tools for rapid issue resolution. Focused on delivering stable,
          high-performing systems for mission-driven organizations.
        </p>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-100" />
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            Outside the keyboard
          </span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>

        {/* Trait pills */}
        <div className="flex flex-wrap gap-3">
          {traits.map(({ label, detail }) => (
            <div
              key={label}
              title={detail}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm text-slate-600"
            >
              {label}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

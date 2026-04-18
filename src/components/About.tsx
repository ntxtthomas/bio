const traits = [
  { label: 'Outdoors', detail: 'backpacking · trail running · kayaking' },
  { label: 'Lifelong learner', detail: 'always expanding the knowledge base' },
  { label: 'Husband & father', detail: 'raising two teenage daughters' },
  { label: 'Community', detail: 'advocate against food & housing insecurity' },
];

export default function About() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">

        {/* Professional bio */}
        <p className="text-base leading-relaxed text-slate-700">
          I’m a software engineer who builds reliable, production-grade systems for real users. Over the past 8+ years 
          in EdTech SaaS, I’ve worked on applications serving over a million users—improving data integrity, reducing 
          operational costs, and making systems easier to trust and maintain. I’m at my best when I’m untangling complex 
          systems, strengthening reliability, and helping teams ship with confidence so the product can do what it’s 
          meant to do: <strong>deliver real value to the people using it.</strong>
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
        <div className="flex flex-wrap justify-center gap-3">
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

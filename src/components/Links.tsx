interface LinkCard {
  category: string;
  categoryColor: string;
  label: string;
  description: string;
  cta: string;
  href: string;
}

const links: LinkCard[] = [
  {
    category: 'Live Project',
    categoryColor: 'bg-indigo-50 text-indigo-600',
    label: 'mycareerintel.com',
    description: 'Career Intelligence app — live demo',
    cta: 'Open project',
    href: 'https://mycareerintel.com',
  },
  {
    category: 'Code',
    categoryColor: 'bg-slate-100 text-slate-600',
    label: 'GitHub',
    description: 'github.com/ntxtthomas',
    cta: 'View profile',
    href: 'https://github.com/ntxtthomas',
  },
  {
    category: 'Network',
    categoryColor: 'bg-blue-50 text-blue-600',
    label: 'LinkedIn',
    description: 'linkedin.com/in/ntxtthomas',
    cta: 'Connect',
    href: 'https://www.linkedin.com/in/ntxtthomas',
  },
];

export default function Links() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Work &amp; Presence
        </h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {links.map(({ category, categoryColor, label, description, cta, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-slate-200 p-6 transition-all hover:border-indigo-300 hover:shadow-md"
            >
              <span className={`mb-3 inline-block self-start rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColor}`}>
                {category}
              </span>
              <h3 className="text-base font-semibold text-slate-900 group-hover:text-indigo-700">
                {label}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{description}</p>
              <div className="mt-4 flex items-center text-xs text-slate-400 group-hover:text-indigo-500">
                <span>{cta}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

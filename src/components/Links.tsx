interface LinkItem {
  label: string;
  description: string;
  href: string;
}

const links: LinkItem[] = [
  {
    label: 'mycareerintel.com',
    description: 'Career Intelligence app — live demo',
    href: 'https://mycareerintel.com',
  },
  {
    label: 'GitHub',
    description: 'github.com/ntxtthomas',
    href: 'https://github.com/ntxtthomas',
  },
  {
    label: 'LinkedIn',
    description: 'linkedin.com/in/ntxtthomas',
    href: 'https://www.linkedin.com/in/ntxtthomas',
  },
];

export default function Links() {
  return (
    <section className="py-10">
      <h2 className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
        Links
      </h2>
      <ul className="flex flex-col gap-3">
        {links.map(({ label, href, description }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border border-slate-200 px-5 py-4 transition-all hover:border-indigo-400 hover:bg-indigo-50"
            >
              <div>
                <span className="font-semibold text-slate-800 group-hover:text-indigo-700">
                  {label}
                </span>
                <p className="text-sm text-slate-500">{description}</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

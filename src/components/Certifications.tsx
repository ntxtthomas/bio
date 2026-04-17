interface Cert {
  name: string;
  code?: string;
  issuer: string;
  color: string;
  href?: string;
  year?: string;
}

const certs: Cert[] = [
  {
    name: 'AWS Certified Solutions Architect',
    code: 'SAA-C03',
    issuer: 'Amazon Web Services',
    color: 'bg-amber-50 border-amber-200 text-amber-800',
  },
  {
    name: 'GitHub Foundations',
    code: 'GH-200',
    issuer: 'GitHub',
    color: 'bg-slate-50 border-slate-200 text-slate-800',
  },
  {
    name: 'Full Stack Software Development',
    issuer: 'Coding Dojo',
    color: 'bg-blue-50 border-blue-200 text-blue-800',
    href: 'https://www.codingdojo.com/software-development-part-time-accelerated',
    year: '2016',
  },
];

export default function Certifications() {
  return (
    <section className="py-10">
      <h2 className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
        Certifications
      </h2>
      <ul className="flex flex-col gap-3">
        {certs.map(({ name, code, issuer, color, href, year }) => (
          <li
            key={name}
            className={`flex items-center justify-between rounded-lg border px-5 py-4 ${color}`}
          >
            <div>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline-offset-2 hover:underline"
                >
                  {name}
                </a>
              ) : (
                <span className="font-semibold">{name}</span>
              )}
              <p className="text-sm opacity-70">
                {issuer}{code ? ` · ${code}` : ''}
              </p>
            </div>
            <span className="rounded-full border border-current px-3 py-1 text-xs font-medium opacity-70">
              {year ?? 'In Progress — May 2026'}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

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

const inProgress = certs.filter((c) => !c.year);
const completed = certs.filter((c) => c.year);

export default function Certifications() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Credentials
        </h2>

        {/* In Progress */}
        <div className="mb-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
            In Progress
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {inProgress.map(({ name, code, issuer, color }) => (
              <div key={name} className={`rounded-xl border p-5 ${color}`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="mt-0.5 text-sm opacity-60">
                      {issuer}{code ? ` · ${code}` : ''}
                    </p>
                  </div>
                  <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-current/20 bg-white/60 px-2.5 py-1 text-xs font-medium opacity-80">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" aria-hidden="true" />
                    May 2026
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education / Completed */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Education
          </p>
          <div className="grid gap-4">
            {completed.map(({ name, code, issuer, color, href, year }) => {
              const inner = (
                <div className={`rounded-xl border p-5 transition-all ${color} ${href ? 'hover:shadow-md' : ''}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold">{name}</p>
                      <p className="mt-0.5 text-sm opacity-60">
                        {issuer}{code ? ` · ${code}` : ''}
                      </p>
                    </div>
                    <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-current/20 bg-white/60 px-2.5 py-1 text-xs font-medium opacity-80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {year}
                    </span>
                  </div>
                </div>
              );
              return href ? (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
              ) : (
                <div key={name}>{inner}</div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

interface Cert {
  name: string;
  code?: string;
  issuer: string;
  color: string;
  href?: string;
  year?: string;
  timeline?: string;
  language?: string;
}

const certs: Cert[] = [
  {
    name: 'Critical Thinking for Software Engineers',
    code: '',
    issuer: 'LinkedIn Learning',
    href: 'https://www.linkedin.com/learning/certificates/e9d4fb4684b29e76543b49005273759e7069e0c9a0348b1da207df0ddf984f81',
    year: '2026',
    color: 'bg-white border-slate-200 text-slate-800',
    timeline: 'Feb 2026',
  },
  {
    name: 'Problem Solving Techniques',
    code: '',
    issuer: 'LinkedIn Learning',
    href: 'https://www.linkedin.com/learning/certificates/deb25427509904125f08b9742641b745a85148451b239e13b045bcb848d77d0c',
    year: '2026',
    color: 'bg-white border-slate-200 text-slate-800',
    timeline: 'Feb 2026',
  },
  {
    name: 'React.js: Building an Interface',
    code: '',
    issuer: 'LinkedIn Learning',
    href: 'https://www.linkedin.com/in/ntxtthomas/overlay/Certifications/602999517/treasury?profileId=ACoAAAJeqOABtxiXEcxQoiDBCSTohl-8UCqomeE',
    year: '2025',
    color: 'bg-white border-slate-200 text-slate-800',
    timeline: 'Dec 2025',
  },
  {
    name: 'React Essential Training',
    code: '',
    issuer: 'LinkedIn Learning',
    href: 'https://www.linkedin.com/in/ntxtthomas/overlay/Certifications/602883311/treasury/?profileId=ACoAAAJeqOABtxiXEcxQoiDBCSTohl-8UCqomeE',
    year: '2025',
    color: 'bg-white border-slate-200 text-slate-800',
    timeline: 'Nov 2025',
  },
  {
    name: 'PostgreSQL Essential Training',
    code: '',
    issuer: 'LinkedIn Learning',
    href: 'https://www.linkedin.com/in/ntxtthomas/overlay/Certifications/1642196214/treasury/?profileId=ACoAAAJeqOABtxiXEcxQoiDBCSTohl-8UCqomeE',
    year: '2025',
    color: 'bg-white border-slate-200 text-slate-800',
    timeline: 'Aug 2025',
  },
    {
    name: 'PHP: Object-Oriented Programming',
    code: '',
    issuer: 'LinkedIn Learning',
    href: 'https://www.linkedin.com/in/ntxtthomas/overlay/Certifications/421671076/treasury?profileId=ACoAAAJeqOABtxiXEcxQoiDBCSTohl-8UCqomeE',
    year: '2025',
    color: 'bg-white border-slate-200 text-slate-800',
    timeline: 'May 2025',
  },
  {
    name: 'PHP Essential Training',
    code: '',
    issuer: 'LinkedIn Learning',
    href: 'https://www.linkedin.com/in/ntxtthomas/overlay/Certifications/1642196214/treasury/?profileId=ACoAAAJeqOABtxiXEcxQoiDBCSTohl-8UCqomeE',
    year: '2025',
    color: 'bg-white border-slate-200 text-slate-800',
    timeline: 'April 2025',
  },
  {
    name: 'AWS Certified Solutions Architect',
    code: 'SAA-C03',
    issuer: 'Amazon Web Services',
    color: 'bg-white border-slate-200 text-slate-800',
    timeline: 'Dec 2026',
  },
  {
    name: 'GitHub Actions',
    code: 'GH-200',
    issuer: 'GitHub',
    color: 'bg-white border-slate-200 text-slate-800',
    timeline: 'Oct 2026',
  },
  {
    name: 'Full Stack Software Development',
    issuer: 'Coding Dojo',
    color: 'bg-white border-slate-200 text-white-800',
    href: 'https://www.codingdojo.com/software-development-part-time-accelerated',
    year: '2016',
    language: 'Ruby on Rails • MEAN • LAMP',
  },
];

const inProgress = certs.filter((c) => !c.year);
const completed = certs.filter((c) => c.year);

export default function Certifications() {
  return (
    <section id="credentials" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-3 mt-6 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Credentials
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-7 text-slate-600">
          Validation for cloud architecture, CI/CD practice, and software engineering foundation.
        </p>

        {/* In Progress */}
        <div className="mb-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
            In Progress
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {inProgress.map(({ name, code, issuer, color, timeline }) => (
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
                    {timeline ?? 'TBD'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Completed
          </p>
          <div className="grid gap-4">
            {completed.map(({ name, code, issuer, color, href, year, language }) => {
              const inner = (
                <div className={`rounded-xl border p-5 transition-all ${color} ${href ? 'hover:shadow-md hover:border-slate-300 hover:bg-slate-50' : ''}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold">{name}</p>
                      <p className="mt-0.5 text-sm opacity-60">
                        {issuer}{code ? ` · ${code}` : ''}
                      </p>
                      <p className="mt-0.5 text-sm opacity-60">
                        {language}
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

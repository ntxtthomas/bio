export default function Links() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Featured Project
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">

          {/* Live demo card */}
          <a
            href="https://mycareerintel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-indigo-100 bg-white p-7 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="inline-block rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-600">
                Live Demo
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <h3 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-indigo-700">
              mycareerintel.com
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
              A career intelligence platform that helps users track job market trends,
              benchmark roles, and make data-driven career decisions.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['React', 'Ruby on Rails', 'PostgreSQL', 'AWS'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>

          {/* GitHub repo card */}
          <a
            href="https://github.com/ntxtthomas/career_intelligence/#career-intelligence"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-slate-400 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                Source Code
              </span>
              <svg
                className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-slate-700"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </div>
            <h3 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-slate-700">
              career_intelligence
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
              Full repository — architecture overview, setup instructions, and contribution notes.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['README', 'MIT License', 'Open Source'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}

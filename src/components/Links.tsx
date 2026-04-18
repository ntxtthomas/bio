export default function Links() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Featured Project
        </h2>
        <a
          href="https://mycareerintel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-indigo-100 bg-white p-8 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="mb-3 inline-block rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-600">
                Live Demo
              </span>
              <h3 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-indigo-700">
                mycareerintel.com
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                A career intelligence platform that helps users track job market trends,
                benchmark roles, and make data-driven career decisions.
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
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
      </div>
    </section>
  );
}

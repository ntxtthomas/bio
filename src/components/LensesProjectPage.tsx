const galleryImages = [
  { src: '/lenses_1.webp', alt: 'Lenses app overview' },
  { src: '/lenses_2.webp', alt: 'Lenses app interface' },
  { src: '/lenses_dashboard.webp', alt: 'Lenses dashboard view' },
  { src: '/lenses_HIW_1.webp', alt: 'How it works overview' },
  { src: '/lenses_HIW_2.webp', alt: 'How it works detail' },
  { src: '/lenses_HIW_3.webp', alt: 'How it works detail' },
];

export default function LensesProjectPage() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16 text-slate-800">
      <div className="mx-auto max-w-5xl">
        <a
          href="/"
          className="mb-8 inline-flex items-center text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
        >
          ← Back to main site
        </a>

        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Passion Project</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Lenses
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            A reflective, human-centered product concept designed to make difficult moments feel safer,
            more supported, and easier to navigate.
          </p>
        </header>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          {galleryImages.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="h-full w-full rounded-2xl border border-slate-200 object-cover shadow-sm"
            />
          ))}
        </section>
      </div>
    </div>
  );
}

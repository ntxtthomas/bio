import headshot from '../assets/tthomas_3.png';

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 py-16 text-center">
      <img
        src={headshot}
        alt="Terry Thomas"
        className="h-36 w-36 rounded-full object-cover shadow-md ring-4 ring-slate-200"
      />
      <div>
        <h1 className="text-4xl font-bold text-slate-900">Terry Thomas</h1>
        <p className="mt-2 text-lg text-slate-500">
          Software Engineer · Systems & Reliability · SaaS Platforms
        </p>
      </div>
      <a
        href="mailto:apm.tthomas@gmail.com"
        className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800"
      >
        apm.tthomas@gmail.com
      </a>
    </section>
  );
}

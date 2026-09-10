export default function Footer() {
  return (
    <footer className="bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.22),transparent_32%),radial-gradient(circle_at_85%_0%,rgba(16,185,129,0.2),transparent_35%),linear-gradient(145deg,#020617,#0f172a_45%,#111827)] py-6 text-center text-xs text-slate-500">
      <p>
        &copy; {new Date().getFullYear()} Terry Thomas &middot;{' '}
        <a
          href="mailto:rightfit2027@gmail.com"
          className="transition-colors hover:text-slate-300"
        >
          rightfit2027@gmail.com
        </a>
      </p>
    </footer>
  );
}

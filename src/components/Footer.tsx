export default function Footer() {
  return (
    <footer className="bg-slate-900 py-6 text-center text-xs text-slate-500">
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

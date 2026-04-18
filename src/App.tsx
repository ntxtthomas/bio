import About from './components/About';
import Certifications from './components/Certifications';
import Hero from './components/Hero';
import Links from './components/Links';

function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Hero />
      <About />
      <Links />
      <Certifications />
      <footer className="bg-slate-900 py-6 text-center text-xs text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Terry Thomas &middot;{' '}
          <a
            href="mailto:apm.tthomas@gmail.com"
            className="transition-colors hover:text-slate-300"
          >
            apm.tthomas@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;

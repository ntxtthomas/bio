import { useEffect, useState } from 'react';
import About from './components/About';
import Certifications from './components/Certifications';
import Hero from './components/Hero';
import Links from './components/Links';
import ProfessionalStory from './components/ProfessionalStory';
import type { CareerLens } from './types/career';

function getInitialLens(): CareerLens {
  const params = new URLSearchParams(window.location.search);
  const lensParam = params.get('lens');
  return lensParam === 'builder' ? 'builder' : 'engineer';
}

function App() {
  const [activeLens, setActiveLens] = useState<CareerLens>(getInitialLens);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('lens', activeLens);
    const nextQuery = params.toString();
    const nextUrl = `${window.location.pathname}${nextQuery ? `?${nextQuery}` : ''}${window.location.hash}`;
    window.history.replaceState({}, '', nextUrl);
  }, [activeLens]);

  return (
    <div className="min-h-screen font-sans antialiased">
      <Hero
        lens={activeLens}
        onLensChange={setActiveLens}
      />
      <ProfessionalStory lens={activeLens} />
      <About />
      <Links lens={activeLens} />
      <Certifications lens={activeLens} />
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

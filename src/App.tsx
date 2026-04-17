import Certifications from './components/Certifications';
import Hero from './components/Hero';
import Links from './components/Links';
import ResumeDownload from './components/ResumeDownload';

function App() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-lg px-6 pb-16">
        <Hero />
        <hr className="border-slate-100" />
        <ResumeDownload />
        <hr className="border-slate-100" />
        <Links />
        <hr className="border-slate-100" />
        <Certifications />
      </div>
    </main>
  );
}

export default App;

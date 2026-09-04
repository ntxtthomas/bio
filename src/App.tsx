import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import About from './components/About';
import Certifications from './components/Certifications';
import Hero from './components/Hero';
import Layout from './components/Layout';
import Links from './components/Links';
import Article from './pages/Article';
import Articles from './pages/Articles';
import LensesProjectPage from './pages/Lenses';
import ProfessionalStory from './components/ProfessionalStory';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <ProfessionalStory />
      <About />
      <Links />
      <Certifications />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<Article />} />
        </Route>
        <Route path="/lenses" element={<LensesProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-50 border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" onClick={closeMenu} className="text-sm font-semibold tracking-tight text-foreground">
            Terry Thomas
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center text-muted transition-colors hover:text-accent md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? 'm6 6 12 12M6 18 18 6' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
          <nav
            id="site-navigation"
            className={`${isMenuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col border-b border-border bg-background px-6 py-4 shadow-md md:static md:flex md:flex-row md:items-center md:gap-12 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            <Link
              to={{ pathname: '/', hash: '#about' }}
              onClick={closeMenu}
              className="py-3 text-sm font-medium text-muted transition-colors hover:text-accent md:p-0"
            >
              About Me
            </Link>
            <Link
              to={{ pathname: '/', hash: '#portfolio' }}
              onClick={closeMenu}
              className="py-3 text-sm font-medium text-muted transition-colors hover:text-accent md:p-0"
            >
              Portfolio
            </Link>
            <Link
              to={{ pathname: '/', hash: '#credentials' }}
              onClick={closeMenu}
              className="py-3 text-sm font-medium text-muted transition-colors hover:text-accent md:p-0"
            >
              Credentials
            </Link>
            <Link
              to="/articles"
              onClick={closeMenu}
              className="py-3 text-sm font-medium text-muted transition-colors hover:text-accent md:p-0"
            >
              Articles
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

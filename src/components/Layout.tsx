import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-sm font-semibold tracking-tight text-foreground">
            Terry Thomas
          </Link>
          <nav>
            <Link
              to="/articles"
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
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

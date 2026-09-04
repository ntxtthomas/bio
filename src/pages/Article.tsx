import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { formatArticleDate, loadArticle, type ArticleContent } from '../utils/articles';

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<ArticleContent | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) {
      setNotFound(true);
      return;
    }

    let cancelled = false;
    setArticle(null);
    setNotFound(false);

    loadArticle(slug)
      .then((loaded) => {
        if (!cancelled) setArticle(loaded);
      })
      .catch(() => {
        if (!cancelled) setNotFound(true);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    if (article) {
      document.title = `${article.frontmatter.title} — Terry Thomas`;
    }
  }, [article]);

  if (notFound) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="text-2xl font-semibold text-foreground">Article not found</h1>
        <Link
          to="/articles"
          className="mt-4 inline-block text-sm font-medium text-accent transition-colors hover:opacity-80"
        >
          ← Back to Articles
        </Link>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="text-sm text-muted">Loading…</p>
      </div>
    );
  }

  const { frontmatter, body } = article;

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link
        to="/articles"
        className="text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        ← Back to Articles
      </Link>

      <header className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          {formatArticleDate(frontmatter.date)}
        </p>
        <h1 className="mt-2 text-4xl font-semibold text-foreground">{frontmatter.title}</h1>
        <p className="mt-3 text-lg text-muted">{frontmatter.dek}</p>
      </header>

      <div
        className="mt-10 space-y-5 text-base leading-7 text-foreground
          [&_a]:text-accent [&_a]:underline
          [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground
          [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground
          [&_hr]:my-10 [&_hr]:border-border
          [&_img]:rounded-lg [&_img]:border [&_img]:border-border
          [&_li]:mt-1 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
      >
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </article>
  );
}

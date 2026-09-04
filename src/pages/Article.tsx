import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown, { type Components } from 'react-markdown';
import { formatArticleDate, loadArticle, type ArticleContent } from '../utils/articles';

const markdownComponents: Components = {
  a: ({ node: _node, ...props }) => (
    <a
      {...props}
      className="text-accent underline underline-offset-2 transition-opacity hover:opacity-80"
    />
  ),
  h2: ({ node: _node, ...props }) => (
    <h2 {...props} className="mt-10 text-2xl font-semibold text-foreground" />
  ),
  h3: ({ node: _node, ...props }) => (
    <h3 {...props} className="mt-8 text-xl font-semibold text-foreground" />
  ),
  p: ({ node: _node, ...props }) => <p {...props} className="text-foreground/90" />,
  li: ({ node: _node, ...props }) => <li {...props} className="text-foreground/90" />,
  ul: ({ node: _node, ...props }) => <ul {...props} className="list-disc space-y-1 pl-6" />,
  ol: ({ node: _node, ...props }) => <ol {...props} className="list-decimal space-y-1 pl-6" />,
  hr: ({ node: _node, ...props }) => <hr {...props} className="my-10 border-border" />,
  img: ({ node: _node, ...props }) => (
    <img {...props} className="rounded-lg border border-border" />
  ),
};

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
      <Link to="/articles" className="text-sm text-accent transition-opacity hover:opacity-80">
        ← Back to Articles
      </Link>

      <header className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted/70">
          {formatArticleDate(frontmatter.date)}
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-foreground">{frontmatter.title}</h1>
        <p className="mt-3 text-lg text-muted">{frontmatter.dek}</p>
      </header>

      <div className="mt-10 space-y-5 text-base leading-7 text-foreground/90">
        <ReactMarkdown components={markdownComponents}>{body}</ReactMarkdown>
      </div>
    </article>
  );
}

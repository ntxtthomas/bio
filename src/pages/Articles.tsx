import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { articleSlugs } from '../content/articles';
import { formatArticleDate, loadArticle, type ArticleFrontmatter } from '../utils/articles';

interface ArticleSummary {
  slug: string;
  frontmatter: ArticleFrontmatter;
}

export default function Articles() {
  const [articles, setArticles] = useState<ArticleSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      articleSlugs.map(async (slug) => {
        const { frontmatter } = await loadArticle(slug);
        return { slug, frontmatter };
      }),
    ).then((loaded) => {
      if (cancelled) return;
      const sorted = [...loaded].sort(
        (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime(),
      );
      setArticles(sorted);
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-foreground">Articles</h1>

      {loading && <p className="mt-6 text-sm text-muted">Loading…</p>}

      {!loading && articles.length === 0 && (
        <p className="mt-6 text-sm text-muted">No articles yet.</p>
      )}

      <ul className="mt-8 flex flex-col divide-y divide-border">
        {articles.map(({ slug, frontmatter }) => (
          <li key={slug} className="py-6 first:pt-0">
            <Link to={`/articles/${slug}`} className="group block">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                {formatArticleDate(frontmatter.date)}
              </p>
              <h2 className="mt-1 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                {frontmatter.title}
              </h2>
              <p className="mt-1 text-sm text-muted">{frontmatter.dek}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

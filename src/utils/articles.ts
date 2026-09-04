import { assetPath } from './assets';

export interface ArticleFrontmatter {
  title: string;
  dek: string;
  slug: string;
  date: string;
  hero: string;
}

export interface ArticleContent {
  frontmatter: ArticleFrontmatter;
  body: string;
}

const FRONTMATTER_BLOCK = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const SOCIAL_TEASERS_HEADING = '## Social Teasers';

export async function fetchArticleRaw(slug: string): Promise<string> {
  const response = await fetch(assetPath(`articles/${slug}/${slug}.md`));
  if (!response.ok) {
    throw new Error(`Article not found: ${slug}`);
  }
  return response.text();
}

export function parseFrontmatter(raw: string): ArticleContent {
  const match = raw.match(FRONTMATTER_BLOCK);
  if (!match) {
    throw new Error('Article is missing a frontmatter block');
  }

  const fields: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const fieldMatch = line.match(/^(\w+):\s*(.*)$/);
    if (!fieldMatch) continue;
    const [, key, rawValue] = fieldMatch;
    const value = rawValue.trim();
    fields[key] = value.startsWith('"') && value.endsWith('"') ? value.slice(1, -1) : value;
  }

  const frontmatter: ArticleFrontmatter = {
    title: fields.title ?? '',
    dek: fields.dek ?? '',
    slug: fields.slug ?? '',
    date: fields.date ?? '',
    hero: fields.hero ?? '',
  };

  return { frontmatter, body: raw.slice(match[0].length) };
}

// The "## Social Teasers" section and everything after it is copy the site
// owner pastes manually into LinkedIn/Reddit — it must never reach the
// rendered article page.
export function stripSocialTeasers(body: string): string {
  const index = body.indexOf(SOCIAL_TEASERS_HEADING);
  return (index === -1 ? body : body.slice(0, index)).trimEnd();
}

export async function loadArticle(slug: string): Promise<ArticleContent> {
  const raw = await fetchArticleRaw(slug);
  const { frontmatter, body } = parseFrontmatter(raw);
  return { frontmatter, body: stripSocialTeasers(body) };
}

export function formatArticleDate(date: string): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

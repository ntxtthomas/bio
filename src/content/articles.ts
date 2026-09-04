// Single source of truth for which articles exist. There's no server here to
// list a directory at runtime, so publishing a new article means adding its
// markdown file at public/articles/<slug>/<slug>.md AND appending its slug
// to this array — both the Articles index page and the build-time prerender
// step (scripts/prerender-articles.mjs) read from this list.
export const articleSlugs: string[] = ['debugging-my-job-search'];

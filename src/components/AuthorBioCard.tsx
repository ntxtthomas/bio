import { assetPath } from '../utils/assets';
import { getResumeVariant } from '../utils/resume';

const AUTHOR_AVATAR = assetPath('articles/debugging-my-job-search/tthomas_3.webp');
const resumeVariant = getResumeVariant('engineer');

const links = [
  { label: 'Email', href: 'mailto:rightfit2027@gmail.com', external: false, icon: 'email' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ntxtthomas', external: true, icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/ntxtthomas', external: true, icon: 'github' },
  { label: 'Resume', href: resumeVariant.preferredPath, external: true, icon: 'resume' },
];

function LinkIcon({ icon }: { icon: string }) {
  if (icon === 'email') {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (icon === 'linkedin') {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.23 0 22.25 0h-.03Z" />
      </svg>
    );
  }

  if (icon === 'github') {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12.02c0 4.42 2.87 8.18 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03.8-.22 1.65-.34 2.5-.34s1.71.12 2.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.02C22 6.48 17.52 2 12 2Z" />
      </svg>
    );
  }

  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 3h9l3 3v15H6z" />
      <path d="M15 3v4h4M9 12h6M9 16h6" />
    </svg>
  );
}

export default function AuthorBioCard() {
  return (
    <div className="mt-16 border-t border-border pt-8">
      <div className="flex items-start gap-4">
        <img
          src={AUTHOR_AVATAR}
          alt="Terry Thomas"
          className="h-14 w-14 shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-foreground">Terry Thomas</p>
          <p className="mt-1 text-sm text-muted">
            Senior Software Engineer writing about the job search from the inside.<br/>
            Rails - Systems Thinking, and treating career problems like production incidents.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-8 gap-y-1 text-sm">
            {links.map(({ label, href, external, icon }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={label}
                title={label}
                className="inline-flex text-slate-900 transition-opacity hover:opacity-70"
              >
                <LinkIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

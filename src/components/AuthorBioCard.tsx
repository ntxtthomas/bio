import { assetPath } from '../utils/assets';
import { getResumeVariant } from '../utils/resume';

const AUTHOR_AVATAR = assetPath('articles/debugging-my-job-search/tthomas_3.webp');
const resumeVariant = getResumeVariant('engineer');

const links = [
  { label: 'Email', href: 'mailto:rightfit2027@gmail.com', external: false },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ntxtthomas', external: true },
  { label: 'GitHub', href: 'https://github.com/ntxtthomas', external: true },
  { label: 'Resume', href: resumeVariant.preferredPath, external: true },
];

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
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {links.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="text-accent transition-opacity hover:opacity-80"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

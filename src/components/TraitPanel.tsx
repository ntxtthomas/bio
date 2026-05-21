interface TraitPanelItem {
  title: string;
  eyebrow: string;
  description: string;
  accent: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface TraitPanelProps {
  sectionLabel: string;
  heading: string;
  description: string;
  focusLabel: string;
  focusCopy: string;
  // directionCopy?: string;
  // nextStepCopy?: string;
  // nextStepVideo?: DirectionVideo;
  tags: string[];
  items: TraitPanelItem[];
  onClose: () => void;
}

// interface DirectionVideo {
//   src: string;
//   poster: string;
//   title?: string;
// }

export default function TraitPanel({
  sectionLabel,
  heading,
  description,
  focusLabel,
  focusCopy,
  // directionCopy,
  // nextStepCopy,
  // nextStepVideo,
  tags,
  items,
  onClose,
}: TraitPanelProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-[0_24px_80px_-32px_rgba(15,23,42,0.65)]">
      <div className="relative isolate overflow-hidden px-6 py-7 sm:px-8 sm:py-8">
        <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.28),_transparent_45%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_38%)]" />
        <div className="relative flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                {sectionLabel}
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {heading}
              </h3>
              <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                {description}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:bg-white/10"
              aria-label={`Close ${sectionLabel.toLowerCase()} panel`}
            >
              Close
            </button>
          </div>

          <div className="gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                {focusLabel}
              </div>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
                {focusCopy}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* <div className="rounded-[1.5rem] border border-emerald-400/20 bg-emerald-300/10 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
                Direction
              </p>
              {directionCopy && (
                <p className="mt-4 text-sm leading-7 text-emerald-50/90">
                  {directionCopy}
                </p>
              )}
              <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-slate-950/55 p-4">
                {!nextStepVideo && (
                  <p className="text-sm font-medium text-white">Next upgrade path</p>
                )}
                {nextStepVideo ? (
                  <video
                    src={nextStepVideo.src}
                    poster={nextStepVideo.poster}
                    title={nextStepVideo.title}
                    controls
                    className="w-full rounded-lg"
                  />
                ) : (
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {nextStepCopy}
                  </p>
                )}
              </div>
            </div> */}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {items.map(({ title, eyebrow, description: itemDescription, accent, imageSrc, imageAlt }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70"
              >
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={imageAlt ?? title}
                    className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className={`h-32 bg-gradient-to-br ${accent} transition-transform duration-300 group-hover:scale-[1.03]`} />
                )}
                <div className="space-y-3 p-5">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    {eyebrow}
                  </p>
                  <h4 className="text-lg font-semibold text-white">{title}</h4>
                  <p className="text-sm leading-6 text-slate-300">{itemDescription}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
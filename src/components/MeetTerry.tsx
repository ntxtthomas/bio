import { useEffect, useMemo, useRef } from 'react';
import type { CareerLens } from '../types/career';
import { getResumeVariant } from '../utils/resume';
import { getMeetTerryMediaConfig } from '../utils/meetTerry';
import { trackPosthogEvent } from '../utils/posthog';

interface MeetTerryProps {
  lens: CareerLens;
}

const milestones = [50, 90];

export default function MeetTerry({ lens }: MeetTerryProps) {
  const resumeVariant = useMemo(() => getResumeVariant(lens), [lens]);
  const mediaConfig = useMemo(() => getMeetTerryMediaConfig(), []);
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasTrackedViewRef = useRef(false);
  const hasTrackedPlayRef = useRef(false);
  const trackedMilestonesRef = useRef(new Set<number>());

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || hasTrackedViewRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasTrackedViewRef.current) {
          return;
        }

        hasTrackedViewRef.current = true;
        trackPosthogEvent('meet_terry_section_view', {
          lens,
          has_video: Boolean(mediaConfig.videoUrl),
        });
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [lens, mediaConfig.videoUrl]);

  const handlePlay = () => {
    if (hasTrackedPlayRef.current) {
      return;
    }

    hasTrackedPlayRef.current = true;
    trackPosthogEvent('meet_terry_video_play', {
      lens,
      video_url: mediaConfig.videoUrl || 'unset',
    });
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) {
      return;
    }

    const watchedPercent = Math.round((video.currentTime / video.duration) * 100);

    milestones.forEach((milestone) => {
      if (watchedPercent >= milestone && !trackedMilestonesRef.current.has(milestone)) {
        trackedMilestonesRef.current.add(milestone);
        trackPosthogEvent('meet_terry_video_progress', {
          lens,
          milestone,
          watched_percent: watchedPercent,
        });
      }
    });
  };

  const handleEnded = () => {
    trackPosthogEvent('meet_terry_video_complete', {
      lens,
      video_url: mediaConfig.videoUrl || 'unset',
    });
  };

  const handleResumeClick = () => {
    trackPosthogEvent('resume_button_click', {
      lens,
      location: 'meet-terry',
    });
  };

  return (
    <section ref={sectionRef} id="meet-terry" className="bg-slate-50 py-16 scroll-mt-20 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.28)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Before the résumé
                </p>
                <h2 className="max-w-xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Meet Terry
                </h2>
                <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  A quick 2-3 minute introduction to who I am, how I work, what I’m building today,
                  and what I’m looking for next.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  {
                    title: 'What I do',
                    body: 'Build reliable products, systems, and workflows that hold up under real use.',
                  },
                  {
                    title: 'How I work',
                    body: 'Stay calm, accountable, and cross-functional while solving the actual problem.',
                  },
                  {
                    title: 'What I want',
                    body: 'Roles where judgment, ownership, and thoughtful execution matter as much as output.',
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                    href={resumeVariant.preferredPath}
                    target="_blank"
                    rel="noopener noreferrer"
                  onClick={handleResumeClick}
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Read the résumé
                </a>
                <a
                  href="mailto:apm.tthomas@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-100 active:scale-95"
                >
                  Ask a question
                </a>
              </div>

              <p className="text-sm leading-6 text-slate-500">
                This is meant to be an easy yes/no filter: if the tone fits, keep going. If not,
                you’ve learned that in under three minutes.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-950 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)]">
              {mediaConfig.videoUrl ? (
                <video
                  ref={videoRef}
                  controls
                  playsInline
                  preload="metadata"
                  poster={mediaConfig.posterUrl || undefined}
                  className="block aspect-video w-full bg-black"
                  onPlay={handlePlay}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={handleEnded}
                >
                  <source src={mediaConfig.videoUrl} />
                </video>
              ) : (
                <div className="flex aspect-video items-center justify-center bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.18),transparent_30%),linear-gradient(145deg,#0f172a,#020617)] px-8 text-center">
                  <div className="max-w-sm space-y-3 text-white">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.518-3.74A1 1 0 007 8.295v7.41a1 1 0 001.234.97l6.518-1.67a1 1 0 00.742-.97v-2.19a1 1 0 00-.742-.97z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                      Video placeholder
                    </p>
                    <p className="text-base leading-7 text-slate-200">
                      Add your Loom export URL to <span className="font-semibold">VITE_MEET_TERRY_VIDEO_URL</span>
                      to activate the embedded intro video.
                    </p>
                  </div>
                </div>
              )}

              <div className="border-t border-white/10 bg-slate-900 px-5 py-4 text-sm text-slate-300">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-white">2-3 minute overview</p>
                    <p className="text-slate-400">Captions on, S3 hosted, measured in PostHog.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Play</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">50%</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">90%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
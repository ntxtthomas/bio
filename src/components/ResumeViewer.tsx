import { useEffect, useMemo, useState } from 'react';
import type { CareerLens } from '../types/career';
import { getResumeVariant, resolveResumePath } from '../utils/resume';

interface ResumeViewerProps {
  lens: CareerLens;
  onBack: () => void;
}

export default function ResumeViewer({ lens, onBack }: ResumeViewerProps) {
  const variant = useMemo(() => getResumeVariant(lens), [lens]);
  const [resumePath, setResumePath] = useState<string>(variant.fallbackPath);

  useEffect(() => {
    let isMounted = true;

    async function resolvePath() {
      const resolvedPath = await resolveResumePath(variant);
      if (isMounted) {
        setResumePath(resolvedPath);
      }
    }

    resolvePath();

    return () => {
      isMounted = false;
    };
  }, [variant]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleDownload = async () => {
    const resumeUrl = `${window.location.origin}${resumePath}`;
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true;

    if (isStandalone && typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title: variant.title,
          text: `Terry Thomas ${variant.title.toLowerCase()}`,
          url: resumeUrl,
        });
        return;
      } catch {
        // User canceled share or share failed; continue to fallback.
      }
    }

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = variant.downloadFileName;
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-slate-900">
      <div className="flex items-center justify-between bg-slate-800 px-4 py-3 shadow-md">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-600"
          aria-label="Go back"
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
          Back
        </button>

        <h1 className="text-sm font-semibold text-white">{variant.title}</h1>

        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          aria-label="Download resume"
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </button>
      </div>

      <div className="flex-1 overflow-auto">
        <iframe
          src={resumePath}
          className="h-full w-full border-0"
          title={`${variant.title} PDF`}
        />
      </div>
    </div>
  );
}

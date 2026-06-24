import { useEffect, useMemo, useState } from 'react';
import type { CareerLens } from '../types/career';
import { getResumeVariant } from '../utils/resume';

interface ResumeDownloadProps {
  lens: CareerLens;
}

export default function ResumeDownload({ lens }: ResumeDownloadProps) {
  const variant = useMemo(() => getResumeVariant(lens), [lens]);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    let isActive = true;

    const preloadResume = async () => {
      try {
        const response = await fetch(variant.preferredPath, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Failed to load resume: ${response.status}`);
        }

        const blob = await response.blob();
        if (!isActive) {
          return;
        }

        setResumeFile(new File([blob], variant.downloadFileName, { type: blob.type || 'application/pdf' }));
      } catch {
        if (isActive) {
          setResumeFile(null);
        }
      }
    };

    void preloadResume();

    return () => {
      isActive = false;
      controller.abort();
    };
  }, [variant]);

  const canShareResumeFile =
    resumeFile !== null &&
    typeof navigator !== 'undefined' &&
    typeof navigator.share === 'function' &&
    typeof navigator.canShare === 'function' &&
    navigator.canShare({ files: [resumeFile] });

  const handleDownload = async () => {
    if (canShareResumeFile && resumeFile) {
      await navigator.share({
        title: variant.title,
        text: `${variant.title} - Terry Thomas`,
        files: [resumeFile],
      });
      return;
    }

    if (resumeFile) {
      const objectUrl = URL.createObjectURL(resumeFile);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.setTimeout(() => {
        URL.revokeObjectURL(objectUrl);
      }, 1000);

      return;
    }

    const link = document.createElement('a');
    link.href = variant.preferredPath;
    link.download = variant.downloadFileName;
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-md transition-all hover:bg-indigo-50 hover:shadow-lg active:scale-95"
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      {lens === 'engineer' ? 'Engineer Resume' : 'Builder Resume'}
    </button>
  );
}

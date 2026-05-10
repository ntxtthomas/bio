interface ResumeDownloadProps {
  onViewResume: () => void;
}

export default function ResumeDownload({ onViewResume }: ResumeDownloadProps) {
  return (
    <button
      onClick={onViewResume}
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
        Download Resume
      </button>
  );
}

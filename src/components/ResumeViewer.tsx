import { useEffect } from 'react';

interface ResumeViewerProps {
  onBack: () => void;
}

export default function ResumeViewer({ onBack }: ResumeViewerProps) {
  useEffect(() => {
    // Disable scroll on body when viewer is mounted
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBack = () => {
    onBack();
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-slate-900">
      {/* Control bar */}
      <div className="flex items-center justify-between bg-slate-800 px-4 py-3 shadow-md">
        <button
          onClick={handleBack}
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
        
        <h1 className="text-sm font-semibold text-white">Resume</h1>
        
        <a
          href="/resume.pdf"
          download="terry_thomas_resume.pdf"
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
        </a>
      </div>

      {/* PDF viewer */}
      <div className="flex-1 overflow-auto">
        <iframe
          src="/resume.pdf"
          className="h-full w-full border-0"
          title="Resume PDF"
        />
      </div>
    </div>
  );
}

import { useState } from 'react';

// ─── Brand tokens ────────────────────────────────────────────────────────────
const C = {
  bg:         '#F5F0E8',
  surface:    '#EDE8DE',
  text:       '#3C3530',
  muted:      '#9C9590',
  amber:      '#C49A3C',
  amberDark:  '#A8832E',
  teal:       '#2C5F5D',
  stone:      '#9C8B75',
  sage:       '#7C9A7E',
  dark:       '#3C3530',
  darkText:   '#F5F0E8',
} as const;

// ─── How It Works steps ──────────────────────────────────────────────────────
const steps = [
  {
    num: '01',
    title: "Describe what you're facing",
    description: "No forms. No categories. Just write what's happening.",
    src: '/lenses_HIW_1.webp',
    alt: 'Step 1: Describe your situation',
  },
  {
    num: '02',
    title: 'Choose what you need most',
    description:
      'Eight focus options guide the engine toward the right lenses for your situation.',
    src: '/lenses_HIW_2.webp',
    alt: 'Step 2: Choose your focus',
  },
  {
    num: '03',
    title: 'Receive curated perspectives',
    description:
      'Cards drawn from multiple wisdom traditions — each one a different lens on the same situation.',
    src: '/lenses_HIW_3.webp',
    alt: 'Step 3: Receive curated perspectives',
  },
];

// ─── ADRs / trade-offs ───────────────────────────────────────────────────────
const tradeoffs = [
  {
    label: 'Deterministic before RAG',
    body: 'ADR-002: Chose deterministic content retrieval over RAG for V1 to validate product value first. The reflection engine routes through Focus → LensGroup → Lens → Principle → ContentItem with theme-overlap scoring for practice selection. RAG/pgvector planned for V1.5 after real user feedback.',
  },
  {
    label: 'Tradition as content filter, not lens selector',
    body: 'ADR-019: The major architectural pivot. Originally lenses were tradition-based (a Christianity lens, a Buddhism lens). Refactored so lenses ask universal questions ("What am I actually feeling beneath the surface?") and traditions become the source of content that answers those questions. A Christian and a Buddhist receive different content through the same lens — filtered by preferred tradition.',
  },
  {
    label: 'Principle as first-class model',
    body: 'ADR-020: Added a Principle layer between Lens and ContentItem — the core truth a lens teaches. This made the cross-tradition connection explicit and queryable: multiple ContentItems from different traditions can illustrate the same Principle.',
  },
  {
    label: 'User empathy in the engine',
    body: 'ADR-017: Reflections are editable for 5 minutes after submission. Editing deletes cards, re-runs the engine, and resets the window. Server enforces the constraint — the client timer is UX only. Small decision. Reflects the product philosophy: this is a safe space, not a one-shot tool.',
  },
  {
    label: 'Content architecture — The Three Arcs',
    body: 'Designed a three-arc content framework for corpus curation: Arc 1 (the problem — user arrives here), Arc 2 (the inner journey — multiple tradition perspectives), Arc 3 (agency and what can be done). Every ContentItem is authored to serve a specific arc, ensuring responses feel structurally coherent rather than randomly assembled.',
  },
  {
    label: 'Custom admin over ActiveAdmin',
    body: 'ADR-003: Rails 8 + Propshaft compatibility issues with ActiveAdmin. Built a custom admin namespace instead — full CRUD for 11 resources, sortable columns with SQL injection protection, Pundit authorization, Bullet N+1 detection throughout.',
  },
];

const stats = [
  { value: '50', label: 'Lenses across 8 LensGroups' },
  { value: '81+', label: 'ContentItems curated' },
  { value: '30', label: 'Practices' },
  { value: '38', label: 'Affinity pairs' },
  { value: '28+', label: 'ADRs' },
  { value: '395+', label: 'RSpec examples · 0 failures' },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function Lenses() {
  const [deepDiveOpen, setDeepDiveOpen] = useState(false);

  return (
    <>
      {/* Google Fonts */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div style={{ backgroundColor: C.bg, color: C.text, fontFamily: "'Inter', system-ui, sans-serif" }}>

        {/* ── SECTION 1: VIDEO ───────────────────────────────────────────── */}
        <section style={{ backgroundColor: C.teal }} className="w-full py-12 px-6">
          <div className="mx-auto w-full max-w-[800px]">
            {/* TODO: replace src with actual video URL */}
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <div
                className="absolute inset-0 flex items-center justify-center rounded-xl"
                style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}
              >
                <span className="text-sm" style={{ color: C.darkText, opacity: 0.6 }}>
                  Video coming soon
                </span>
              </div>
            </div>
            <p className="mt-3 text-center text-xs" style={{ color: 'rgba(245,240,232,0.6)', fontFamily: "'Inter', system-ui, sans-serif" }}>
              A 90-second overview
            </p>
          </div>
        </section>

        {/* ── SECTION 2: HERO ────────────────────────────────────────────── */}
        <section style={{ backgroundColor: C.bg }} className="px-6 py-20 text-center">
          <div className="mx-auto max-w-2xl">
            <h1
              className="text-4xl sm:text-5xl"
              style={{ fontFamily: "'Lora', Georgia, serif", color: C.text, fontWeight: 600, lineHeight: 1.15 }}
            >
              Lenses
            </h1>
            <p
              className="mt-5 text-lg sm:text-xl italic"
              style={{ fontFamily: "'Lora', Georgia, serif", color: C.amber }}
            >
              "When life gets complicated, look through a different lens."
            </p>
            <p className="mt-8 text-base leading-8" style={{ color: C.text, opacity: 0.85 }}>
              Lenses is a guided reflection application that helps people gain clarity on life's
              difficult moments — not by giving advice, but by presenting curated wisdom from
              multiple traditions. Psychology. Philosophy. Faith. Recovery. Common sense. Each one
              offering a different way to see the same situation.
            </p>
            <p className="mt-5 text-base leading-8" style={{ color: C.text, opacity: 0.85 }}>
              The underlying message: you are not powerless. You have options. You have agency.
            </p>
            <p
              className="mt-8 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: C.stone }}
            >
              A Passion Project · Rails 8 · Built with HITL AI Orchestration
            </p>
          </div>
        </section>

        {/* ── SECTION 3: THE PROBLEM ─────────────────────────────────────── */}
        <section style={{ backgroundColor: C.surface }} className="px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <h2
              className="mb-12 text-2xl sm:text-3xl"
              style={{ fontFamily: "'Lora', Georgia, serif", color: C.text, fontWeight: 600 }}
            >
              The Problem It Solves
            </h2>
            <div className="grid gap-10 md:grid-cols-2">
              {/* Left */}
              <div>
                <h3
                  className="mb-4 text-base font-semibold"
                  style={{ color: C.text }}
                >
                  At 11pm, overwhelmed and stuck
                </h3>
                <p className="text-sm leading-7" style={{ color: C.text, opacity: 0.8 }}>
                  Most people in difficult moments have two options: find someone to talk to (not
                  always available) or ask an AI (gets a generalist response that sounds helpful
                  but means nothing).
                </p>
                <p className="mt-4 text-sm leading-7" style={{ color: C.text, opacity: 0.8 }}>
                  Lenses is a third option. Curated, tradition-specific wisdom — available anytime,
                  private by design, and built to help you think more clearly rather than tell you
                  what to do.
                </p>
              </div>
              {/* Right */}
              <div>
                <h3
                  className="mb-4 text-base font-semibold"
                  style={{ color: C.text }}
                >
                  Not a chatbot. A wisdom delivery system.
                </h3>
                <p className="text-sm leading-7" style={{ color: C.text, opacity: 0.8 }}>
                  Every piece of content is hand-curated from specific traditions. Nothing is
                  generated on the fly. The user receives perspectives — not answers. They decide
                  what resonates.
                </p>
                <p className="mt-4 text-sm leading-7" style={{ color: C.text, opacity: 0.8 }}>
                  ChatGPT is a generalist drawing from everything. Lenses is a specialist drawing
                  from a curated corpus of human wisdom accumulated over centuries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: HOW IT WORKS ────────────────────────────────────── */}
        <section style={{ backgroundColor: C.bg }} className="px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <h2
              className="mb-14 text-2xl sm:text-3xl"
              style={{ fontFamily: "'Lora', Georgia, serif", color: C.text, fontWeight: 600 }}
            >
              How It Works
            </h2>
            <div className="flex flex-col gap-16">
              {steps.map((step) => (
                <div key={step.num}>
                  <div className="mb-4 flex items-start gap-4">
                    <span
                      className="shrink-0 text-2xl font-semibold leading-none"
                      style={{ fontFamily: "'Lora', Georgia, serif", color: C.amber }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h3
                        className="text-lg font-semibold"
                        style={{ fontFamily: "'Lora', Georgia, serif", color: C.text }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-7" style={{ color: C.text, opacity: 0.75 }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <img
                    src={step.src}
                    alt={step.alt}
                    className="mx-auto w-full max-w-[600px] rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: TECHNICAL BRIEF ─────────────────────────────────── */}
        <section style={{ backgroundColor: C.dark }} className="px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <h2
              className="mb-12 text-2xl sm:text-3xl"
              style={{ fontFamily: "'Lora', Georgia, serif", color: C.darkText, fontWeight: 600 }}
            >
              Under the Hood
            </h2>

            <div className="grid gap-12 md:grid-cols-2">
              {/* ── Left column: visible summary ── */}
              <div className="flex flex-col gap-8">
                {/* Stack */}
                <div>
                  <p
                    className="mb-2 text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: C.amber }}
                  >
                    Stack
                  </p>
                  <p className="text-sm leading-7" style={{ color: C.darkText, opacity: 0.85 }}>
                    Rails 8 · PostgreSQL · Hotwire<br />
                    Turbo + Stimulus · Tailwind CSS<br />
                    Propshaft · Devise · Pundit<br />
                    Solid Queue · Kamal · Docker
                  </p>
                </div>

                {/* AI Engineering */}
                <div>
                  <p
                    className="mb-2 text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: C.amber }}
                  >
                    AI Engineering
                  </p>
                  <p className="text-sm leading-7" style={{ color: C.darkText, opacity: 0.85 }}>
                    Built via HITL multi-role AI orchestration — serving as decision-maker across
                    architecture, product, content, and engineering while maintaining coherence
                    across extended AI sessions through deliberate context engineering.
                  </p>
                </div>

                {/* Roadmap */}
                <div>
                  <p
                    className="mb-2 text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: C.amber }}
                  >
                    Roadmap
                  </p>
                  <p className="text-sm leading-7" style={{ color: C.darkText, opacity: 0.85 }}>
                    V1.5: pgvector semantic retrieval + LLM-assisted card assembly via RAG.
                    Deterministic-first architecture chosen deliberately — validate product value
                    before introducing AI complexity.
                  </p>
                </div>
              </div>

              {/* ── Right column: expandable deep dive ── */}
              <div>
                <button
                  type="button"
                  onClick={() => setDeepDiveOpen((o) => !o)}
                  className="mb-6 flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
                  style={{ color: C.amber }}
                >
                  Technical Deep Dive
                  <span
                    className="inline-block transition-transform duration-300"
                    style={{ transform: deepDiveOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    ↓
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: deepDiveOpen ? '9999px' : '0px', opacity: deepDiveOpen ? 1 : 0 }}
                >
                  {/* Trade-offs */}
                  <p
                    className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: C.amber }}
                  >
                    Key Trade-offs &amp; ADRs
                  </p>
                  <div className="flex flex-col gap-6">
                    {tradeoffs.map((t) => (
                      <div key={t.label}>
                        <p className="mb-1 text-sm font-semibold" style={{ color: C.darkText }}>
                          {t.label}
                        </p>
                        <p className="text-sm leading-7" style={{ color: C.darkText, opacity: 0.75 }}>
                          {t.body}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* By the numbers */}
                  <p
                    className="mb-5 mt-10 text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: C.amber }}
                  >
                    By the Numbers
                  </p>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-lg p-4"
                        style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                      >
                        <p
                          className="text-2xl font-semibold"
                          style={{ fontFamily: "'Lora', Georgia, serif", color: C.amber }}
                        >
                          {s.value}
                        </p>
                        <p className="mt-1 text-xs leading-5" style={{ color: C.darkText, opacity: 0.65 }}>
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: BACK TO PORTFOLIO ───────────────────────────────── */}
        <section style={{ backgroundColor: C.bg }} className="px-6 py-16 text-center">
          <p
            className="mb-6 text-sm italic"
            style={{ fontFamily: "'Lora', Georgia, serif", color: C.muted }}
          >
            This is a living project. Content grows. The engine evolves.
          </p>
          <a
            href="/"
            className="text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: C.amber }}
          >
            ← Back to Portfolio
          </a>
        </section>

      </div>
    </>
  );
}

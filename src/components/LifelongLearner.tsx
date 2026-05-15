import TraitPanel from './TraitPanel';

interface LifelongLearnerProps {
  onClose: () => void;
}

export default function LifelongLearner({ onClose }: LifelongLearnerProps) {
  return (
    <TraitPanel
      sectionLabel="Lifelong learner"
      heading="I like being stretched by new systems, new tools, and the gaps between them."
      description="The common thread in my learning is practical depth. I do not collect trivia; I build working understanding that helps me move faster and make better calls."
      focusLabel="Learning style"
      focusCopy="I learn best by building, refactoring, and tracing systems until the hidden assumptions show themselves. That habit translates directly into stronger engineering judgment."
      directionCopy="Speaking of learning, I taught myself GenAI using three different platforms to produce this little video metaphor on System Thinking, Hands-On Expirementation, and Clear Explanation!"
      nextStepCopy="A good next version would show recent areas of study with one concrete outcome each: a refactor, a bug fix, a deployment, or a small experiment that changed how I think."
      tags={['Builds to learn', 'Prefers first principles', 'Translates curiosity into output']}
      items={[
        {
          title: 'Systems Thinking',
          eyebrow: 'Pattern recognition',
          description: 'I like mapping how pieces interact, where failure spreads, and where small design changes buy disproportionate clarity.',
          accent: 'from-indigo-300 via-sky-200 to-cyan-50',
          imageSrc: '/learning-systems.png',
          imageAlt: 'Systems Thinking',
        },
        {
          title: 'Hands-on Labs',
          eyebrow: 'Applied practice',
          description: 'New ideas stick when I can test them under friction, not just read about them in the abstract.',
          accent: 'from-amber-200 via-yellow-100 to-stone-50',
          imageSrc: '/learning-applied.jpg',
          imageAlt: 'Hands-on Labs',
        },
        {
          title: 'Clear Explanation',
          eyebrow: 'Signal over jargon',
          description: 'Learning is only complete when I can explain the tradeoffs cleanly to someone else on the team.',
          accent: 'from-emerald-300 via-teal-200 to-cyan-50',
          imageSrc: '/learning-signal.jpg',
          imageAlt: 'Clear Explanation',
        },
      ]}
      onClose={onClose}
    />
  );
}
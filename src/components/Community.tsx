import TraitPanel from './TraitPanel';

interface CommunityProps {
  onClose: () => void;
}

export default function Community({ onClose }: CommunityProps) {
  return (
    <TraitPanel
      sectionLabel="Community"
      heading="I care about the human conditions that make stability possible, especially food security and housing."
      description="This matters to me because systems are never abstract for long. When basic needs are unstable, every other layer of progress gets harder to reach and harder to keep."
      focusLabel="Why it matters"
      focusCopy="Community work keeps me pointed at real outcomes. It is a reminder that structure, reliability, and access are not just engineering concerns; they are quality-of-life concerns."
      directionCopy="This can later evolve into specific organizations, volunteer work, or a short statement of values with links out to the efforts worth supporting."
      nextStepCopy="The next version should likely stay concise: one or two real connections, one concrete contribution, and a way to keep the tone grounded rather than performative."
      tags={['Grounded values', 'Human-first systems', 'Prefers useful action']}
      items={[
        {
          title: 'Food Access',
          eyebrow: 'Immediate need',
          description: 'Reliable access to food changes what people can plan for tomorrow, not just how they survive today.',
          accent: 'from-lime-300 via-emerald-200 to-green-50',
        },
        {
          title: 'Housing Stability',
          eyebrow: 'Foundational layer',
          description: 'Without a stable place to live, every other system becomes harder to navigate and trust.',
          accent: 'from-cyan-300 via-sky-200 to-blue-50',
        },
        {
          title: 'Local Action',
          eyebrow: 'Where it gets real',
          description: 'The most credible version of care is practical: show up, contribute, and support the people already doing the work.',
          accent: 'from-violet-200 via-fuchsia-100 to-rose-50',
        },
      ]}
      onClose={onClose}
    />
  );
}
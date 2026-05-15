import TraitPanel from './TraitPanel';

interface HusbandFatherProps {
  onClose: () => void;
}

export default function HusbandFather({ onClose }: HusbandFatherProps) {
  return (
    <TraitPanel
      sectionLabel="Husband & father"
      heading="The most important parts of my life are also the ones that taught me patience, steadiness, and perspective."
      description="Family life shapes how I work: show up consistently, communicate clearly, and care about outcomes without making everything dramatic."
      focusLabel="What it builds"
      focusCopy="Being responsible for other people every day reinforces the same traits I value professionally: reliability, empathy, and the ability to stay constructive when the situation is messy."
    //   directionCopy="Later this can become a quieter, image-led section or a short reflection on the kind of teammate and leader family life has helped shape."
    //   nextStepCopy="The strongest follow-up version here is probably simple: a few grounded lines and one warm visual instead of more density."
      tags={['Steady presence', 'Long-horizon mindset', 'Protective of people and time']}
      items={[
        {
          title: 'Patience',
          eyebrow: 'Daily practice',
          description: 'The best responses usually come from listening first, slowing down, and not overreacting to the moment.',
          accent: 'from-rose-200 via-orange-100 to-amber-50',
          imageSrc: '/family-patience.jpg',
          imageAlt: 'Patience',
        },
        {
          title: 'Responsibility',
          eyebrow: 'Non-transferable',
          description: 'You learn to do the work that needs doing, even when it is inconvenient, invisible, or repetitive.',
          accent: 'from-slate-300 via-slate-200 to-stone-50',
          imageSrc: '/family-responsibility.jpg',
          imageAlt: 'Responsibility',
        },
        {
          title: 'Perspective',
          eyebrow: 'Useful calibration',
          description: 'It is easier to keep a production issue in proportion when your identity is rooted in more than your job.',
          accent: 'from-sky-300 via-blue-200 to-indigo-50',
          imageSrc: '/family-perspective.jpg',
          imageAlt: 'Perspective',
        },
      ]}
      onClose={onClose}
    />
  );
}
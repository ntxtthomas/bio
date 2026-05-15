import TraitPanel from './TraitPanel';

interface OutdoorsProps {
  onClose: () => void;
}

export default function Outdoors({ onClose }: OutdoorsProps) {
  return (
    <TraitPanel
      sectionLabel="Outdoors"
      heading="The part of me that still prefers weather, miles, and carrying my own gear."
      description="This is the early version of a more personal section. For now, it rounds out the story: I like disciplined work, long horizons, and environments that reward preparation without punishing curiosity."
      focusLabel="Off-screen credibility"
      focusCopy="I do some of my best thinking outdoors. The appeal is the same one that draws me to software reliability work: pay attention, respect the constraints, and keep moving with intent."
    //   directionCopy="This block is ready to become a short reel, a photo strip, or a set of expandable stories. The interaction model stays the same."
    //   nextStepCopy="Swap these placeholders for three outdoor images, or use this space for one autoplay-muted clip with still-image fallbacks on mobile."
      tags={['Steady under load', 'Prepared, not precious', 'Enjoys the hard route']}
      items={[
        {
          title: 'Backpacking',
          eyebrow: 'Long-form reset',
          description: 'Multi-day trips keep me honest about preparation, tradeoffs, and staying calm when the plan changes.',
          accent: 'from-emerald-300 via-lime-200 to-stone-100',
          imageSrc: '/outdoors-backpacking.jpg',
          imageAlt: 'Terry backpacking outdoors',
        },
        {
          title: 'Trail Running',
          eyebrow: 'Momentum builder',
          description: 'Trail miles are where I sharpen pacing, recovery, and the habit of making good decisions while tired.',
          accent: 'from-amber-200 via-orange-100 to-rose-50',
          imageSrc: '/outdoors-trail-running.jpg',
          imageAlt: 'Terry trail running outdoors',
        },
        {
          title: 'Kayaking',
          eyebrow: 'Quiet systems check',
          description: 'Time on the water slows everything down enough to notice conditions, adapt early, and enjoy the work.',
          accent: 'from-sky-300 via-cyan-200 to-blue-50',
          imageSrc: '/outdoors-kayaking.jpg',
          imageAlt: 'Terry kayaking outdoors',
        },
      ]}
      onClose={onClose}
    />
  );
}
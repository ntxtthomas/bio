export type CareerLens = 'engineer';

export interface LensOption {
  id: CareerLens;
  label: string;
  description: string;
}

export const careerLensOptions: LensOption[] = [
  {
    id: 'engineer',
    label: 'Senior Software Engineer',
    description: '2017-now: systems, reliability, & SaaS delivery',
  },
];

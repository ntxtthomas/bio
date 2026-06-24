export type CareerLens = 'engineer' | 'builder';

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
  {
    id: 'builder',
    label: 'Builder | Problem Solver | Operator',
    description: '30-yr arc across operations, sales, & tech',
  },
];

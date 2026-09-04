import type { CareerLens } from '../types/career';
import { assetPath } from './assets';

export interface ResumeVariant {
  title: string;
  preferredPath: string;
  fallbackPath: string;
  downloadFileName: string;
}

export function getResumeVariant(_lens: CareerLens): ResumeVariant {
  return {
    title: 'Download Resume',
    preferredPath: assetPath('terry_thomas_software_engineer_268a.pdf'),
    fallbackPath: assetPath('resume.pdf'),
    downloadFileName: 'terry_thomas_software_engineer_268a.pdf',
  };
}

export async function resolveResumePath(variant: ResumeVariant): Promise<string> {
  try {
    const response = await fetch(variant.preferredPath, { method: 'HEAD' });
    if (response.ok) {
      return variant.preferredPath;
    }
  } catch {
    // Keep silent and use fallback below.
  }

  return variant.fallbackPath;
}

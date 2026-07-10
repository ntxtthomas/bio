import type { CareerLens } from '../types/career';

export interface ResumeVariant {
  title: string;
  preferredPath: string;
  fallbackPath: string;
  downloadFileName: string;
}

function getAssetPath(fileName: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${fileName}`;
}

export function getResumeVariant(lens: CareerLens): ResumeVariant {
  if (lens === 'builder') {
    return {
      title: 'Builder Resume',
      preferredPath: getAssetPath('terry_thomas_builder_266a.pdf'),
      fallbackPath: getAssetPath('resume.pdf'),
      downloadFileName: 'terry_thomas_builder_266a.pdf',
    };
  }

  return {
    title: 'Engineer Resume',
    preferredPath: getAssetPath('terry_thomas_software_engineer_266a.pdf'),
    fallbackPath: getAssetPath('resume.pdf'),
    downloadFileName: 'terry_thomas_software_engineer_266a.pdf',
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

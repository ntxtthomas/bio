export interface MeetTerryMediaConfig {
  videoUrl: string;
  posterUrl: string;
}

function getEnvValue(value: string | undefined): string {
  return value?.trim() ?? '';
}

export function getMeetTerryMediaConfig(): MeetTerryMediaConfig {
  return {
    videoUrl: getEnvValue(import.meta.env.VITE_MEET_TERRY_VIDEO_URL),
    posterUrl: getEnvValue(import.meta.env.VITE_MEET_TERRY_VIDEO_POSTER_URL),
  };
}
export interface MeetTerryMediaConfig {
  videoUrl: string;
  posterUrl: string;
}

const DEFAULT_MEET_TERRY_VIDEO_URL = 'https://terrythomas.com/builder.mp4';

function getEnvValue(value: string | undefined): string {
  return value?.trim() ?? '';
}

export function getMeetTerryMediaConfig(): MeetTerryMediaConfig {
  const envVideoUrl = getEnvValue(import.meta.env.VITE_MEET_TERRY_VIDEO_URL);

  return {
    videoUrl: envVideoUrl || DEFAULT_MEET_TERRY_VIDEO_URL,
    posterUrl: getEnvValue(import.meta.env.VITE_MEET_TERRY_VIDEO_POSTER_URL),
  };
}
export function assetPath(fileName: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${fileName}`;
}

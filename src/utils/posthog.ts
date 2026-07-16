import posthog from 'posthog-js';

type PosthogProperties = Record<string, string | number | boolean | null | undefined>;

export function trackPosthogEvent(eventName: string, properties: PosthogProperties = {}) {
  posthog.capture(eventName, properties);
}
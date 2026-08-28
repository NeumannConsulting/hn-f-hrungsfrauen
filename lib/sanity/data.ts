import type { Event, Person, PressArticle, SiteSettings } from '@/lib/types';
import { events as mockEvents } from '@/lib/mock-data/events';
import { people as mockPeople } from '@/lib/mock-data/people';
import { press as mockPress } from '@/lib/mock-data/press';
import { settings as mockSettings } from '@/lib/mock-data/site-settings';
import { client, sanityConfigured } from './client';
import { eventBySlugQuery, eventsQuery, peopleQuery, pressBySlugQuery, pressQuery, siteSettingsQuery } from './queries';

async function read<T>(query: string, fallback: T, params?: Record<string, string>): Promise<T> {
  if (!sanityConfigured) return fallback;
  try {
    const result = params ? await client.fetch<T>(query, params) : await client.fetch<T>(query);
    return result ?? fallback;
  } catch { return fallback; }
}

export const getSiteSettings = () => read<SiteSettings>(siteSettingsQuery, mockSettings);
export const getEvents = () => read<Event[]>(eventsQuery, mockEvents);
export const getPeople = () => read<Person[]>(peopleQuery, mockPeople);
export const getPressArticles = () => read<PressArticle[]>(pressQuery, mockPress);
export const getEventBySlug = async (slug: string) => (await read<Event | null>(eventBySlugQuery, null, { slug })) ?? mockEvents.find((event) => event.slug === slug) ?? null;
export const getPressBySlug = async (slug: string) => (await read<PressArticle | null>(pressBySlugQuery, null, { slug })) ?? mockPress.find((article) => article.slug === slug) ?? null;

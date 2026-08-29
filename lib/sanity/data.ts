import type { Event, Page, Person, PressArticle, SiteSettings } from '@/lib/types';
import { events as mockEvents } from '@/lib/mock-data/events';
import { people as mockPeople } from '@/lib/mock-data/people';
import { press as mockPress } from '@/lib/mock-data/press';
import { settings as mockSettings } from '@/lib/mock-data/site-settings';
import { client, sanityConfigured } from './client';
import { eventBySlugQuery, eventsQuery, pageBySlugQuery, peopleQuery, pressBySlugQuery, pressQuery, siteSettingsQuery } from './queries';

async function read<T>(query: string, fallback: T, params?: Record<string, string>): Promise<T> {
  if (!sanityConfigured) return fallback;
  try {
    const options = { next: { revalidate: 60 }, timeout: 5000 };
    const result = params ? await client.fetch<T>(query, params, options) : await client.fetch<T>(query, {}, options);
    return result ?? fallback;
  } catch (error) {
    console.error('[Sanity] Published-content query failed.', error);
    return fallback;
  }
}

export const getSiteSettings = () => read<SiteSettings>(siteSettingsQuery, mockSettings);
export const getEvents = () => read<Event[]>(eventsQuery, mockEvents);
export const getPeople = () => read<Person[]>(peopleQuery, mockPeople);
export const getPressArticles = () => read<PressArticle[]>(pressQuery, mockPress);
export const getPageContent = (slug: string) => read<Page | null>(pageBySlugQuery, null, { slug });
export const getEventBySlug = async (slug: string) => (await read<Event | null>(eventBySlugQuery, null, { slug })) ?? mockEvents.find((event) => event.slug === slug) ?? null;
export const getPressBySlug = async (slug: string) => (await read<PressArticle | null>(pressBySlugQuery, null, { slug })) ?? mockPress.find((article) => article.slug === slug) ?? null;

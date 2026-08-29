import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Event } from '@/lib/types';

export function EventList({ events }: { events: Event[] }) {
  if (!events.length) return <p className="text-stone-300">Neue Termine veröffentlichen wir in Kürze.</p>;
  return <div className="event-list">{events.map((event) => {
    const date = new Date(event.date);
    return <article className="event" key={event._id}>
      <div><div className="eyebrow">{event.type}</div><div className="event-date">{Number.isNaN(date.valueOf()) ? 'Termin folgt' : date.toLocaleDateString('de-DE', { day: '2-digit', month: 'short', year: 'numeric' })}</div></div>
      <div><h3 className="text-2xl font-extrabold tracking-tight">{event.title}</h3><p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{event.location}{event.location && event.excerpt ? ' · ' : ''}{event.excerpt}</p></div>
      <Link aria-label={`${event.title} ansehen`} className="btn alt" href={`/veranstaltungen/${event.slug}`}><ArrowUpRight size={19} /></Link>
    </article>;
  })}</div>;
}

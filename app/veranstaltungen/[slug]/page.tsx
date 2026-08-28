import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Button } from '@/components/ui';
import { getEventBySlug, getEvents } from '@/lib/sanity/data';
export async function generateStaticParams() { return (await getEvents()).map((event) => ({ slug: event.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const event = await getEventBySlug((await params).slug); return { title: event?.title, description: event?.excerpt }; }
export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) { const event = await getEventBySlug((await params).slug); if (!event) notFound(); return <article><section className="container grid gap-10 py-24 md:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">{event.type}</p><p className="serif mt-5 text-3xl">{new Date(event.date).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })}</p><p className="mt-2 text-[var(--muted)]">{event.location}</p></div><div><h1 className="h1">{event.title}</h1><p className="lead mt-9">{event.description}</p><div className="mt-9"><Button href={event.registrationUrl || '/kontakt'}>{event.registrationUrl ? 'Zur Anmeldung' : 'Interesse bekunden'}</Button></div></div></section></article>; }

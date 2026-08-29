import { PageHero } from '@/components/ui';
import { EventList } from '@/components/events/EventList';
import { getEvents, getPageContent } from '@/lib/sanity/data';
export const metadata = { title: 'Veranstaltungen' };
export default async function EventsPage() {
  const now = new Date().toISOString(); const [events, content] = await Promise.all([getEvents(), getPageContent('veranstaltungen')]);
  const upcoming = events.filter((event) => event.date >= now).sort((a, b) => a.date.localeCompare(b.date));
  const past = events.filter((event) => event.date < now).sort((a, b) => b.date.localeCompare(a.date));
  return <><PageHero eyebrow={content?.eyebrow || 'Veranstaltungen'} title={content?.title || 'Treffen mit Haltung.'} text={content?.intro || 'Unsere Events verbinden Einblicke, wichtige Themen und persönlichen Austausch.'} image={content?.heroImage} /><section className="container"><div className="flex flex-wrap justify-between gap-4"><h2 className="h2">Kommende Termine</h2><p className="text-sm text-[var(--muted)]">Details werden fortlaufend ergänzt.</p></div><div className="mt-10"><EventList events={upcoming} /></div>{past.length > 0 && <><h2 className="h2 mt-24">Vergangene Termine</h2><div className="mt-10"><EventList events={past} /></div></>}</section><section className="border-t border-[var(--line)] bg-white"><div className="container"><p className="eyebrow">So treffen wir uns</p><div className="mt-10 grid gap-5 md:grid-cols-4">{['Erfahrungsaustausch', 'Projektgruppen', 'Netzwerktreffen', 'Vereinstreffen'].map((item) => <div className="card" key={item}><h3 className="serif text-2xl">{item}</h3></div>)}</div></div></section></>;
}

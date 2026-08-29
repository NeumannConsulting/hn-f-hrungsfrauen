import { PageHero } from '@/components/ui';
import { PersonGrid } from '@/components/people/PersonGrid';
import { CmsImage } from '@/components/CmsImage';
import { getPageContent, getPeople } from '@/lib/sanity/data';

export const metadata = { title: 'Über uns' };

export default async function AboutPage() {
  const [board, content] = await Promise.all([getPeople(), getPageContent('ueber-uns')]);
  const timeline = content?.timeline?.length ? content.timeline : [{ year: '2016', text: 'Erste Ideen für ein regionales Führungsfrauennetzwerk.' }, { year: '2018', text: 'Öffentliche Veranstaltungen und erste Arbeitsgruppen entstehen.' }, { year: '30. Januar 2020', text: 'Vereinsgründung und Wahl des Vorstands.' }];
  return <><PageHero eyebrow={content?.eyebrow || 'Über uns'} title={content?.title || 'Führung gemeinsam gestalten.'} text={content?.intro || 'Der Verein bildet die Basis des Netzwerks und arbeitet unabhängig von Unternehmen, Parteien und Interessenverbänden.'} image={content?.heroImage} /><section className="container grid gap-12 md:grid-cols-2 md:items-center"><CmsImage image={content?.featureImage} alt="Wofür wir stehen" className="content-image" /><div><h2 className="h2">{content?.bodyTitle || 'Wofür wir stehen.'}</h2><p className="mt-7 text-lg leading-relaxed text-[var(--muted)]">{content?.bodyText || 'Wir machen Frauen in Führung sichtbar und fördern Gleichberechtigung im beruflichen und öffentlichen Leben. Der Verein kuratiert das Netzwerk mit fachlicher Expertise und einem klaren Fokus auf Vernetzung.'}</p></div></section><section className="border-y border-[var(--line)] bg-white"><div className="container"><p className="eyebrow">Vorstand</p><h2 className="h2 mt-5 mb-14">Engagiert für das Netzwerk.</h2><PersonGrid people={board} /></div></section><section className="border-t border-[var(--line)]"><div className="container grid gap-10 md:grid-cols-2 md:items-center"><CmsImage image={content?.secondaryImage} alt="Geschichte des Vereins" className="content-image" /><div><p className="eyebrow">Geschichte</p><h2 className="h2 mt-5">{content?.timelineTitle || 'Wie alles begann.'}</h2><ol className="timeline mt-10">{timeline.map((item) => <li key={`${item.year}-${item.text}`}><b>{item.year}</b><p>{item.text}</p></li>)}</ol></div></div></section></>;
}

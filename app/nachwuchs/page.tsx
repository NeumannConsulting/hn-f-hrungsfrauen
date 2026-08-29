import { Button, PageHero } from '@/components/ui';
import { getPageContent } from '@/lib/sanity/data';

export const metadata = { title: 'Nachwuchsförderung' };

export default async function Youth() {
  const content = await getPageContent('nachwuchs');
  return <><PageHero eyebrow={content?.eyebrow || 'Nachwuchsförderung'} title={content?.title || 'Führung beginnt nicht erst mit dem ersten Führungstitel.'} text={content?.intro || 'Wir unterstützen Young Professionals auf ihrem Weg in Führungspositionen – mit Kontakt, Austausch und konkreten Formaten.'} image={content?.heroImage} /><section className="container grid gap-12 py-24 md:grid-cols-[1fr_.9fr]"><div><h2 className="h2">Räume öffnen. Impulse setzen.</h2><p className="mt-7 text-lg leading-relaxed">Young Professionals können mit Führungsfrauen und untereinander ein starkes Netzwerk aufbauen. Die Angebote sind individuell und kostenlos.</p><div className="mt-9"><Button href="/kontakt">Kontakt aufnehmen</Button></div></div><div className="grid gap-px bg-[var(--line)] sm:grid-cols-2"><div className="bg-[var(--paper)] p-7"><p className="serif text-2xl">Career Speed Dating</p></div><div className="bg-[var(--paper)] p-7"><p className="serif text-2xl">Mittags-Dates</p></div><div className="bg-[var(--paper)] p-7"><p className="serif text-2xl">Veranstaltungen</p></div><div className="bg-[var(--paper)] p-7"><p className="serif text-2xl">Vernetzung</p></div></div></section></>;
}

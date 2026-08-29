import { Button, PageHero } from '@/components/ui';
import { ContactForm } from '@/components/ContactForm';
import { getPageContent } from '@/lib/sanity/data';

export const metadata = { title: 'Kontakt & Mitmachen' };

export default async function Contact() {
  const content = await getPageContent('kontakt');
  return <><PageHero eyebrow={content?.eyebrow || 'Kontakt & Mitmachen'} title={content?.title || 'Es gibt mehrere Wege, dabei zu sein.'} text={content?.intro || 'Ob Netzwerk, Verein oder eine allgemeine Anfrage: Wir freuen uns auf den Austausch.'} image={content?.heroImage} aside={<ContactForm />} /><section className="container py-24 text-center"><div className="mx-auto grid max-w-5xl gap-px bg-[var(--line)] md:grid-cols-3">{[['Netzwerk', 'Du möchtest Teil des Netzwerks werden? Sende den ausgefüllten Fragebogen und einen aktuellen CV an.', 'welcome@fuehrungsfrauen-hn.de'], ['Verein', 'Du bist bereits im Netzwerk aktiv und möchtest den Verein langfristig unterstützen?', 'vorstand@fuehrungsfrauen-hn.de'], ['Allgemeine Anfrage', 'Fragen zum Netzwerk oder Verein sowie Presseanfragen.', 'info@fuehrungsfrauen-hn.de']].map(([title, copy, email]) => <article className="flex min-h-[300px] flex-col justify-between bg-[var(--paper)] p-8" key={title}><div><p className="eyebrow">Kontakt</p><h2 className="serif mt-5 text-4xl">{title}</h2><p className="mt-5 leading-relaxed text-[var(--muted)]">{copy}</p></div><a className="font-bold text-[var(--rose)]" href={`mailto:${email}`}>{email}</a></article>)}</div><p className="mt-10 text-sm text-[var(--muted)]">Presseanfragen: <a className="font-bold text-[var(--ink)]" href="mailto:presse@fuehrungsfrauen-hn.de">presse@fuehrungsfrauen-hn.de</a></p><div className="mt-12"><Button href="/spenden" alt>Verein unterstützen</Button></div></section></>;
}

import { ExternalLink } from 'lucide-react';
import { PageHero } from '@/components/ui';
import { getPageContent, getSiteSettings } from '@/lib/sanity/data';

export const metadata = { title: 'Spenden' };

export default async function Donate() {
  const [content, settings] = await Promise.all([getPageContent('spenden'), getSiteSettings()]);
  return <><PageHero eyebrow={content?.eyebrow || 'Spenden'} title={content?.title || 'Mehr Raum für wirksames Ehrenamt.'} text={content?.intro || 'Der Verein möchte Verwaltung und Organisation professionell abdecken – damit Energie in Inhalte und Projekte fließt.'} image={content?.heroImage} /><section className="container grid gap-14 py-24 md:grid-cols-[1.15fr_.85fr]"><div><p className="eyebrow">Aktuelles Ziel</p><div className="serif mt-4 text-[clamp(70px,11vw,150px)] leading-none text-[var(--rose)]">9.999 €</div><p className="mt-6 max-w-xl text-lg leading-relaxed">werden für Einrichtung und die ersten Monate einer Geschäftsstelle gesammelt. Jeder Beitrag stärkt das gemeinsame Wirken für Frauen in Führungspositionen.</p></div><div className="bg-[var(--ink)] p-8 text-white md:p-12"><h2 className="serif text-4xl">Jetzt unterstützen</h2><p className="mt-5 text-stone-300">Die Spende erfolgt über Betterplace. Es wird keine Zahlungsabwicklung auf dieser Website angeboten.</p>{settings.donationUrl && <a className="btn mt-8 border-white bg-white text-[var(--ink)]" href={settings.donationUrl} target="_blank" rel="noreferrer">Zu Betterplace <ExternalLink size={16} /></a>}</div></section></>;
}

import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, MessageCircle, Network, TrendingUp, UsersRound } from 'lucide-react';
import type { SanityImageSource } from '@sanity/image-url';
import { Button } from '@/components/ui';
import { EventList } from '@/components/events/EventList';
import { PersonGrid } from '@/components/people/PersonGrid';
import { getEvents, getPageContent, getPeople } from '@/lib/sanity/data';
import { urlFor } from '@/lib/sanity/image';
import { CmsImage } from '@/components/CmsImage';

export default async function Home() {
  const [events, people, content] = await Promise.all([getEvents(), getPeople(), getPageContent('startseite')]);
  const heroImage = content?.heroImage && typeof content.heroImage === 'object' ? content.heroImage as SanityImageSource & { alt?: string } : null;
  return <>
    <section className="hero container grid gap-8 md:grid-cols-[1.08fr_.92fr]">
      <div className="hero-content fade">
        <p className="eyebrow mb-7">Raum Heilbronn · seit 2016</p>
        <h1 className="display">{content?.title || <><span>Frauen in<br />Führung.<br /></span><i className="hero-title-accent">Gemeinsam</i><br />sichtbar.</>}</h1>
        <p className="lead mt-9 max-w-lg">{content?.intro || 'Ein professionelles Netzwerk für Frauen, die führen – und für alle, die auf dem Weg dorthin sind.'}</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button href="/kontakt">Teil des Netzwerks werden</Button><Button href="/netzwerk" alt>Mehr über uns</Button></div>
        <div className="hero-kicker"><ArrowDown size={15} /> Entdecken</div>
      </div>
      <div className={`hero-art ${heroImage ? 'has-image' : ''}`} aria-label="Austausch, Inspiration und Perspektiven">
        {heroImage && <Image src={urlFor(heroImage).width(1400).height(1400).fit('crop').auto('format').url()} alt={heroImage.alt || ''} fill priority sizes="(min-width: 768px) 46vw, 100vw" className="object-cover" />}
      </div>
    </section>
    <section className="principles"><div className="container"><div className="principles-heading"><p className="eyebrow">Was uns verbindet</p><h2 className="h2">Wir geben Führung einen Raum – im Gespräch, im Netzwerk und in der Öffentlichkeit.</h2></div><div className="principle-grid">{[[Network, '01', 'Netzwerk', 'Wir bringen Frauen in Führung zusammen – verbindend, aufmerksam und auf Augenhöhe.'], [MessageCircle, '02', 'Austausch', 'Erfahrungen teilen, voneinander lernen und miteinander wachsen.'], [TrendingUp, '03', 'Entwicklung', 'Wir fördern Führungskompetenzen und schaffen Sichtbarkeit für weibliche Vorbilder.'], [UsersRound, '04', 'Gemeinsam', 'Wir gestalten Themen und Perspektiven für die Arbeitswelt von morgen.']].map(([Icon, n, title, text]) => { const Symbol = Icon as typeof Network; return <article className="principle" key={n as string}><div className="principle-icon"><Symbol size={22} /></div><div className="number">{n as string}</div><h3 className="mt-4 text-2xl font-extrabold tracking-tight">{title as string}</h3><p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{text as string}</p></article>; })}</div></div></section>
    <section className="feature-band"><div className="container grid gap-10 md:grid-cols-2 md:items-center"><CmsImage image={content?.featureImage} alt="Netzwerk" className="image-panel" /><div className="md:pl-12"><p className="eyebrow">Das Netzwerk</p><h2 className="h2 mt-6">Vielfältige Wege. Ein gemeinsamer Austausch.</h2><p className="mt-7 max-w-lg text-lg leading-relaxed text-[var(--muted)]">Unternehmerinnen, Führungskräfte, Gründerinnen, Wissenschaftlerinnen und Frauen auf dem Weg in Führung treffen hier aufeinander. Teil des Netzwerks zu sein, setzt keine Vereinsmitgliedschaft voraus.</p><div className="mt-8"><Button href="/netzwerk">Netzwerk kennenlernen</Button></div></div></div></section>
    <section className="events-home"><div className="container"><div className="flex flex-wrap items-end justify-between gap-7"><div><p className="eyebrow">Veranstaltungen</p><h2 className="h2 mt-5">Begegnung<br />mit Substanz.</h2></div><Link className="btn alt" href="/veranstaltungen">Alle Veranstaltungen <ArrowUpRight size={17} /></Link></div><EventList events={events} /></div></section>
    <section className="container grid gap-10 md:grid-cols-[1fr_.9fr] md:items-center"><div><p className="eyebrow">Nachwuchsförderung</p><h2 className="h2 mt-6">Führung beginnt nicht erst mit dem ersten Führungstitel.</h2><p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--muted)]">Mit Career Speed Dating, Mittags-Dates, Veranstaltungen und persönlichem Austausch öffnen wir Räume für Young Professionals.</p><div className="mt-8"><Button href="/nachwuchs">Nachwuchsförderung entdecken</Button></div></div><CmsImage image={content?.secondaryImage} alt="Nachwuchsförderung" className="feature-shape" /></section>
    <section className="border-y border-[var(--line)] bg-white"><div className="container"><div className="flex items-end justify-between gap-5"><div><p className="eyebrow">Vorstand</p><h2 className="h2 mt-5">Die Menschen<br />dahinter.</h2></div><Link className="navlink" href="/ueber-uns">Alle kennenlernen <ArrowUpRight size={16} className="inline" /></Link></div><div className="mt-14"><PersonGrid people={people.slice(0, 4)} /></div></div></section>
    <section className="bg-[var(--pink)] text-white"><div className="container grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end"><div><p className="eyebrow text-white">Spenden</p><h2 className="h2 mt-5">Eine Geschäftsstelle für unser Ehrenamt.</h2></div><div><p className="text-lg leading-relaxed">Für Aufbau und erste Monate einer Geschäftsstelle sammelt der Verein 9.999 €. Damit bleibt mehr Energie für Inhalte und Projekte.</p><div className="mt-7"><Button href="/spenden" alt>Jetzt unterstützen</Button></div></div></div></section>
  </>;
}

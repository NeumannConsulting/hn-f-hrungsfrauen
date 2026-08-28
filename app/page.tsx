import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui';
import { EventList } from '@/components/events/EventList';
import { PersonGrid } from '@/components/people/PersonGrid';
import { getEvents, getPeople } from '@/lib/sanity/data';

export default async function Home() {
  const [events, people] = await Promise.all([getEvents(), getPeople()]);
  return <>
    <section className="hero container grid gap-8 md:grid-cols-[1.15fr_.85fr]">
      <div className="hero-content fade">
        <p className="eyebrow mb-7">Raum Heilbronn · seit 2016</p>
        <h1 className="display">Frauen in<br />Führung.<br /><i className="text-[var(--rose)]">Gemeinsam</i><br />sichtbar.</h1>
        <p className="lead mt-9 max-w-lg">Ein professionelles Netzwerk für Frauen, die führen – und für alle, die auf dem Weg dorthin sind.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button href="/kontakt">Teil des Netzwerks werden</Button><Button href="/veranstaltungen" alt>Veranstaltungen entdecken</Button></div>
        <div className="mt-12 flex items-center gap-3 text-xs font-bold uppercase tracking-widest"><ArrowDown size={15} /> Entdecken</div>
      </div>
      <div className="hero-image">
        <div className="absolute left-6 top-6 max-w-[225px] bg-[var(--ink)] p-5 text-white"><span className="serif text-xl">Führung gestalten. Nicht allein.</span></div>
        <div className="stamp absolute bottom-10 left-[-20px]">Raum für<br />Austausch &<br />Perspektiven</div>
      </div>
    </section>
    <section className="border-y border-[var(--line)] bg-white"><div className="container"><div className="grid gap-8 md:grid-cols-[.7fr_1.3fr]"><p className="eyebrow">Was wir bewegen</p><h2 className="h2">Wir geben Führung einen Raum – im Gespräch, im Netzwerk und in der Öffentlichkeit.</h2></div><div className="mt-20 grid gap-px border-y border-[var(--line)] bg-[var(--line)] md:grid-cols-4">{[['01', 'Vernetzen', 'Frauen zusammenbringen, Erfahrungen teilen und neue Kontakte schaffen.'], ['02', 'Entwickeln', 'Frauen auf ihrem Weg in Führung begleiten und Weiterentwicklung ermöglichen.'], ['03', 'Sichtbar machen', 'Vorbilder zeigen und Frauen in Führungspositionen eine Stimme geben.'], ['04', 'Gestalten', 'Gemeinsam Themen aufgreifen und die Arbeitswelt aktiv mitgestalten.']].map(([n, t, x]) => <div className="bg-white p-7" key={n}><div className="number">{n}</div><h3 className="serif mt-8 text-2xl">{t}</h3><p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{x}</p></div>)}</div></div></section>
    <section className="container grid gap-10 md:grid-cols-2 md:items-center"><div className="media min-h-[450px]"><div className="absolute bottom-0 left-0 bg-white p-7"><p className="eyebrow">Offen für Perspektiven</p><p className="serif mt-2 text-2xl">Netzwerk ist Beziehung.</p></div></div><div className="md:pl-12"><p className="eyebrow">Das Netzwerk</p><h2 className="h2 mt-6">Vielfältige Wege. Ein gemeinsamer Austausch.</h2><p className="mt-7 max-w-lg text-lg leading-relaxed">Unternehmerinnen, Führungskräfte, Gründerinnen, Wissenschaftlerinnen und Frauen auf dem Weg in Führung treffen hier aufeinander. Teil des Netzwerks zu sein, setzt keine Vereinsmitgliedschaft voraus.</p><div className="mt-8"><Button href="/netzwerk">Netzwerk kennenlernen</Button></div></div></section>
    <section className="bg-[var(--ink)] text-white"><div className="container"><div className="flex flex-wrap items-end justify-between gap-7"><div><p className="eyebrow text-stone-400">Veranstaltungen</p><h2 className="h2 mt-5">Begegnung<br />mit Substanz.</h2></div><Link className="btn border-white bg-white text-[var(--ink)] hover:border-[var(--rose)]" href="/veranstaltungen">Alle Veranstaltungen <ArrowUpRight size={17} /></Link></div><div className="mt-13 border-stone-600"><EventList events={events} /></div></div></section>
    <section className="container grid gap-10 md:grid-cols-[1fr_.9fr]"><div><p className="eyebrow">Nachwuchsförderung</p><h2 className="h2 mt-6">Führung beginnt nicht erst mit dem ersten Führungstitel.</h2><p className="mt-7 max-w-xl text-lg leading-relaxed">Mit Career Speed Dating, Mittags-Dates, Veranstaltungen und persönlichem Austausch öffnen wir Räume für Young Professionals.</p><div className="mt-8"><Button href="/nachwuchs">Nachwuchsförderung entdecken</Button></div></div><div className="media min-h-[380px] md:mt-16"><div className="absolute right-0 top-0 bg-[var(--rose)] p-8 text-white"><span className="serif text-3xl">Impulse<br />weitergeben.</span></div></div></section>
    <section className="border-y border-[var(--line)]"><div className="container"><div className="flex items-end justify-between gap-5"><div><p className="eyebrow">Vorstand</p><h2 className="h2 mt-5">Die Menschen<br />dahinter.</h2></div><Link className="navlink" href="/ueber-uns">Alle kennenlernen <ArrowUpRight size={16} className="inline" /></Link></div><div className="mt-14"><PersonGrid people={people.slice(0, 4)} /></div></div></section>
    <section className="bg-[var(--rose)] text-white"><div className="container grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end"><div><p className="eyebrow">Spenden</p><h2 className="h2 mt-5">Eine Geschäftsstelle für unser Ehrenamt.</h2></div><div><p className="text-lg leading-relaxed">Für Aufbau und erste Monate einer Geschäftsstelle sammelt der Verein 9.999 €. Damit bleibt mehr Energie für Inhalte und Projekte.</p><div className="mt-7"><Button href="/spenden" alt>Jetzt unterstützen</Button></div></div></div></section>
  </>;
}

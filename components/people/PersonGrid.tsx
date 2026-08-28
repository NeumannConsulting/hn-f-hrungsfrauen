import Image from 'next/image';
import type { SanityImageSource } from '@sanity/image-url';
import type { Person } from '@/lib/types';
import { urlFor } from '@/lib/sanity/image';

function Portrait({ person }: { person: Person }) {
  if (!person.image || typeof person.image !== 'object') return <div className="person-photo flex items-end p-3 text-[10px] font-bold tracking-[.14em] text-white">PORTRÄT FOLGT</div>;
  const image = person.image as SanityImageSource;
  return <div className="person-photo relative"><Image src={urlFor(image).width(800).height(960).fit('crop').auto('format').url()} alt={person.imageAlt || `Porträt von ${person.name}`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" /></div>;
}

export function PersonGrid({ people }: { people: Person[] }) {
  return <div className="grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-3 lg:grid-cols-4">{people.map((person, index) => <article className="person" key={person._id}><Portrait person={person} /><h3 className="serif text-2xl leading-none">{person.name}</h3><p className="mt-2 text-sm font-bold text-[var(--rose)]">{person.role}</p>{person.organization && <p className="mt-2 text-sm leading-snug text-[var(--muted)]">{person.organization}</p>}{index === 0 && person.quote && <p className="serif mt-4 text-sm italic">„{person.quote}“</p>}</article>)}</div>;
}

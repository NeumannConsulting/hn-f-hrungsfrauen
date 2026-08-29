import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Network } from 'lucide-react';
import type { SanityImageSource } from '@sanity/image-url';
import { urlFor } from '@/lib/sanity/image';
import type { SiteSettings } from '@/lib/types';

export function Footer({ settings }: { settings: SiteSettings }) {
  const logo = settings.logo && typeof settings.logo === 'object' ? settings.logo as SanityImageSource & { alt?: string } : null;
  return <footer className="footer"><div className="container">
    <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]"><div>
      {logo ? <Image src={urlFor(logo).width(360).height(160).fit('max').auto('format').url()} alt={logo.alt || settings.siteName} width={180} height={80} className="footer-logo" /> : <div className="brand text-white"><span className="brand-mark"><Network size={21} /></span><span className="brand-copy">Führungsfrauen<small className="text-white">Raum Heilbronn</small></span></div>}
      <p className="mt-5 max-w-sm text-lg text-stone-300">{settings.footerText}</p>
    </div><div className="grid gap-2 text-sm"><Link href="/ueber-uns">Über uns</Link><Link href="/netzwerk">Netzwerk</Link><Link href="/veranstaltungen">Veranstaltungen</Link><Link href="/nachwuchs">Nachwuchsförderung</Link><Link href="/presse">Presse</Link></div><div className="grid content-start gap-3 text-sm"><a href={`mailto:${settings.email}`}>{settings.email}</a><Link href="/spenden">Spenden <ArrowUpRight size={14} className="inline" /></Link><div className="flex gap-4 pt-2 font-bold"><a aria-label="Instagram" href={settings.instagram}>IG</a><a aria-label="LinkedIn" href={settings.linkedin}>in</a></div></div></div>
    <div className="mt-16 flex flex-wrap justify-between gap-3 border-t border-stone-600 pt-5 text-xs text-stone-400"><span>© {new Date().getFullYear()} Führungsfrauen Raum Heilbronn e.V.</span><span className="flex gap-5"><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></span></div>
  </div></footer>;
}

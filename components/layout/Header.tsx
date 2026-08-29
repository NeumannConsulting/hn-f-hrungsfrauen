'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Network, Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { SanityImageSource } from '@sanity/image-url';
import type { SiteSettings } from '@/lib/types';
import { urlFor } from '@/lib/sanity/image';

const links = [['Über uns', '/ueber-uns'], ['Netzwerk', '/netzwerk'], ['Nachwuchs', '/nachwuchs'], ['Presse', '/presse']];

export function Header({ settings }: { settings: SiteSettings }) {
  const [open, setOpen] = useState(false);
  const logo = settings.logo && typeof settings.logo === 'object' ? settings.logo as SanityImageSource & { alt?: string } : null;
  return <header className="site-header sticky top-0 z-50 border-b border-[var(--line)]">
    <div className="container flex h-[76px] items-center justify-between">
      <Link href="/" className="brand" aria-label="Führungsfrauen Raum Heilbronn – Startseite">
        {logo ? <Image src={urlFor(logo).width(300).height(300).fit('max').auto('format').url()} alt={logo.alt || 'Führungsfrauen Raum Heilbronn'} width={44} height={44} className="brand-uploaded-logo" /> : <><span className="brand-mark"><Network size={21} strokeWidth={2.5} /></span><span className="brand-copy">Führungsfrauen<small>Raum Heilbronn</small></span></>}
      </Link>
      <nav className="desktop-nav flex items-center gap-7">
        {links.map(([name, href]) => <Link className="navlink" href={href} key={href}>{name}</Link>)}
        <Link className="navlink text-[var(--pink)]" href="/spenden">Spenden</Link>
        <Link className="btn" href="/kontakt">Mitmachen</Link>
      </nav>
      <button aria-label="Menü öffnen" className="menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="mobile-menu absolute top-[76px] w-full gap-5 border-b border-[var(--line)] bg-white p-6">
      {links.map(([name, href]) => <Link onClick={() => setOpen(false)} className="text-2xl font-bold tracking-tight" href={href} key={href}>{name}</Link>)}
      <Link href="/spenden">Spenden</Link><Link href="/kontakt">Mitmachen</Link>
    </nav>}
  </header>;
}

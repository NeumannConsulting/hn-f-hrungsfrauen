'use client';

import Link from 'next/link';
import { Network, Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [['Über uns', '/ueber-uns'], ['Netzwerk', '/netzwerk'], ['Nachwuchs', '/nachwuchs'], ['Presse', '/presse']];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header sticky top-0 z-50 border-b border-[var(--line)]">
    <div className="container flex h-[76px] items-center justify-between">
      <Link href="/" className="brand" aria-label="Führungsfrauen Raum Heilbronn – Startseite">
        <span className="brand-mark"><Network size={21} strokeWidth={2.5} /></span>
        <span className="brand-copy">Führungsfrauen<small>Raum Heilbronn</small></span>
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

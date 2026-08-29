import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { SanityImageSource } from '@sanity/image-url';
import { urlFor } from '@/lib/sanity/image';

export function Button({ href, children, alt = false }: { href: string; children: React.ReactNode; alt?: boolean }) {
  return <Link href={href} className={`btn ${alt ? 'alt' : ''}`}>{children}<ArrowUpRight size={17} /></Link>;
}

export function PageHero({ eyebrow, title, text, image, centered = false }: { eyebrow: string; title: string; text: string; image?: unknown; centered?: boolean }) {
  const source = image && typeof image === 'object' ? image as SanityImageSource & { alt?: string } : null;
  if (centered) return <section className="page-hero page-hero-centered"><div className="container"><p className="eyebrow mb-6">{eyebrow}</p><h1 className="h1">{title}</h1></div></section>;
  return <section className="page-hero"><div className={`container grid gap-8 ${source ? 'md:grid-cols-[1fr_.72fr] md:items-center' : 'md:grid-cols-[1.25fr_.75fr] md:items-end'}`}>
    <div><p className="eyebrow mb-6">{eyebrow}</p><h1 className="h1">{title}</h1></div>
    {source ? <div className="page-hero-image relative min-h-72 overflow-hidden"><Image src={urlFor(source).width(1100).height(780).fit('crop').auto('format').url()} alt={source.alt || ''} fill sizes="(min-width: 768px) 34vw, 100vw" className="object-cover" /></div> : <p className="lead max-w-xl">{text}</p>}
    {source && <p className="lead max-w-xl md:col-span-2">{text}</p>}
  </div></section>;
}

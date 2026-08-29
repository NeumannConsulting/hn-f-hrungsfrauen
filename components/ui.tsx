import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { SanityImageSource } from '@sanity/image-url';
import { urlFor } from '@/lib/sanity/image';

export function Button({ href, children, alt = false }: { href: string; children: React.ReactNode; alt?: boolean }) {
  return <Link href={href} className={`btn ${alt ? 'alt' : ''}`}>{children}<ArrowUpRight size={17} /></Link>;
}

export function PageHero({ eyebrow, title, text, image, centered = false, aside }: { eyebrow: string; title: string; text: string; image?: unknown; centered?: boolean; aside?: React.ReactNode }) {
  const source = image && typeof image === 'object' ? image as SanityImageSource & { alt?: string } : null;
  if (centered) return <section className="page-hero page-hero-centered"><div className="container"><p className="eyebrow mb-6">{eyebrow}</p><h1 className="h1">{title}</h1></div></section>;
  return <section className="page-hero"><div className="container page-hero-grid">
    <div className="page-hero-content"><p className="eyebrow mb-6">{eyebrow}</p><h1 className="h1">{title}</h1><p className="lead mt-8 max-w-xl">{text}</p></div>
    {aside ? <div className="page-hero-form">{aside}</div> : <div className={`page-hero-art ${source ? 'has-image' : ''}`}>{source && <Image src={urlFor(source).width(1400).height(1400).fit('crop').auto('format').url()} alt={source.alt || ''} fill sizes="(min-width: 768px) 46vw, 100vw" className="object-cover" />}</div>}
  </div></section>;
}

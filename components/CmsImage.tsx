import Image from 'next/image';
import type { SanityImageSource } from '@sanity/image-url';
import { urlFor } from '@/lib/sanity/image';

export function CmsImage({ image, alt, className = '', sizes = '(min-width: 768px) 45vw, 100vw' }: { image?: unknown; alt: string; className?: string; sizes?: string }) {
  const source = image && typeof image === 'object' ? image as SanityImageSource & { alt?: string } : null;
  if (!source) return <div aria-hidden="true" className={`cms-image-placeholder ${className}`} />;
  return <div className={`cms-image has-image ${className}`}><Image src={urlFor(source).width(1400).height(1000).fit('crop').auto('format').url()} alt={source.alt || alt} fill sizes={sizes} className="object-cover" /></div>;
}

import { PageHero } from '@/components/ui';
import { getPageContent } from '@/lib/sanity/data';

export const metadata = { title: 'Impressum' };

export default async function Legal() {
  const content = await getPageContent('impressum');
  return <><PageHero centered eyebrow={content?.eyebrow || 'Rechtliches'} title={content?.title || 'Impressum'} text="" /><section className="container max-w-4xl py-24 text-center"><p className="eyebrow">Hinweis zur Migration</p><p className="mt-5 text-lg leading-relaxed">{content?.bodyText || 'Für eine rechtssichere Veröffentlichung müssen die vollständigen, aktuellen Angaben aus dem bestehenden Impressum unverändert in das CMS übernommen und durch den Verein freigegeben werden. Diese Seite enthält bewusst keine erfundenen oder rechtlich interpretierten Angaben.'}</p></section></>;
}

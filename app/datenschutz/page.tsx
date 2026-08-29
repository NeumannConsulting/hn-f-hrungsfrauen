import { PageHero } from '@/components/ui';
import { getPageContent } from '@/lib/sanity/data';

export const metadata = { title: 'Datenschutz' };

export default async function Privacy() {
  const content = await getPageContent('datenschutz');
  return <><PageHero centered eyebrow={content?.eyebrow || 'Rechtliches'} title={content?.title || 'Datenschutz'} text="" /><section className="container max-w-4xl py-24 text-center"><p className="eyebrow">Hinweis zur Migration</p><p className="mt-5 text-lg leading-relaxed">{content?.bodyText || 'Die geltenden Datenschutzhinweise der bisherigen Website müssen vollständig übernommen und auf die spätere technische Konfiguration, insbesondere Hosting, Analyse- und Einbettungsdienste, geprüft werden. Deshalb werden hier keine rechtlichen Inhalte neu formuliert.'}</p></section></>;
}

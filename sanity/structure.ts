import type { StructureResolver } from 'sanity/structure';

const editablePages = [
  ['Startseite', 'page-startseite', 'startseite'],
  ['Über uns', 'page-ueber-uns', 'ueber-uns'],
  ['Netzwerk', 'page-netzwerk', 'netzwerk'],
  ['Nachwuchsförderung', 'page-nachwuchs', 'nachwuchs'],
  ['Veranstaltungen', 'page-veranstaltungen', 'veranstaltungen'],
  ['Presse', 'page-presse', 'presse'],
  ['Spenden', 'page-spenden', 'spenden'],
  ['Kontakt', 'page-kontakt', 'kontakt'],
] as const;

export const deskStructure: StructureResolver = (S) => S.list().title('Inhalte').items([
  S.listItem().title('Website-Einstellungen').child(S.document().schemaType('siteSettings').documentId('siteSettings')),
  S.divider(),
  S.listItem().title('Seiteninhalte').child(S.list().title('Seiteninhalte').items(editablePages.map(([title, id, slug]) => S.listItem().title(title).child(S.document().schemaType('page').documentId(id).initialValue({ title, slug: { _type: 'slug', current: slug } }))))),
  S.documentTypeListItem('event').title('Veranstaltungen'),
  S.documentTypeListItem('person').title('Vorstand'),
  S.documentTypeListItem('pressArticle').title('Presseartikel'),
]);

import type { StructureResolver } from 'sanity/structure';

const editablePages = [
  ['Startseite', 'page-startseite'],
  ['Über uns', 'page-ueber-uns'],
  ['Netzwerk', 'page-netzwerk'],
  ['Nachwuchsförderung', 'page-nachwuchs'],
  ['Veranstaltungen', 'page-veranstaltungen'],
  ['Presse', 'page-presse'],
  ['Spenden', 'page-spenden'],
  ['Kontakt', 'page-kontakt'],
  ['Impressum', 'page-impressum'],
  ['Datenschutz', 'page-datenschutz'],
] as const;

export const deskStructure: StructureResolver = (S) => S.list().title('Inhalte').items([
  S.listItem().title('Website-Einstellungen').child(S.document().schemaType('siteSettings').documentId('siteSettings')),
  S.divider(),
  S.listItem().title('Seiteninhalte').child(S.list().title('Seiteninhalte').items(editablePages.map(([title, id]) => S.listItem().title(title).child(S.document().schemaType('page').documentId(id))))),
  S.documentTypeListItem('event').title('Veranstaltungen'),
  S.documentTypeListItem('person').title('Vorstand'),
  S.documentTypeListItem('pressArticle').title('Presseartikel'),
]);

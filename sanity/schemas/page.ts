import { defineField, defineType } from 'sanity';

const imageField = (name: string, title: string, description: string) => defineField({
  name,
  title,
  description,
  type: 'image',
  options: { hotspot: true },
  fields: [defineField({ name: 'alt', title: 'Alternativtext', type: 'string' })],
});

export const page = defineType({
  name: 'page',
  title: 'Seiteninhalt',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Hauptüberschrift', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Seite', type: 'slug', hidden: true }),
    defineField({ name: 'eyebrow', title: 'Kleine Überschrift', type: 'string' }),
    defineField({ name: 'intro', title: 'Einleitung', type: 'text', rows: 3 }),
    imageField('heroImage', 'Titelbild', 'Bild rechts neben der Hauptüberschrift.'),
    imageField('featureImage', 'Bereichsbild', 'Erstes frei platzierbares Bild innerhalb dieser Seite.'),
    imageField('secondaryImage', 'Zweites Bereichsbild', 'Zweites frei platzierbares Bild innerhalb dieser Seite.'),
    defineField({ name: 'bodyTitle', title: 'Überschrift im Inhaltsbereich', type: 'string' }),
    defineField({ name: 'bodyText', title: 'Text im Inhaltsbereich', type: 'text', rows: 5 }),
    defineField({ name: 'timelineTitle', title: 'Überschrift der Chronik', type: 'string' }),
    defineField({
      name: 'timeline',
      title: 'Chronik',
      type: 'array',
      of: [{ type: 'object', fields: [
        defineField({ name: 'year', title: 'Jahr / Datum', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'text', title: 'Text', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
      ], preview: { select: { title: 'year', subtitle: 'text' } } }],
    }),
    defineField({ name: 'seoTitle', title: 'SEO-Titel', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO-Beschreibung', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'title', subtitle: 'slug.current', media: 'heroImage' } },
});

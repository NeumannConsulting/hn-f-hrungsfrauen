import { defineField, defineType } from 'sanity';

const imageField = (name: string, title: string) => defineField({
  name,
  title,
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
    defineField({ name: 'slug', title: 'Seite', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'eyebrow', title: 'Kleine Überschrift', type: 'string' }),
    defineField({ name: 'intro', title: 'Einleitung', type: 'text', rows: 3 }),
    imageField('heroImage', 'Titelbild'),
    imageField('featureImage', 'Bereichsbild'),
    imageField('secondaryImage', 'Zweites Bereichsbild'),
    defineField({ name: 'seoTitle', title: 'SEO-Titel', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO-Beschreibung', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'title', subtitle: 'slug.current', media: 'heroImage' } },
});

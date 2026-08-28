import { defineField, defineType } from 'sanity';

export const person = defineType({
  name: 'person',
  title: 'Vorstandsmitglied',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'role', title: 'Position', type: 'string' }),
    defineField({ name: 'organization', title: 'Organisation', type: 'string' }),
    defineField({ name: 'bio', title: 'Profil', type: 'text', rows: 5 }),
    defineField({ name: 'quote', title: 'Zitat', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Foto', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'imageAlt', title: 'Alternativtext zum Foto', type: 'string', validation: (Rule) => Rule.required().warning('Bitte einen beschreibenden Alternativtext eintragen.') }),
    defineField({ name: 'order', title: 'Reihenfolge', type: 'number', validation: (Rule) => Rule.required().integer().min(0) }),
  ],
  orderings: [{ title: 'Reihenfolge', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'role', media: 'image' } },
});

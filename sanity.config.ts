'use client';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemaTypes';
import { deskStructure } from './sanity/structure';
export default defineConfig({ name: 'default', title: 'Führungsfrauen Raum Heilbronn', projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!, basePath: '/studio', plugins: [structureTool({ structure: deskStructure })], schema: { types: schemaTypes } });

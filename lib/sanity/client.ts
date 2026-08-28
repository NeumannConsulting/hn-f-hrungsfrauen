import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const sanityConfigured = Boolean(projectId && dataset);

export const client = createClient({
  projectId: projectId || 'missing-project-id',
  dataset: dataset || 'missing-dataset',
  apiVersion: '2026-08-28',
  useCdn: true,
});

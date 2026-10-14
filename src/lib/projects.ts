import { getCollection } from 'astro:content';

/** Published projects, sorted by the CMS "order" field, then title. */
export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => data.published !== false);
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

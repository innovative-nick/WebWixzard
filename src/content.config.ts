import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    cover: z.string().optional().default(''),
    liveUrl: z.string().optional().default(''),
    published: z.boolean().optional().default(true),
    order: z.coerce.number().optional().default(99),
  }),
});

export const collections = { projects };

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    client: z.string().optional().default(''),
    industry: z.string().optional().default(''),
    summary: z.string().optional().default(''),
    cover: z.string().optional().default(''),
    liveUrl: z.string().optional().default(''),
    platform: z.string().optional().default(''),
    services: z.array(z.string()).optional().default([]),
    year: z.coerce.string().optional().default(''),
    featured: z.boolean().optional().default(false),
    published: z.boolean().optional().default(true),
    order: z.coerce.number().optional().default(99),
  }),
});

export const collections = { projects };

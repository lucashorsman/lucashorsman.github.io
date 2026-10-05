import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,MD,markdown}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.union([z.number(), z.string(), z.date()]),
    image: z.string().optional(),
    priority: z.number().default(0),
    published: z.boolean().default(true),
    labels: z.array(z.string()).default([]),
  }),
});

const essays = defineCollection({
  loader: glob({ pattern: '**/*.{md,MD,markdown}', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.union([z.number(), z.string(), z.date()]).optional(),
    published: z.boolean().default(true),
    labels: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, essays };

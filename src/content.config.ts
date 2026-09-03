import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    medium: z.string().optional(),
    dimensions: z.string().optional(),
    location: z.string().optional(),
    collaborators: z.array(z.string()).optional(),
    // Path relative to /public, e.g. "/images/works/day-one/cover.jpg"
    coverImage: z.string(),
    coverAlt: z.string(),
    gallery: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
    category: z.enum(['installation', 'photography', 'text', 'video', 'performance']),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const info = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/info' }),
  schema: z.object({
    title: z.string(),
    updated: z.date().optional(),
  }),
});

export const collections = { projects, info };

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const single = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string().optional(),
			updated: z.string().optional(),
			url: z.string().optional(),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			slug: z.string(),
			year: z.number().min(2000),
			tags: z.array(z.string()).optional(),
			importance: z.number().optional().default(0),
		}),
});

const research = defineCollection({
	loader: glob({ base: './src/content/researchs', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			slug: z.string(),
			year: z.number().min(2000),
			importance: z.number().optional().default(0),
		}),
});

export const collections = { single, projects, research };

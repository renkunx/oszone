import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    showGithub: z.boolean().optional(),
		repoName: z.string().optional(),
  }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  blogs: blogCollection,
};

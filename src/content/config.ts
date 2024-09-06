import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
	title: z.string(),
	tags: z.array(z.string()),
});

const blogCollection = defineCollection({
	type: "content",
	schema: baseSchema.extend({
		publishDate: z.date(),
	}),
});

const projectsCollection = defineCollection({
	type: "content",
	schema: baseSchema.extend({
		status: z.enum(["active", "archived", "maintenance"]),
	}),
});

export const collections = {
	blog: blogCollection,
	projects: projectsCollection,
};
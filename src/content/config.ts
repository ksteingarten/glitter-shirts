import { defineCollection, z } from 'astro:content';

const glitterCollection = defineCollection({
  type: "content",
  schema: ({image}) => z.object({
    designName: z.string(),
    image: image(),
    description: z.string(),
  })
})
const screenCollection = defineCollection({
  type: "content",
  schema: ({image}) => z.object({
    designName: z.string(),
    image: image(),
    description: z.string(),
  })
})

export const collections = {
  "glitter": glitterCollection,
  "screen": screenCollection,
}
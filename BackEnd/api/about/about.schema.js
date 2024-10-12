import { z } from "zod";

const aboutSchema = {
  create: z.object({
    title: z.string(),
    description: z.string().optional(),
    isActive: z.boolean().optional(),
  }),

  update: z.object({
    id: z.number().int(),
    title: z.string().min(1, "Title is required"), // Required field
    description: z.string().optional(), // Optional field
    isActive: z.boolean().optional(), // Optional field
  }),
  get: z.object({
    // If you have specific parameters for getting AboutUs, define them here
  }),
};

export default aboutSchema;

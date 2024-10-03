import { z } from "zod";

const aboutSchema = {
  create: z.object({
    title: z.string(),
    description: z.string().optional(), // Optional field
    isActive: z.boolean().optional(), // Optional field
    imageFile: z.instanceof(File).optional(), // Optional file upload
  }),
  update: z.object({
    id: z.number().int().positive("ID must be a positive integer"), // Required ID field
    title: z.string().min(1, "Title is required"), // Required field
    description: z.string().optional(), // Optional field
    isActive: z.boolean().optional(), // Optional field
    imageFile: z.instanceof(File).optional(), // Optional file upload
  }),
  get: z.object({
    // If you have specific parameters for getting AboutUs, define them here
  }),
};

export default aboutSchema;

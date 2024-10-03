import { z } from "zod";

const userSchema = {
  register: z.object({
    firstName: z.string(),
    middleName: z.string().optional(), // Optional field
    lastName: z.string(),
    gender: z.string(),
    email: z.string().email(),
    phone: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
    role: z.string(),
  }),
  login: z.object({
    email: z.string().email(),
    password: z.string().min(6),
  }),
};

export default userSchema;

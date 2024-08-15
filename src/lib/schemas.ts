import { z } from "zod";

export const firstNameSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
});

export const emailSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

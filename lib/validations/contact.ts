import { z } from "zod";

export const contactInquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(120),
  practiceName: z
    .string()
    .trim()
    .min(2, "Please enter your practice name")
    .max(160),
  email: z.string().trim().email("Enter a valid email address").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(40),
  service: z.string().trim().min(1, "Select a service").max(120),
  message: z
    .string()
    .trim()
    .min(10, "Please share a bit more detail")
    .max(4000),
});

export type ContactInquiry = z.infer<typeof contactInquirySchema>;

import { z } from "zod";

function isPhoneNumber(value: string) {
  const phoneRegex = /^(?:\+?1[-.●]?)?(?:\(\d{3}\)|\d{3})[-.●]?\d{3}[-.●]?\d{4}$/;
  return phoneRegex.test(value);
}
 
const PersonalInfoSchema = z.object({
  name: z.string().min(2, { message: 'Your name is short.' }).max(50),
  // phone: z.string().refine(value => isPhoneNumber(value), {message:'Invalid phone number format.' }),
  phone: z.string().min(12, { message: 'Invalid phone number format.' }).max(50),
  address: z.string().min(2, { message: 'Your name is short.' }).max(50),
});

export { PersonalInfoSchema }
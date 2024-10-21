import { z } from "zod"

export const SignupValidationSchema = z.object({
 
  firstName: z.string()
    .min(2, { message: "First name must be at least 2 characters" }),
  
  lastName: z.string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  
  email: z.string()
    .email({ message: "Invalid email address" }),
  
    password: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[\W_]/, { message: "Password must contain at least one special character" }),
  
});

  export const SigninValidationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message : "Password must be at least 8 charachters" })
  })
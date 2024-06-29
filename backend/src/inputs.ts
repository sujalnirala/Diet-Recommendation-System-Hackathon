import z from "zod";

export const signupInputs = z.object({
    email: z.string(),
    password: z.string(),
})


export const signinInputs = z.object({
    email: z.string(),
    password: z.string()
})
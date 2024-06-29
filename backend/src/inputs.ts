import z from "zod";

export const signupInputs = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string(),
})


export const signinInputs = z.object({
    email: z.string().email(),
    password: z.string()
})

export const userDetails = z.object({
    age: z.number().optional(),
    gender: z.string().optional(),
    weight: z.number().optional(),
    height: z.number().optional(),
    dietaryPreferences: z.string().optional(),
    allergies:z.string().optional(),
    healthGoals: z.string().optional(),
})

export const mealInputs = z.object({
    name: z.string()
})

export const foodInputs = z.object({
    name: z.string(),
    calories:z.number(),
    protein:z.number(),
    fat:z.number(),
    carbs:z.number(),
    vitamins:z.string(),
    minerals:z.string(),
    havePeanuts:z.boolean(),
    haveSesame:  z.boolean(),
    haveGluten: z.boolean(),
    isVeg: z.boolean(),
    isNonVeg:z.boolean(),
    forWeightLoss:z.boolean(),
    forWeightGain :z.boolean()  
})
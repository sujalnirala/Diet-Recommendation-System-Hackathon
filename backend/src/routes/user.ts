import { Router } from 'express';
import prisma from '../connection';
import jwt from 'jsonwebtoken';
import { signinInputs, signupInputs } from '../inputs';

const JWT_SECRET = "secretKey"

const router = Router();

router.post("/signup", async (req,res) => {
    const body = req.body;
    const parsedInputs = signupInputs.safeParse(body);
    
    if(!parsedInputs.success){
        return res.status(404).json({
            message: "give valid inputs"
        })
    }

    const existingUser = await prisma.user.findFirst({
        where: {
            email: parsedInputs.data.email
        }        
    });

    if (existingUser){
        return res.status(411).json({
            message: "user already exists"
        })
    };

    const user = await prisma.user.create({
        data: {
            email: parsedInputs.data.email,
            password: parsedInputs.data.password,
            role: "USER"
        }
    });

    return res.status(200).json({
        message: "user created successfully",
        token: jwt.sign(user.email, JWT_SECRET)
    });
})


router.post("/login", async (req,res) => {
    const body = req.body;
    const parsedInputs = signinInputs.safeParse(body);
    
    if(!parsedInputs.success){
        return res.status(404).json({
            message: "give valid inputs"
        })
    }

    const user = await prisma.user.findFirst({
        where: {
            email: parsedInputs.data.email,
            password: parsedInputs.data.password
        }        
    });

    if (!user){
        return res.status(411).json({
            message: "user doesn't exist or wrong password"
        })
    };

    return res.status(200).json({
        message: "login successful",
        token: jwt.sign(user.email, JWT_SECRET)
    });




})





export default router;


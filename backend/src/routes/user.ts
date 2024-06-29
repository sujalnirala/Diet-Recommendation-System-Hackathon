import { Router } from 'express';
import prisma from '../connection';
import jwt from 'jsonwebtoken';
import { foodInputs, mealInputs, signinInputs, signupInputs, userDetails } from '../inputs';
import { adminMiddleware, authMiddleware } from '../middleware';

const JWT_SECRET = "secretKey"
const ADMIN_SECRET = "adminsecret"

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
            firstName: parsedInputs.data.firstName,
            lastName: parsedInputs.data.lastName,
            email: parsedInputs.data.email,
            password: parsedInputs.data.password,
            role: "USER"
        }
    });

    return res.status(200).json({
        message: "user created successfully",
        token: jwt.sign(String(user.id), JWT_SECRET)
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
        token: jwt.sign(String(user.id), JWT_SECRET)
    });

})

router.post("/updateprofile",authMiddleware, async(req,res) => {
    //@ts-ignore
    const userId = req.userId;
    
    const body = req.body;
    const parsedInputs = userDetails.partial().safeParse(body);

    if (!parsedInputs.success){
        return res.status(411).json({
            message: "enter valid inputs"
        })
    }
    const data: any = {};

    if (parsedInputs.data.age !== undefined) data.age = parsedInputs.data.age;
    if (parsedInputs.data.gender !== undefined) data.gender = parsedInputs.data.gender;
    if (parsedInputs.data.weight !== undefined) data.weight = parsedInputs.data.weight;
    if (parsedInputs.data.height !== undefined) data.height = parsedInputs.data.height;
    if (parsedInputs.data.dietaryPreferences !== undefined) data.dietaryPreferences = parsedInputs.data.dietaryPreferences;
    if (parsedInputs.data.allergies !== undefined) data.allergies = parsedInputs.data.allergies;
    if (parsedInputs.data.healthGoals !== undefined) data.healthGoals = parsedInputs.data.healthGoals;

    
    const updateUser = await prisma.user.update({
        where: {
            id: Number(userId)
        },
        data:data
    })

    return res.status(411).json({
        message: "update successful"
    })
});

router.post('/admin/meals', async (req, res) => {
    const body = req.body;
    const parsedInputs = mealInputs.safeParse(body);

    if (!parsedInputs.success){
        return res.status(403).json({
            message: "give valid inputs"
        })
    };
    try {
      const meal = await prisma.meal.create({
        data: {
          name: parsedInputs.data.name,
        },
      });
      res.status(201).json(meal);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the meal.' });
    }
  });

router.post('/admin/foods',adminMiddleware, async (req, res) => {
    const mealId = req.params.mealId
    const body= req.body;
    const parsedInputs = foodInputs.safeParse(body);

    if (!parsedInputs.success){
        return res.status(403).json({
            message: "give valid inputs"
        })
    };
  try {
    const food = await prisma.food.create({
      data: {
        name: parsedInputs.data.name,
        calories: parsedInputs.data.calories,
        protein: parsedInputs.data.protein,
        fat: parsedInputs.data.fat,
        carbs: parsedInputs.data.calories,
        vitamins: parsedInputs.data.vitamins,
        minerals: parsedInputs.data.minerals,
        havePeanuts: parsedInputs.data.havePeanuts,
        haveSesame: parsedInputs.data.haveSesame,
        haveGluten: parsedInputs.data.haveGluten,
        isVeg: parsedInputs.data.isVeg,
        isNonVeg: parsedInputs.data.isNonVeg,
        forWeightLoss: parsedInputs.data.forWeightLoss,
        forWeightGain: parsedInputs.data.forWeightGain,
        mealId: Number(mealId)
      },
    });
    res.status(201).json(food);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the food.' });
  }
});


export default router;


"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connection_1 = __importDefault(require("../connection"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const inputs_1 = require("../inputs");
const middleware_1 = require("../middleware");
const JWT_SECRET = "secretKey";
const router = (0, express_1.Router)();
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const parsedInputs = inputs_1.signupInputs.safeParse(body);
    if (!parsedInputs.success) {
        return res.status(404).json({
            message: "give valid inputs"
        });
    }
    const existingUser = yield connection_1.default.user.findFirst({
        where: {
            email: parsedInputs.data.email
        }
    });
    if (existingUser) {
        return res.status(411).json({
            message: "user already exists"
        });
    }
    ;
    const user = yield connection_1.default.user.create({
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
        token: jsonwebtoken_1.default.sign(String(user.id), JWT_SECRET)
    });
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const parsedInputs = inputs_1.signinInputs.safeParse(body);
    if (!parsedInputs.success) {
        return res.status(404).json({
            message: "give valid inputs"
        });
    }
    const user = yield connection_1.default.user.findFirst({
        where: {
            email: parsedInputs.data.email,
            password: parsedInputs.data.password
        }
    });
    if (!user) {
        return res.status(411).json({
            message: "user doesn't exist or wrong password"
        });
    }
    ;
    return res.status(200).json({
        message: "login successful",
        token: jsonwebtoken_1.default.sign(String(user.id), JWT_SECRET)
    });
}));
router.post("/updateprofile", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId;
    console.log(userId);
    const body = req.body;
    const parsedInputs = inputs_1.userDetails.partial().safeParse(body);
    if (!parsedInputs.success) {
        return res.status(411).json({
            message: "enter valid inputs"
        });
    }
    const data = {};
    if (parsedInputs.data.age !== undefined)
        data.age = parsedInputs.data.age;
    if (parsedInputs.data.gender !== undefined)
        data.gender = parsedInputs.data.gender;
    if (parsedInputs.data.weight !== undefined)
        data.weight = parsedInputs.data.weight;
    if (parsedInputs.data.height !== undefined)
        data.height = parsedInputs.data.height;
    if (parsedInputs.data.dietaryPreferences !== undefined)
        data.dietaryPreferences = parsedInputs.data.dietaryPreferences;
    if (parsedInputs.data.allergies !== undefined)
        data.allergies = parsedInputs.data.allergies;
    if (parsedInputs.data.healthGoals !== undefined)
        data.healthGoals = parsedInputs.data.healthGoals;
    const updateUser = yield connection_1.default.user.update({
        where: {
            id: Number(userId)
        },
        data: data
    });
    return res.status(411).json({
        message: "update successful"
    });
}));
exports.default = router;

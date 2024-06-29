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
            email: parsedInputs.data.email,
            password: parsedInputs.data.password,
            role: "USER"
        }
    });
    return res.status(200).json({
        message: "user created successfully",
        token: jsonwebtoken_1.default.sign(user.email, JWT_SECRET)
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
        token: jsonwebtoken_1.default.sign(user.email, JWT_SECRET)
    });
}));
exports.default = router;

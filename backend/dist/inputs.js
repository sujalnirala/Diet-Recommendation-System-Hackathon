"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDetails = exports.signinInputs = exports.signupInputs = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInputs = zod_1.default.object({
    firstName: zod_1.default.string(),
    lastName: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string(),
});
exports.signinInputs = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string()
});
exports.userDetails = zod_1.default.object({
    age: zod_1.default.number().optional(),
    gender: zod_1.default.string().optional(),
    weight: zod_1.default.number().optional(),
    height: zod_1.default.number().optional(),
    dietaryPreferences: zod_1.default.string().optional(),
    allergies: zod_1.default.string().optional(),
    healthGoals: zod_1.default.string().optional(),
});

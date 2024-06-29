"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinInputs = exports.signupInputs = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInputs = zod_1.default.object({
    email: zod_1.default.string(),
    password: zod_1.default.string(),
});
exports.signinInputs = zod_1.default.object({
    email: zod_1.default.string(),
    password: zod_1.default.string()
});

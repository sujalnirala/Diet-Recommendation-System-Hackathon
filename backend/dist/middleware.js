"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = 'secretKey';
function authMiddleware(req, res, next) {
    // @ts-ignore
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        const userId = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        //@ts-ignore
        if (userId) {
            //@ts-ignore
            req.userId = userId;
            return next();
        }
        else {
            return res.status(404).json({
                message: "authorization header not found"
            });
        }
    }
}
exports.authMiddleware = authMiddleware;

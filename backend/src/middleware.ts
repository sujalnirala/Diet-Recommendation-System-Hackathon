import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'

const JWT_SECRET = 'secretKey'
const ADMIN_SECRET = "adminsecret"
export function authMiddleware (req:Request, res:Response, next:NextFunction) {
    // @ts-ignore
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(" ")[1];

        const userId = jwt.verify(token,JWT_SECRET);
        //@ts-ignore
        if(userId){
            //@ts-ignore
            req.userId = userId;
            return next();
        }
        else{
            return res.status(404).json({
                message: "authorization header not found"
            })
        }
    }
    
}

export function adminMiddleware (req:Request, res:Response, next:NextFunction) {
    // @ts-ignore
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(" ")[1];

        const userId = jwt.verify(token,JWT_SECRET);
        //@ts-ignore
        if(userId){
            //@ts-ignore
            req.userId = userId;
            return next();
        }
        else{
            return res.status(404).json({
                message: "authorization header not found"
            })
        }
    }
    
}
import {Request, Response } from "express";
import jwt from "jsonwebtoken";

export function verifyToken(req: Request, res: Response, next: Function) {
    const token = req.headers.authorization;
    if (!token) {
        res.status(403);
        return ;
    }
    if (typeof process.env.JWT_SECRET === "string"){
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                res.status(403).json({error: err.message});
                return;
            }
            req.body.user = user;
            next();
        });
        return;
    }
    res.status(500).json({error: "JWT secret error"});
}
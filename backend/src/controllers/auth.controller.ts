import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser } from "./user.controller";

export async function register(req: Request, res: Response) {
    try {
        const existingUser = await User.findByPk(req.body.username);
        if (existingUser) {
            res.status(400).json(`Username ${req.body.username} already exists.`)
            return;
        }
        await createUser(req, res); 
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json(err.message);
        }
    }
}

export async function login(req: Request, res: Response) {
    try {
        const user = await User.findByPk(req.body.username);
        if (!user) {
            //redirect to register
            res.status(404).json(`Username ${req.body.username} does not exist.`);
            return;
        }
        const password = user.get('password');
        if (typeof password !== 'string') {
            res.status(500).send(`Unable to properly retrieve password for ${req.body.username}`);
            return;
        }
        if (await bcrypt.compare(req.body.password, password)) {
            const payload = {
                sub: req.body.username,
                role: 'user'
            }
            if (typeof process.env.JWT_SECRET === "string") {
                res.status(201).send({
                    username: user.get('username'),
                    email: user.get('email'),
                    token: jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1hr"})
                });
                return;
            } 
            res.status(500).json({ error: "JWT secret error." });
        } else {
            res.status(400).send("Passwords do not match");
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send({error: error.message});
        } else {
            res.status(500).send({error: "User could not be logged in."});
        }
    }
}

export async function refreshToken(req: Request, res: Response) {

}

export async function logout(req: Request, res: Response) {
    // TODO
}

export function verifyToken(req: Request, res: Response) {
    const token = req.headers.authorization;
    if (!token) {
        res.status(403);
        return ;
    }
    if (typeof process.env.JWT_SECRET === "string"){
        jwt.verify(token, process.env.JWT_SECRET, (err) => {
            if (err) {
                res.status(403).json({error: err.message});
                return;
            }
        });
        res.status(200).json("Token verified");
        return;
    }
    res.status(500).json({error: "JWT secret error"});
}
import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function login(req: Request, res: Response) {
    try {
        const user = await User.findByPk(req.body.username);
        if (!user) {
            //redirect to register
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
            res.status(201).send({
                username: user.get('username'),
                email: user.get('email'),
                token: jwt.sign(payload, process.env.JWT_SECRET) // generate token
            })
        } else {
            res.status(400).send("Passwords do not match");
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send({error: error.message});
        } else {
            res.status(500).send({error: "User could not be logged in."})
        }
    }
}

export async function refreshToken(req: Request, res: Response) {
    // TODO
}

export async function logout(req: Request, res: Response) {
    // TODO
}

import express from "express";
import User from "../models/User.js";

export async function createUser(req: express.Request, res: express.Response) {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export async function getUser(req: express.Request, res: express.Response) {
    try {
        if (typeof req.params.username === "string") {
            const username: string = req.params.username;
            const user = await User.findByPk(username);
            res.status(200).json(user);
        } else {
            throw new Error("Username param type error");
        }
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

export async function deleteUser(req: express.Request, res: express.Response) {
    // TODO
}
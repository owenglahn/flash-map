import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/User";
import { Op } from 'sequelize';

export async function createUser(req: Request, res: Response) {
    try {
        const userData = {
            username: req.body.username,
            email: req.body.email, 
            password: await bcrypt.hash(req.body.password, 10)
        }
        const user = await User.create(userData);
        if (!user) {
            res.status(500).send("Error creating user.");
        }
        res.status(201).json(user);
    } catch(error) {
        if (error instanceof Error) {
            res.status(400).json({error: error.message}); 
        } else {
            res.status(400).json({error: "Unable to create user."}); 
        }
    }
}

export async function getUser(req: Request, res: Response) {
    try {
        if (typeof req.params.username === "string") {
            const username: string = req.params.username;
            const user = await User.findByPk(username);
            if (user instanceof User) {
                const userWithoutPW = {
                    username: user.get("username"), 
                    email: user.get("email")
                }
                res.status(200).json(userWithoutPW);
            } 
        } else {
            throw new Error("Username param type error");
        }
    } catch(error) {
        if (error instanceof Error) {
            res.status(404).json({error: error.message});
        } else {
            res.status(400).json({error: "Unable to get user."}); 
        }
    }
}

export async function getUsers(req: Request, res: Response) {
    try {
        const users = await User.findAll();
        const userNames = (await users).map((user) => user.get("username"));
        res.status(200).json(userNames);
    } catch(error) {
        res.status(500).json({error: `Unable to get users.\n${error}`})
    }
}

export async function searchUsers(req: Request, res: Response) {
    try {
        const key = req.params.key;
        const userNames = await User.findAll({
            attributes: ['username'],
            where: {
                username: {
                    [Op.like]: `%${key}%`
                }
            }
        })
        console.log(userNames);
        res.status(200).json(userNames);
    } catch (error) {
        res.status(500).json({error: `Unable to search users.\n${error}`})
    }
}

export async function deleteUser(req: Request, res: Response) {
    // TODO
}
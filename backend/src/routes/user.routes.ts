import express, { Router } from 'express';
import { createUser, deleteUser, getUser } from '../controllers/user.controller.js';

const userRouter: Router = express.Router();

userRouter.get("/:username", getUser);
userRouter.post("/", createUser);
userRouter.delete("/:username", deleteUser);

export default userRouter;
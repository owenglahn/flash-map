import express, { Router } from 'express';
import { createUser, deleteUser, getUser, getUsers } from '../controllers/user.controller';

const userRouter: Router = express.Router();

userRouter.get("/:username", getUser);
userRouter.get("/", getUsers);
userRouter.post("/", createUser);
userRouter.delete("/:username", deleteUser);

export default userRouter;
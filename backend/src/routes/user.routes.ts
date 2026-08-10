import express, { Router } from 'express';
import { createUser, deleteUser, getUser, getUsers, searchUsers } from '../controllers/user.controller';

const userRouter: Router = express.Router();

userRouter.get("/:username", getUser);
userRouter.get("/", getUsers);
userRouter.get("/userSearch/:key", searchUsers);
userRouter.post("/", createUser);
userRouter.delete("/:username", deleteUser);

export default userRouter;
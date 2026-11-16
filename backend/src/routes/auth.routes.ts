import express, { Router } from "express";
import { login, logout, refreshToken, register, verifyToken } from "../controllers/auth.controller";

const authRouter: Router = express.Router();

authRouter.post("/login", login);
authRouter.post("/refreshToken", refreshToken);
authRouter.post("/logout", logout);
authRouter.post("/register", register);
authRouter.post("/verifyToken", verifyToken);

export default authRouter;
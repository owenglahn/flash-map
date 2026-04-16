import express, { Router } from "express";
import { login, logout, refreshToken } from "../controllers/auth.controller";

const authRouter: Router = express.Router();

authRouter.post("/login", login);
authRouter.post("/refreshToken", refreshToken);
authRouter.post("/logout", logout);
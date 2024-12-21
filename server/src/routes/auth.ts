import { Router, Request } from "express";
import { login, signup, logout, me, refreshHanlder } from "../controllers/auth";
import { errorHandler } from "../error-handler";
import authMiddleware from "../middlewares/auth";

const authRoutes: Router = Router();

authRoutes.post("/signup", errorHandler(signup));
authRoutes.post("/login", errorHandler(login));
authRoutes.get("/refresh", errorHandler(refreshHanlder));
authRoutes.get("/logout", [authMiddleware], errorHandler(logout));
authRoutes.get("/me", [authMiddleware], errorHandler(me));

export default authRoutes;

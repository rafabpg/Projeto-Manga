import { Router } from "express";
import { AuthController } from "../controller/AuthController";
import { UserRepository } from "../repositories/UserRepository";
import { AuthService } from "../services/AuthService";

const authRoutes = Router();
const userRepository = new UserRepository()
const authService = new AuthService(userRepository)
const authController = new AuthController(authService);

authRoutes.post('/login',(request, response) => {
    return authController.login(request, response);
 })

export { authRoutes };
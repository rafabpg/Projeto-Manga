import { Router } from "express";
import { AuthController } from "../controller/AuthController";
import { UserController } from "../controller/UserController";
import { UserRepository } from "../repositories/UserRepository";
import { AuthService } from "../services/AuthService";
import { UserService } from "../services/UserService";

const authRoutes = Router();
const userRepository = new UserRepository()
const authService = new AuthService(userRepository)
const authController = new AuthController(authService);

authRoutes.post('/login',(request, response) => {
    return authController.login(request, response);
 })

export { authRoutes };
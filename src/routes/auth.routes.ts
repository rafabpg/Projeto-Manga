import { Router } from "express";
import { UserController } from "../controller/UserController";
import { UserRepository } from "../repositories/implementations/UserRepository";
import { UserService } from "../services/UserService";

const authRoutes = Router();
const authController = new ;

authRoutes.post('/login',(request, response) => {
    return .create(request, response);
 })
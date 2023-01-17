import { Router } from "express";
import { UserController } from './../controller/UserController';
import { UserService } from "./../services/UserService";
import { UserRepository } from "../repositories/UserRepository";
import { Authentication } from "../middlewares/Authentication";


const usersRoutes = Router();
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);
const auth = new Authentication();

usersRoutes.post('/',(request, response) => {
   return userController.create(request, response);
})

usersRoutes.get('/', auth.authToken, (request, response) => {
    return userController.getAll(request, response);
})

usersRoutes.get('/:id', (request , response) => {
    return userController.getSpecificUser(request, response);
})

usersRoutes.put('/:id', (request, response) => {
    return userController.updateUser(request, response);
})

usersRoutes.delete('/:id', (request, response) => {
    return userController.deleteUser(request, response);
})




export {usersRoutes};
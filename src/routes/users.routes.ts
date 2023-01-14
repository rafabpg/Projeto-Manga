import { Router } from "express";
 import { CreateUserController } from './../controller/UserController';
import { CreateUserService } from "./../services/UserService";
import { UserRepository } from "../repositories/implementations/UserRepository";


const usersRoutes = Router();
const userRepository = new UserRepository();
const userService = new CreateUserService(userRepository);
const userController = new CreateUserController(userService);


usersRoutes.post('/',(request, response) => {
   return userController.handle(request, response);
})

usersRoutes.get('/', (request, response) => {
    return userController.getAll(request, response);
})

usersRoutes.get('/:id', (request, response) => {
    return userController.getSpecificUser(request, response);
})

usersRoutes.put('/:id', (request, response) => {
    return userController.updateUser(request, response);
})

usersRoutes.delete('/:id', (request, response) => {
    return userController.deleteUser(request, response);
})




export {usersRoutes};
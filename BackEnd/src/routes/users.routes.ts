import { Router } from "express";
 import { CreateUserController } from './../controller/UserController';
import { CreateUserService } from "./../services/UserService";
// import { checkingExistEmail,checkingExistUsername } from "../middlewares/CheckingExistingInf";
// const teste = require("../middlewares/CheckingExistingInf");

const usersRoutes = Router();
const userService = new CreateUserService();
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

// usersRoutes.put('/:id', (request, response) => {
//     return userController.updateUser(request, response);
// })

usersRoutes.delete('/:id', (request, response) => {
    return userController.deleteUser(request, response);
})




export {usersRoutes};
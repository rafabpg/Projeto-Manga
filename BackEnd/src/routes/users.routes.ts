import { Router } from "express";
// import {v4 as uuidV4} from "uuid"
 import { CreateUserController } from './../controller/UserController';
import { CreateUserService } from "./../services/UserService";

const usersRoutes = Router();
const userService = new CreateUserService();
const userController = new CreateUserController(userService);


usersRoutes.post('/', (request, response) => {
   return userController.handle(request, response);
})

usersRoutes.get('/', (request, response) => {
    return userController.getAll(request, response);
})

// usersRoutes.get('/:id', (request, response) => {
//     return 
// })

// usersRoutes.put('/:id', (request, response) => {
//     return 
// })

// usersRoutes.delete('/:id', (request, response) => {
//     return 
// })




export {usersRoutes};
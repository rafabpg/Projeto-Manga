import {Request,Response} from 'express';
import { UserService } from './../services/UserService';



class UserController{
    constructor(private userService : UserService){}

    async create(request:Request,response:Response){
        const {email,name,username,lastname,password} = request.body;
        await this.userService.create({email,name,username,lastname,password});
        return response.status(201).send({message:'Usuário criado com sucesso'});
    }

    async getAll(request:Request,response:Response){
        const allUsers =  await this.userService.getAll();
        return response.status(200).json(allUsers);
    }
    
    async getSpecificUser(request:Request,response:Response){
        const {id} = request.params;
        const specificUser = await this.userService.getById(id);
        return response.status(200).json(specificUser);
    }

    async updateUser(request:Request,response:Response){
        const {id} = request.params;
        const {name,lastname,password} = request.body;
        const updateUserController = await this.userService.update({id,name,lastname,password});
        return response.status(200).json(updateUserController);
    }

    async deleteUser(request:Request,response:Response){
        const {id} = request.params;
        await this.userService.delete(id);
        return response.status(200).send({message:'usuario deletado com sucesso'});
    }

}

export {UserController}

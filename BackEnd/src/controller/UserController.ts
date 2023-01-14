import {Request,Response} from 'express';
import { CreateUserService } from './../services/UserService';



class CreateUserController{
    constructor(private userService : CreateUserService){}

    async handle(request:Request,response:Response){
        const {email,name,username,lastname,password} = request.body;
        await this.userService.execute({email,name,username,lastname,password});
        return response.status(201).send({message:'Usuário criado com sucesso'});
    }

    async getAll(request:Request,response:Response){
        const allUsers =  await this.userService.getAllService();
        return response.status(200).json(allUsers);
    }
    
    async getSpecificUser(request:Request,response:Response){
        const {id} = request.params;
        const specificUser = await this.userService.getSpecificUserService(id);
        return response.status(200).json(specificUser);
    }

    async updateUser(request:Request,response:Response){
        const {id} = request.params;
        const {name,lastname,password} = request.body;
        const updateUserController = await this.userService.updateUserService({id,name,lastname,password});
        return response.status(200).json(updateUserController);
    }

    async deleteUser(request:Request,response:Response){
        const {id} = request.params;
        await this.userService.deleteUserService(id);
        return response.status(200).send({message:'usuario deletado com sucesso'});
    }

}

export {CreateUserController}

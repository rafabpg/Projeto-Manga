import {Request,Response} from 'express';
import { CreateUserService } from './../services/UserService';



class CreateUserController{
    constructor(private userService : CreateUserService){}

    async handle(request:Request,response:Response){
        const {email,name,username,lastname,password} = request.body;
        try {
            await this.userService.execute({email,name,username,lastname,password});
            return response.status(201).send({message:'Usuário criado com sucesso'});
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }

    async getAll(request:Request,response:Response){
        try {
            const allUsers =  await this.userService.getAllService();
            return response.status(200).json(allUsers);
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }
    
    async getSpecificUser(request:Request,response:Response){
        const {id} = request.params;
        try {
            const specificUser = await this.userService.getSpecificUserService(id);
            return response.status(200).json(specificUser);
        } catch (error:any) {
            return response.status(404).json({error: error.message});
        }
    }

    async updateUser(request:Request,response:Response){
        const {id} = request.params;
        const {name,lastname,password} = request.body;
        try {
            const updateUserController = await this.userService.updateUserService({id,name,lastname,password});
            return response.status(200).json(updateUserController);
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }

    async deleteUser(request:Request,response:Response){
        const {id} = request.params;
        try {
            await this.userService.deleteUserService(id);
            return response.status(200).send({message:'usuario deletado com sucesso'});
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }

}

export {CreateUserController}

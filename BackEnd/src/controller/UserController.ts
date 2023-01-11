import {Request,Response} from 'express';
// import { prisma } from '../../database';
import { CreateUserService } from './../services/UserService';



class CreateUserController{
    constructor(private userService : CreateUserService){}

    async handle(request:Request,response:Response){
        const {email,name,username,lastname,password} = request.body;
        try {
            this.userService.execute({email,name,username,lastname,password})
            return response.status(201).send();
        } catch (error) {
            return response.status(400).send({error:'Falha no Resgistro do Usuário'});
        }
    }
    async getAll(request:Request,response:Response){
        try {
            const allUsers =  await this.userService.getAllService();
            console.log(allUsers);
            return response.status(201).json(allUsers);
            // return response.status(201).send({message:'foi'});
        } catch (error) {
            return response.status(400).send({error:'Falha no get dos Usuarios'});
        }
    }
    
    async getSpecificUser(request:Request,response:Response){
        const {id} = request.params;
        try {
            const specificUser = await this.userService.getSpecificUserService(id);
            console.log(specificUser);
            return response.status(201).json(specificUser);
        } catch (error) {
            return response.status(400).send({error:'Usuario não encontrado'});
        }
    }

    // async updateUser(request:Request,response:Response){
    //     const {id} = request.params;
    //     // const {name,lastname,password} = body.params;
    //     try {
            
    //     } catch (error) {
    //         return response.status(400).send({error:'Não foi possivel atualizar'});
    //     }

    // }
    async deleteUser(request:Request,response:Response){
        const {id} = request.params;
        try {
            await this.userService.deleteUserService(id);
            return response.status(201).send({message:'usuario deletado com sucesso'});
        } catch (error) {
            return response.status(400).send({error:'Não foi possivel deletar Usuario'});
        }
    }

}

export {CreateUserController}

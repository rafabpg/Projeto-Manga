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
    

}

export {CreateUserController}

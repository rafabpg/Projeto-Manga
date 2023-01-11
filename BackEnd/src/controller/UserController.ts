import {Request,Response} from 'express';
// import { prisma } from '../../database';
import { CreateUserService } from './../services/UserService';
import { checkingCredencialsExist } from '../middlewares/CheckingExistingInf';



class CreateUserController{
    constructor(private userService : CreateUserService){}

    async handle(request:Request,response:Response){
        const {email,name,username,lastname,password} = request.body;
        try {
            // if( (typeof email != 'string')  )throw Error();
            const checkCredencials = await checkingCredencialsExist(username,email);
            if(!checkCredencials) throw new Error();
            await this.userService.execute({email,name,username,lastname,password})
            return response.status(201).send();
        } catch (error) {
            return response.status(400).send({error:'Falha no Resgistro do Usuário'});
        }
    }
    async getAll(request:Request,response:Response){
        try {
            const allUsers =  await this.userService.getAllService();
            if(allUsers.length == 0) throw new Error();
            // console.log(allUsers);
            return response.status(200).json(allUsers);
            // return response.status(201).send({message:'foi'});
        } catch (error) {
            return response.status(400).send({error:'Falha no get dos Usuarios'});
        }
    }
    
    async getSpecificUser(request:Request,response:Response){
        const {id} = request.params;
        try {
            const specificUser = await this.userService.getSpecificUserService(id);
            if(specificUser == null ) throw new Error();
            // console.log(specificUser);
            return response.status(200).json(specificUser);
        } catch (error) {
            return response.status(400).send({error:'Usuario não encontrado'});
        }
    }

    
    // fazer o update user 

    async updateUser(request:Request,response:Response){
        const {id} = request.params;
        const {name,lastname,password} = request.body;
        try {
            const updateUserController = await this.userService.updateUserService(id,name,lastname,password);
            return response.status(200).json(updateUserController);
        } catch (error) {
            return response.status(400).send({error:'Não foi possivel atualizar'});
        }

    }

    async deleteUser(request:Request,response:Response){
        const {id} = request.params;
        try {
            await this.userService.deleteUserService(id);
            return response.status(200).send({message:'usuario deletado com sucesso'});
        } catch (error) {
            return response.status(400).send({error:'Não foi possivel deletar Usuario'});
        }
    }

}

export {CreateUserController}

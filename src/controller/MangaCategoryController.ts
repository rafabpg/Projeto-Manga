import {Request,Response} from 'express';
import { MangaCategoryService } from '../services/MangaCategoryService';

export class MangaCategoryController{
   constructor(private mangaCategoryService : MangaCategoryService){}
    async handle(request:Request,response:Response){
        const {mangaId,categoryId } = request.body;
        await this.mangaCategoryService.execute({mangaId,categoryId});
        return response.status(201).send({message:'Relação criada com sucesso'});
    }
}
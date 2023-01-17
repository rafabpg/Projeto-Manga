import { MangaWithCategoryService } from "../services/MangaWithCategoryService";
import {Request,Response} from 'express';


class MangaWithCategoryController{
    constructor(private mangaWithCategoryService:MangaWithCategoryService){}

    async handle(request:Request,response:Response){
        const {title,description,capaURL,author,categoryID} = request.body;
        await this.mangaWithCategoryService.execute({title,description,capaURL,author,categoryID});
        return response.status(201).send({message:'Relação criado com sucesso'});
    }
}
export {MangaWithCategoryController}
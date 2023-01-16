import { CategoryService } from "../services/CategoryService";
import {Request,Response} from 'express';

class CategoryController{
    constructor(private categoryService : CategoryService){}

    async handle(request:Request,response:Response){
        const name = request.body;
        try {
            await this.categoryService.execute({name});
            return response.status(201).send({message:'Categoria criado com sucesso'});
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }
    
    async getSpecificCategory(request:Request,response:Response){
        const {id} = request.params;
        try {
            const specificCategory = await this.categoryService.getSpecificCategoryService(id);
            return response.status(200).json(specificCategory);
        } catch (error:any) {
            return response.status(404).json({error: error.message});
        }
    }

    async deleteCategory(request:Request,response:Response){
        const {id} = request.params;
        try {
            await this.categoryService.deleteCategoryService(id);
            return response.status(200).send({message:'Categoria deletado com sucesso'});
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }
    
}
export {CategoryController};
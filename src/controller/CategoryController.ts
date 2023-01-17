import { CategoryService } from "../services/CategoryService";
import {Request,Response} from 'express';

class CategoryController{
    constructor(private categoryService : CategoryService){}

    async create(request:Request,response:Response){
        const {name} = request.body;
        try {
            await this.categoryService.create({name});
            return response.status(201).send({message:'Categoria criado com sucesso'});
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }
    
    async findByID(request:Request,response:Response){
        const {id} = request.params;
        try {
            const specificCategory = await this.categoryService.findByID(id);
            return response.status(200).json(specificCategory);
        } catch (error:any) {
            return response.status(404).json({error: error.message});
        }
    }

    async getAll(request:Request,response:Response){
        try {
            const getAllCat = await this.categoryService.getAll();
            return response.status(200).json(getAllCat);
        } catch (error:any) {
            return response.status(404).json({error: error.message});
        }
    }


    async delete(request:Request,response:Response){
        const {id} = request.params;
        try {
            await this.categoryService.delete(id);
            return response.status(200).send({message:'Categoria deletado com sucesso'});
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }
    
}
export {CategoryController};
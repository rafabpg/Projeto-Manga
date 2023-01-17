import { MangaService } from "../services/MangaService";
import {Request,Response} from 'express';



class MangaController{
    constructor(private mangaService : MangaService){}

    async create(request:Request,response:Response){
        const {title,description,capaURL,author,id_category} = request.body;
        try {
            await this.mangaService.create({title,description,capaURL,author,id_category});
            return response.status(201).send({message:'Manga criado com sucesso'});
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }

    async getAll(request:Request,response:Response){
        try {
            const allMangas =  await this.mangaService.getAll();
            return response.status(200).json(allMangas);
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }
    
    async findByID(request:Request,response:Response){
        const {id} = request.params;
        try {
            const specificUser = await this.mangaService.findByID(id);
            return response.status(200).json(specificUser);
        } catch (error:any) {
            return response.status(404).json({error: error.message});
        }
    }

    async findByAuthor(request:Request,response:Response){
        const {author} = request.params;
        try {
            const mangasAuthor = await this.mangaService.findByAuthor(author);
            return response.status(200).json(mangasAuthor);
        } catch (error:any) {
            return response.status(404).json({error: error.message});
        }
    }

    async updateManga(request:Request,response:Response){
        const {id} = request.params;
        const {title,description,capaURL,author} = request.body;
        try {
            const updateMangaController = await this.mangaService.updateManga({id,title,description,capaURL,author});
            return response.status(200).json(updateMangaController);
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }

    async updateMangaCategories(request:Request,response:Response){
        const {id} = request.params;
        const categories: string[] = request.body;
        try {
            const updateMangaController = await this.mangaService.updateMangaCategories(id,categories);
            return response.status(200).json(updateMangaController);
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }

    async delete(request:Request,response:Response){
        const {id} = request.params;
        try {
            await this.mangaService.delete(id);
            return response.status(200).send({message:'Manga deletado com sucesso'});
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }
    async changeMangaStatus(request:Request,response:Response){
        const {id} = request.params;
        try {
            await this.mangaService.changeMangaStatus(id);
            return response.status(200).send({message:'Manga atualizado com sucesso'});
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }
    async publishManga(request:Request,response:Response){
        const {id} = request.params;
        try {
            await this.mangaService.publishManga(id);
            return response.status(200).send({message:'Manga atualizado com sucesso'});
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }
}

export {MangaController};
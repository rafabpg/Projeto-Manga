import { MangaService } from "../services/MangaService";
import {Request,Response} from 'express';



class MangaController{
    constructor(private mangaService : MangaService){}

    async create(request:Request,response:Response){
        const {title,description,capaURL,author,categories} = request.body;
        try {
            await this.mangaService.create({title,description,capaURL,author,categories});
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
        const {categories} = request.body;
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

    async createChapter(request:Request,response:Response){
        const {id} = request.params;
        const {volume,description,images,capa_url} = request.body;
        try {
            await this.mangaService.createChapter(id,volume,description,images,capa_url);
            return response.status(201).send({message:'Capitulo criado com sucesso'});
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }

    async getAllChapters(request:Request,response:Response){
        const {id} = request.params;
        try {
            const allChapters = await this.mangaService.getAllChapters(id);
            return response.status(200).json(allChapters);
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }

    async getChapterByID(request:Request,response:Response){
        const {id} = request.params;
        try {
            const specificChapter = await this.mangaService.getChapterByID(id);
            return response.status(200).json(specificChapter);
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }

    async deleteChapter(request:Request,response:Response){
        const {id} = request.params;
        try {
            await this.mangaService.deleteChapter(id);
            return response.status(200).send({message:'Capitulo deletado com sucesso'});
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }

    async updateChapter(request:Request,response:Response){
        const {id} = request.params;
        const {volume,description,images,capa_url} = request.body;
        try {
            const chapterUpdated = await this.mangaService.updateChapter(id,volume,description,images,capa_url);
            return response.status(200).json(chapterUpdated);
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }

}

export {MangaController};
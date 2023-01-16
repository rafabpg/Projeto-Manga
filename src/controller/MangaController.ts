import { MangaService } from "../services/MangaService";
import {Request,Response} from 'express';



class MangaController{
    constructor(private mangaService : MangaService){}

    async handle(request:Request,response:Response){
        const {title,description,capaImagem,author} = request.body;
        try {
            await this.mangaService.execute({title,description,capaImagem,author});
            return response.status(201).send({message:'Manga criado com sucesso'});
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }

    async getAll(request:Request,response:Response){
        try {
            const allMangas =  await this.mangaService.getAllService();
            return response.status(200).json(allMangas);
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }
    
    async getSpecificManga(request:Request,response:Response){
        const {id} = request.params;
        try {
            const specificUser = await this.mangaService.getSpecificMangaService(id);
            return response.status(200).json(specificUser);
        } catch (error:any) {
            return response.status(404).json({error: error.message});
        }
    }

    async getMangaByAuthor(request:Request,response:Response){
        const {author} = request.params;
        try {
            const mangasAuthor = await this.mangaService.getMangaWithSameAuthor(author);
            return response.status(200).json(mangasAuthor);
        } catch (error:any) {
            return response.status(404).json({error: error.message});
        }
    }

    async updateManga(request:Request,response:Response){
        const {id} = request.params;
        const {title,description,capaImagem,author} = request.body;
        try {
            const updateMangaController = await this.mangaService.updateMangaService({id,title,description,capaImagem,author});
            return response.status(200).json(updateMangaController);
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }

    async deleteManga(request:Request,response:Response){
        const {id} = request.params;
        try {
            await this.mangaService.deleteMangaService(id);
            return response.status(200).send({message:'Manga deletado com sucesso'});
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }
    async changeMangaStatus(request:Request,response:Response){
        const {id} = request.params;
        try {
            await this.mangaService.changeMangaStatusService(id);
            return response.status(200).send({message:'Manga atualizado com sucesso'});
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }
    async publishManga(request:Request,response:Response){
        const {id} = request.params;
        try {
            await this.mangaService.publishMangaService(id);
            return response.status(200).send({message:'Manga atualizado com sucesso'});
        } catch (error:any) {
            return response.status(400).json({error: error.message});
        }
    }
}

export {MangaController};
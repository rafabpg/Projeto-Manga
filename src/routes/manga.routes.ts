import { Router } from "express";
import { MangaRepositorie } from "../repositories/MangaRepository";
import { MangaService } from "../services/MangaService";
import { MangaController } from "../controller/MangaController";


const mangaRoutes = Router();
const mangaRepository = new MangaRepositorie();
const mangaService = new MangaService(mangaRepository);
const mangaController = new MangaController(mangaService);

mangaRoutes.post('/',(request, response) => {
    return mangaController.handle(request, response);
 })
 
 mangaRoutes.get('/', (request, response) => {
     return mangaController.getAll(request, response);
 })
 
 mangaRoutes.get('/:id', (request, response) => {
     return mangaController.getSpecificManga(request, response);
 })
 
mangaRoutes.get('/:author', (request, response) => {
    return mangaController.getMangaByAuthor(request, response);
})

 mangaRoutes.put('/:id', (request, response) => {
     return mangaController.updateManga(request, response);
 })
 
mangaRoutes.patch('/:id/status', (request, response) => {
    return mangaController.changeMangaStatus(request, response);
})

mangaRoutes.patch('/:id/published', (request, response) => {
    return mangaController.publishManga(request, response);
})

 mangaRoutes.delete('/:id', (request, response) => {
     return mangaController.deleteManga(request, response);
 })



export {mangaRoutes};
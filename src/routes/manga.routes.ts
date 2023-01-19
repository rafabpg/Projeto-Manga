import { Router } from "express";
import { MangaRepositorie } from "../repositories/MangaRepository";
import { MangaService } from "../services/MangaService";
import { MangaController } from "../controller/MangaController";
import { upload } from "../config/multer";

const mangaRoutes = Router();
const mangaRepository = new MangaRepositorie();
const mangaService = new MangaService(mangaRepository);
const mangaController = new MangaController(mangaService);

mangaRoutes.post('/',upload.single('capaImage'),(request, response) => {
    return mangaController.create(request, response);
})
 
 mangaRoutes.get('/', (request, response) => {
     return mangaController.getAll(request, response);
 })
 
 mangaRoutes.get('/:id', (request, response) => {
     return mangaController.findByID(request, response);
 })
 
mangaRoutes.get('/author/:author', (request, response) => {
    return mangaController.findByAuthor(request, response);
})

 mangaRoutes.put('/:id', upload.single('capaImage'),(request, response) => {
     return mangaController.updateManga(request, response);
 })
 
mangaRoutes.patch('/:id/status', (request, response) => {
    return mangaController.changeMangaStatus(request, response);
})

mangaRoutes.patch('/:id/published', (request, response) => {
    return mangaController.publishManga(request, response);
})

mangaRoutes.patch('/:id/categories', (request, response) => {
    return mangaController.updateMangaCategories(request, response);
})

 mangaRoutes.delete('/:id', (request, response) => {
     return mangaController.delete(request, response);
 })

//CAPITULOS
//,upload.array('image')
// mangaRoutes.post('/:id/chapters',upload.single('capaImage'),upload.array('imagesChapter'),(request, response) => {
//     return mangaController.createChapter(request, response);
// })

mangaRoutes.get('/:id/chapters',(request, response) => {
    return mangaController.getAllChapters(request, response);
})

mangaRoutes.get('/chapters/:id',(request, response) => {
    return mangaController.getChapterByID(request, response);
})

mangaRoutes.delete('/chapters/:id',(request, response) => {
    return mangaController.deleteChapter(request, response);
})

mangaRoutes.put('/chapters/:id',(request, response) => {
    return mangaController.updateChapter(request, response);
})



export {mangaRoutes};
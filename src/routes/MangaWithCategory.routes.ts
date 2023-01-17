import { Router } from "express";
import { MangaWithCategoryRepository } from "../repositories/MangaWithCategoryRepository";
import { MangaWithCategoryService } from "../services/MangaWithCategoryService";
import { MangaWithCategoryController } from "../controller/MangaWithCategoryController";



const mangaWithCategoryRoutes = Router();
const mangaWithCategoryRepository = new MangaWithCategoryRepository();
const mangaWithCategoryService = new MangaWithCategoryService(mangaWithCategoryRepository);
const mangaWithCategoryController = new MangaWithCategoryController(mangaWithCategoryService);

mangaWithCategoryRoutes.post('/',(request, response) => {
    return mangaWithCategoryController.handle(request, response);
})


export {mangaWithCategoryRoutes};
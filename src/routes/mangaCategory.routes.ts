import { Router } from "express";
import { MangaCategoryRepository } from "../repositories/MangaCategoryRepository";
import { MangaCategoryService } from "../services/MangaCategoryService";
import { MangaCategoryController } from "../controller/MangaCategoryController";



const mangaCategoryRoutes = Router();
const mangaCategoryRepository = new MangaCategoryRepository();
const mangaCategoryService = new MangaCategoryService(mangaCategoryRepository);
const mangaCategoryController = new MangaCategoryController(mangaCategoryService);

mangaCategoryRoutes.post('/',(request, response) => {
    return mangaCategoryController.handle(request, response);
 })
 mangaCategoryRoutes.delete('/',(request, response) => {
    return mangaCategoryController.deleteRelation(request, response);
 })





export {mangaCategoryRoutes};
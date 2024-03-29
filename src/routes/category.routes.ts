import { Router } from "express";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { CategoryService } from "../services/CategoryService";
import { CategoryController } from "../controller/CategoryController";


const categoryRoutes = Router();
const categoryRepository = new CategoryRepository();
const categoryService = new CategoryService(categoryRepository);
const categoryController = new CategoryController(categoryService);

categoryRoutes.post('/',(request, response) => {
    return categoryController.create(request, response);
 })

 categoryRoutes.get('/', (request, response) => {
    return categoryController.getAll(request, response);
})

    categoryRoutes.get('/:id', (request, response) => {
     return categoryController.findByID(request, response);
 })
 
 categoryRoutes.delete('/:id', (request, response) => {
     return categoryController.delete(request, response);
 })



export {categoryRoutes};
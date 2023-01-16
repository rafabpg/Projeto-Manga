import { Category } from '@prisma/client';
import { CreateCategoryDTO } from '../dtos/CreateCategoryDTO';

interface ICategoryRepository{
    createCategory(createCategoryDTO:CreateCategoryDTO):Promise<void>
    findByID(id:string):Promise<Category | null>
    getAll():Promise<Category[]>
    deleteCategory(id:string):Promise<void>
    findByName(name:string):Promise<Boolean>
}
export {ICategoryRepository};
import { Category } from '@prisma/client';
import { CreateCategoryDTO } from '../dtos/CreateCategoryDTO';

interface ICategoryRepository{
    create(createCategoryDTO:CreateCategoryDTO):Promise<void>
    findByID(id:string):Promise<Category | null>
    getAll():Promise<Category[]>
    delete(id:string):Promise<void>
    findByName(name:string):Promise<Boolean>
}
export {ICategoryRepository};
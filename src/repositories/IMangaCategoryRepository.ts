import { CategoriesOnManga } from "@prisma/client";
import { CreateMangaCategoryDTO } from "../dtos/CreateMangaCategoryDTO";


interface IMangaCategoryRepository{
    createMangaCategoryRelation(createCategoryManga:CreateMangaCategoryDTO):Promise<void>
    deleteMangaCategoryRelation(deleteCategoryManga:CreateMangaCategoryDTO):Promise<void>
    // findByIDRelation(findCategoryManga:CreateMangaCategoryDTO):Promise<CategoriesOnManga | null>
}
export {IMangaCategoryRepository}
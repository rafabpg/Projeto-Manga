import { MangaWithCategoryDTO } from "../dtos/CreateMangaWithCategoryDTO";


interface IMangaWithCategoryRepository{
    createMangaWithCategory(createMangaWithCategoryDTO:MangaWithCategoryDTO):Promise<void>
}
export {IMangaWithCategoryRepository};
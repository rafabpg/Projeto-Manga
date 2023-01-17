import { MangaWithCategoryRepository } from "../repositories/MangaWithCategoryRepository";

interface createMangaWithCategoryRequest{
    title:string 
    description?:string
    capaURL: string 
    author?: string
    categoryID:string
}

class MangaWithCategoryService{
    constructor(private mangaWithCategoryRepository:MangaWithCategoryRepository){}

    async execute({title,description,capaURL,author,categoryID}:createMangaWithCategoryRequest){
        await this.mangaWithCategoryRepository.createMangaWithCategory({title,description,capaURL,author,categoryID});
    }
}
export {MangaWithCategoryService}
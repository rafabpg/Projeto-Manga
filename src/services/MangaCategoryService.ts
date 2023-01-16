import { MangaCategoryRepository } from "../repositories/MangaCategoryRepository";




interface CreateMangaCategoryRequest{
    mangaId:string
    categoryId:string
}

export class MangaCategoryService{
    constructor( private mangaCategoryRepository: MangaCategoryRepository){}

    async execute({mangaId,categoryId}:CreateMangaCategoryRequest){

          await this.mangaCategoryRepository.createMangaCategoryRelation({mangaId,categoryId});

    }
    
}
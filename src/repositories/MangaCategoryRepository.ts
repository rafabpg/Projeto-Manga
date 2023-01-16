import { CategoriesOnManga } from "@prisma/client";
import { CreateMangaCategoryDTO } from "../dtos/CreateMangaCategoryDTO";
import { IMangaCategoryRepository } from "./IMangaCategoryRepository";
import { prisma } from '../database';


class MangaCategoryRepository implements IMangaCategoryRepository{
    async createMangaCategoryRelation({mangaId,categoryId}: CreateMangaCategoryDTO): Promise<void> {
         await prisma.categoriesOnManga.create({
            data:{
                categoryId:Number( categoryId),
                mangaId:Number(mangaId),
            }
        })
    }
    async deleteMangaCategoryRelation({mangaId,categoryId}: CreateMangaCategoryDTO): Promise<void> {
        await prisma.categoriesOnManga.deleteMany({
            where:{
                mangaId:Number(mangaId),
                categoryId:Number( categoryId),
            }
        })
    }
    // async findByIDRelation({mangaId,categoryId}:CreateMangaCategoryDTO):Promise<CategoriesOnManga | null>{
    //     const mangasTitle = await prisma.manga.findFirst({
    //         where:{
    //             categoryId:Number( categoryId),
    //             mangaId:Number(mangaId),
    //         }
    //     });
    //     return mangasTitle;
    // }
    
}
export {MangaCategoryRepository};
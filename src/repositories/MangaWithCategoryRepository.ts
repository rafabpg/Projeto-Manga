import { prisma } from "../database";
import { MangaWithCategoryDTO } from "../dtos/CreateMangaWithCategoryDTO";
import { IMangaWithCategoryRepository } from "./IMangaWithCategoryRepository";

class MangaWithCategoryRepository implements IMangaWithCategoryRepository{
    async createMangaWithCategory({title,description,capaURL,author,categoryID}: MangaWithCategoryDTO): Promise<void> {
        await prisma.categoriesOnManga.create({
            data: {
                manga: {
                  create: {
                    title:title,
                    description:description,
                    capaURL:capaURL,
                    author:author,
                  },
                },
                category: {
                  connect: {
                    id:Number(categoryID)
                  },
                },
              },  
        })
    }
    
}
export {MangaWithCategoryRepository}
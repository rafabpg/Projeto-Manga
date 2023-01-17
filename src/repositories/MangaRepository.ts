import { Manga } from "@prisma/client";
import { CreateMangaDTO } from "../dtos/CreateMangaDTO";
import { IMangaRepository } from "./IMangaRepository";
import { prisma } from '../database';


class MangaRepositorie implements IMangaRepository{
    async createManga({title,description,capaURL,author,id_category}: CreateMangaDTO): Promise<void> {
        await prisma.manga.create({
            data:{
                    title: title,
                    description:description,
                    capaURL:capaURL,
                    author:author,
                    categories:{
                        create:{
                            categoryId:Number(id_category)
                        }
                    }
            },
        })
    }
    
    async getAll(): Promise<Manga[]> {
        const mangaAll = await prisma.manga.findMany();
        return mangaAll;
    }

    async findByID(id: string): Promise<Manga | null> {
        const specificManga = await prisma.manga.findFirst({
            where:{
                id: Number(id),
            },
        })
        return specificManga;
    }
    async updateManga({id,title,description,author,capaURL}: any): Promise<Manga> {
        const updateUser = await prisma.manga.update({
            where:{
                id:Number(id),
            },
            data:{
                title:title,
                description:description,
                author:author,
                capaURL:capaURL
            }
        })
        return updateUser
    }

    async deleteManga(id: string): Promise<void> {
        await prisma.manga.delete({
            where: {
                id:Number(id),
            },
        });
    }
    async findByAuthor(author: string): Promise<Manga[]> {
        const mangasAuthor = await prisma.manga.findMany({
            where:{
                author:author
            }
        });
        return mangasAuthor;
    }
    async findByTitle(title: string): Promise<Manga | null> {
        const mangasTitle = await prisma.manga.findFirst({
            where:{
                title:title
            }
        });
        return mangasTitle;
    }
    async changeStatus(id: string):Promise<void>{
        await prisma.manga.update({
            where:{
                id:Number(id),
            },
            data:{
                status:'Finished'
            }
        })
    }
    async publishManga(id: string):Promise<void>{
        await prisma.manga.update({
            where:{
                id:Number(id),
            },
            data:{
                published:true
            }
        })
    }

}
export {MangaRepositorie};
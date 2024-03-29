import { Category, Manga } from "@prisma/client";
import { CreateMangaDTO } from "../dtos/CreateMangaDTO";
import { IMangaRepository } from "./IMangaRepository";
import { prisma } from '../database';


class MangaRepositorie implements IMangaRepository{
    async createManga({title,description,capaURL,author,categories}: CreateMangaDTO): Promise<void>    {
        console.log(categories);
        await prisma.manga.create({
            data:{
                    title: title,
                    description:description,
                    capaURL:capaURL,
                    author:author,
                    categories:{
                        create:
                        categories.map((itens: { id: string; }) =>({ categoryId: Number(itens.id)})) 
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
        const updateManga = await prisma.manga.update({
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
        return updateManga
    }

    async updateMangaCategories(id:string,newCategories:[]):Promise<Manga> {
        console.log(newCategories);
        const updateMangaCat = await prisma.manga.update({
            where:{
                id:Number(id),
            },
            data:{
                categories:{
                    deleteMany:{},
                    create:
                        newCategories.map((itens: { id: string; }) =>({ categoryId: Number(itens.id)})) 
                    
                }  
                
            }
        })
        return updateMangaCat;
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
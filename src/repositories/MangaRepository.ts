import { Manga } from "@prisma/client";
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
                    capaURL:capaURL.url,
                    cloudinary_id:capaURL.public_id,
                    author:author,
                    categories:{
                        create:
                         Array.from(categories).map((itens: { id: string; }) =>({ categoryId: Number(itens.id)}))  
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
                capaURL:capaURL.url,
                cloudinary_id:capaURL.public_id,
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
                    Array.from(newCategories).map((itens: { id: string; }) =>({ categoryId: Number(itens.id)})) 
                    
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

    // CAPITULOS #############################

    async createChapter(id:string, {volume,description,images,capa_url}: any): Promise<void> {
        await prisma.manga.update({
            where:{
                id:Number(id),
            },
            data:{
                chapters:{
                    create:{
                        volume:volume,
                        description:description,
                        images:images,
                        capa_url:capa_url
                    }
                }
            }
        })
    }

    async getAllChapters(id:string): Promise<any> {
        const allChapters = await prisma.manga.findMany({
            where:{
                id:Number(id),
            },
            select:{
                chapters:{
                    select:{
                        id :true,
                        createdAt:true,
                        images:true,
                        volume:true,
                        description:true,
                        capa_url:true,
                        mangaId:true
                    }
                }
            }
        })
        return allChapters;
    }

    async getChapterByID(id:string): Promise<any | null> {
        console.log(id)
        const specificChapter = await prisma.chapter.findFirst({
            where:{
                id:Number(id),
            },
        })
        return specificChapter;
    }


    async updateChapter(id:string,{volume,description,images,capa_url}:any): Promise<any> {
        const updateChapter = await prisma.chapter.update({
            where:{
                id:Number(id),
            },
            data:{
                capa_url:capa_url,
                volume:volume,
                description:description,
                images:images,
            }
        })
        return updateChapter;
    }

    async deleteChapter(id:string): Promise<void> {
        await prisma.chapter.delete({
            where:{
                id:Number(id),
            },
        })
    }

}
export {MangaRepositorie};
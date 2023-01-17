import { Manga } from '@prisma/client';
import { CreateMangaDTO } from '../dtos/CreateMangaDTO';

interface IMangaRepository{
    createManga(createManga:CreateMangaDTO):Promise<void>;
    getAll():Promise<Manga[]>;
    findByID(id:string):Promise<Manga | null>;
    updateManga(manga:any):Promise<Manga>;
    deleteManga(id:string):Promise<void>;
    findByAuthor(author:string):Promise<Manga[]>;
    findByTitle(title:string):Promise<Manga | null>;
    changeStatus(id: string):Promise<void>;
    publishManga(id: string):Promise<void>;
}
// id:string,name:string,lastname:string,password:string
export {IMangaRepository};
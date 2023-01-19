import { uploadImage } from "../database/cloudiNary"
import { MangaRepositorie } from "../repositories/MangaRepository"

interface UpdateMangaRequest{
    id:string
    title:string 
    description?:string
    capaImage: string 
    author?: string
}

interface CreateMangaRequest{
    title:string 
    description?:string
    capaImage: string
    author?: string
    categories:[]
}

class MangaService{
    constructor( private mangaRepository: MangaRepositorie){}

    async create({title,description,capaImage,author,categories}:CreateMangaRequest){
        if(capaImage){
            const capaURL =  await uploadImage(capaImage,title);
            if(capaURL){
                let checkTitle = await this.mangaRepository.findByTitle(title);
                if(checkTitle){
                    throw Error('Titulo já em uso');
                } 
                else{
                    this.mangaRepository.createManga({title,description,capaURL,author,categories});
                }
            }
        }else{
            throw Error('Imagem não foi uploadada');
        }
    }

    async getAll(){
        const allMangas = await this.mangaRepository.getAll();
        return allMangas;
    }

    async findByID(id:string){
        const mangaSpecificService = await this.mangaRepository.findByID(id);
        if(mangaSpecificService == null) throw new Error('Manga não encontrado');
        //checar se foi falso
        return mangaSpecificService;
    }

    async updateManga({id,title,description,capaImage,author}:UpdateMangaRequest){
        let checkTitle = await this.mangaRepository.findByTitle(title);
        if(checkTitle){
            throw Error('Titulo já em uso');
        }
        let capaURL;
        if(capaImage){
            capaURL=  await uploadImage(capaImage,title);
        }
        const mangaSpecificService = await this.mangaRepository.findByID(id);
        if(mangaSpecificService == null) throw Error('Manga não encontrado');
        const updateManga = await this.mangaRepository.updateManga({id,title,description,capaURL,author});
        return updateManga;
    }

    async updateMangaCategories(id:string,newCategories:[]){
        const mangaSpecificService = await this.mangaRepository.findByID(id);
        if(mangaSpecificService == null) throw Error('Manga não encontrado');
        // const arrayCategory = newCategories.map((itens: { id: any; }) =>( Number(itens.id))) 
        const updateManga = await this.mangaRepository.updateMangaCategories(id,newCategories);
        return updateManga;
    }

    async delete(id:string){
        //check if user exist
        const mangaSpecificService = await this.mangaRepository.findByID(id);
        if(mangaSpecificService == null) throw Error('Manga não encontrado');
        this.mangaRepository.deleteManga(id);
    }

    async findByAuthor(author:string){
        const mangaWithAuthor = await this.mangaRepository.findByAuthor(author);
        return mangaWithAuthor;
    }

    async publishManga(id:string){
        const mangaSpecificService = await this.mangaRepository.findByID(id);
        if(mangaSpecificService == null) throw Error('Manga não encontrado');
        await this.mangaRepository.publishManga(id);
    }
    async changeMangaStatus(id:string){
        const mangaSpecificService = await this.mangaRepository.findByID(id);
        if(mangaSpecificService == null) throw Error('Manga não encontrado');
        await this.mangaRepository.changeStatus(id);
    }
    
    // async createChapter(id:string,volume:number,description:string,imagesChapter:string[],capa_url:string){
    //     const mangaSpecificService = await this.mangaRepository.findByID(id);
    //     if(mangaSpecificService == null) throw new Error('Manga não encontrado');
    //     await this.mangaRepository.createChapter(id,{volume,description,images,capa_url})
    // }

    async getAllChapters(id:string){
        const allChapters = await this.mangaRepository.getAllChapters(id)
        return allChapters;
    }

    async getChapterByID(id:string){
        const specificChapter = await this.mangaRepository.getChapterByID(id)
        if(specificChapter == null) throw new Error('Capitulo não encontrado');
        return specificChapter;
    }

    async deleteChapter(id:string){
        const specificChapter = await this.mangaRepository.getChapterByID(id)
        if(specificChapter == null) throw new Error('Capitulo não encontrado');
        await this.mangaRepository.deleteChapter(id);
    }

    async updateChapter(id:string,volume?:number,description?:string,images?:string[],capa_url?:string){
        const specificChapter = await this.mangaRepository.getChapterByID(id);
        if(specificChapter == null) throw new Error('Capitulo não encontrado');
        const chapterUpdated = await this.mangaRepository.updateChapter(id,{volume,description,images,capa_url});
        return chapterUpdated;
    }

}
export {MangaService};
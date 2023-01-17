import { MangaRepositorie } from "../repositories/MangaRepository"

interface UpdateMangaRequest{
    id:string
    title?:string 
    description?:string
    capaURL?: string 
    author?: string
}

interface CreateMangaRequest{
    title:string 
    description?:string
    capaURL: string 
    author?: string
    categories:any
}

class MangaService{
    constructor( private mangaRepository: MangaRepositorie){}

    async create({title,description,capaURL,author,categories}:CreateMangaRequest){
        let checkTitle = await this.mangaRepository.findByTitle(title);
        if(checkTitle){
            throw Error('Titulo já em uso');
        } 
        else{
            this.mangaRepository.createManga({title,description,capaURL,author,categories});
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

    async updateManga({id,title,description,capaURL,author}:UpdateMangaRequest){
        const mangaSpecificService = await this.mangaRepository.findByID(id);
        if(mangaSpecificService == null) throw Error('Manga não encontrado');
        const updateManga = await this.mangaRepository.updateManga({id,title,description,capaURL,author});
        return updateManga;
    }

    async updateMangaCategories(id:string,newCategories:any){
        const mangaSpecificService = await this.mangaRepository.findByID(id);
        if(mangaSpecificService == null) throw Error('Manga não encontrado');
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
    
}
export {MangaService};
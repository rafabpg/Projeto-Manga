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
}

export class MangaService{
    constructor( private mangaRepository: MangaRepositorie){}

    async execute({title,description,capaURL,author}:CreateMangaRequest){
        let checkTitle = await this.mangaRepository.findByTitle(title);
        if(checkTitle){
            throw Error('Titulo já em uso');
        } 
        else{
            this.mangaRepository.createManga({title,description,capaURL,author});
        }
    }
    //update de categoria do manga - 
    async getAllService(){
        const allMangas = await this.mangaRepository.listManga();
        return allMangas;
    }

    async getSpecificMangaService(identifier:string){
        const mangaSpecificService = await this.mangaRepository.readManga(identifier);
        if(mangaSpecificService == null) throw new Error('Manga não encontrado');
        //checar se foi falso
        return mangaSpecificService;
    }

    async updateMangaService({id,title,description,capaURL,author}:UpdateMangaRequest){
        const mangaSpecificService = await this.mangaRepository.readManga(id);
        if(mangaSpecificService == null) throw Error('Manga não encontrado');
        const updateUser = await this.mangaRepository.updateManga({id,title,description,capaURL,author});
        return updateUser;
    }

    async deleteMangaService(identifier:string){
        //check if user exist
        const mangaSpecificService = await this.mangaRepository.readManga(identifier);
        if(mangaSpecificService == null) throw Error('Manga não encontrado');
        this.mangaRepository.deleteManga(identifier);
    }

    async getMangaWithSameAuthor(author:string){
        const mangaWithAuthor = await this.mangaRepository.findByAuthor(author);
        return mangaWithAuthor;
    }

    async publishMangaService(id:string){
        const mangaSpecificService = await this.mangaRepository.readManga(id);
        if(mangaSpecificService == null) throw Error('Manga não encontrado');
        await this.mangaRepository.publishManga(id);
    }
    async changeMangaStatusService(id:string){
        const mangaSpecificService = await this.mangaRepository.readManga(id);
        if(mangaSpecificService == null) throw Error('Manga não encontrado');
        await this.mangaRepository.changeStatus(id);
    }
    
}
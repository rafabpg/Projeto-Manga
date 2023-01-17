import { CategoryRepository } from "../repositories/CategoryRepository";

interface CreateCategoryRequest{
    name: string;
}

 class CategoryService{
    constructor( private categoryRepository: CategoryRepository){}

    async create({name}:CreateCategoryRequest){
        const checkTitleAlreadyExist = await this.categoryRepository.findByName(name);
        if(checkTitleAlreadyExist) throw new Error('Essa categoria já foi criada');
        await this.categoryRepository.create({name});
    }

    async findByID(id:string){
        const specificCategory = await this.categoryRepository.findByID(id);
        return specificCategory;
    }
    async delete(id:string){
        const checkCategoryExist = await this.categoryRepository.findByID(id);
        if(checkCategoryExist== null) throw Error('Categoria não encontrado');
        await this.categoryRepository.delete(id);
    }
    async getAll(){
         const getAllCategories = await this.categoryRepository.getAll();
         return getAllCategories;
    }

}
export { CategoryService};
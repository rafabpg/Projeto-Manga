import { CategoryRepository } from "../repositories/CategoryRepository";

interface CreateCategoryRequest{
    name: string;
}

export class CategoryService{
    constructor( private categoryRepository: CategoryRepository){}

    async execute({name}:CreateCategoryRequest){
        const checkTitleAlreadyExist = await this.categoryRepository.findByName(name);
        if(checkTitleAlreadyExist) throw new Error('Essa categoria já foi criada');
        await this.categoryRepository.createCategory({name});
    }

    async getSpecificCategoryService(id:string){
        const specificCategory = await this.categoryRepository.findByID(id);
        return specificCategory;
    }
    async deleteCategoryService(id:string){
        const checkCategoryExist = await this.categoryRepository.findByID(id);
        if(checkCategoryExist== null) throw Error('Categoria não encontrado');
        await this.categoryRepository.deleteCategory(id);
    }
    async getAllCategoriesService(){
         const getAllCategories = await this.categoryRepository.getAll();
         return getAllCategories;
    }

}
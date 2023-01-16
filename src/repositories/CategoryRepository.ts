import { Category } from "@prisma/client";
import { CreateCategoryDTO } from "../dtos/CreateCategoryDTO";
import { ICategoryRepository } from "./ICategoryRepository";
import { prisma } from "../database";



class CategoryRepository implements ICategoryRepository{
    async createCategory({name}: CreateCategoryDTO): Promise<void> {
        await prisma.category.create({
            data:{
                name: name,
            }
        })
    }

    async findByID(id: string): Promise<Category | null> {
        const specificCategory = await prisma.category.findFirst({
            where:{
                id: Number(id),
            },
            include:{
                mangas: true,
            }
        })
        return specificCategory;
    }

    async deleteCategory(id: string): Promise<void> {
        await prisma.category.delete({
            where:{
                id: Number(id),
            }
        })
    }
    async findByName(name: string): Promise<Boolean> {
        const checkTitle = await prisma.category.findFirst({
            where:{
                name: name,
            },
        })
        console.log(checkTitle);    
        if (checkTitle == null)  return false;
        return true;
    }
    async getAll(): Promise<Category[]> {
        const getAllCategories = await prisma.category.findMany()
        return getAllCategories;
    }
}

export {CategoryRepository};
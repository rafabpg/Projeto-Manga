import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { IUserRepository } from './IUserRepository';
import { prisma } from '../database';
import { User } from '@prisma/client';

class UserRepository implements IUserRepository {
    async createUser({name,email,username,lastname,password}: CreateUserDTO): Promise<void> {
        await prisma.user.create({
            data:{
                name:name,
                email:email,
                username:username,
                lastname:lastname,
                password:password
            }
        })
    }

    async listUser(): Promise<User[] | null> {
        const usersAll =  await prisma.user.findMany();
        return usersAll;
    }
    async readUser(id: string): Promise<User | null> {
        const SpecificUser = await prisma.user.findFirst({
            where:{
                id:Number(id),
                AND:{
                    role:'USER'
                }
            },
        })
        return SpecificUser;
    }
    async updateUser({id,name,lastname,password}: any): Promise<User > {
        const updateUser = await prisma.user.update({
            where:{
                id:Number(id),
            },
            data:{
                name:name,
                lastname:lastname,
                password:password,
            }
        })
        return updateUser;
    }

    async deleteUser(id: string): Promise<void> {
        await prisma.user.delete({
            where: {
                id:Number(id),
            },
        });
    }
    async findByUsername(username:string):Promise<Boolean>{
        let checkUsername = await prisma.user.findFirst({
            where:{
                username:username,
            }
        });
        if(checkUsername == null) return false;
        return true;
    }
    async findByEmail(email:string):Promise<Boolean>{
        let checkEmail = await prisma.user.findFirst({
            where:{
                email:email,
            }
        });
        if(checkEmail == null) return false;
        return true;
    }
}


export {UserRepository};
import { UserDTO } from '../dtos/CreateUserDTO';
import { IUserRepository } from './IUserRepository';
import { prisma } from '../database';
import { User } from '@prisma/client';

class UserRepository implements IUserRepository {
    async create({name,email,username,lastname,password}: UserDTO): Promise<void> {
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
    async findByID(id: string): Promise<User | null> {
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
    async update({id,name,lastname,password}: any): Promise<User > {
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

    async delete(id: string): Promise<void> {
        await prisma.user.delete({
            where: {
                id:Number(id),
            },
        });
    }
    async findByUsername(username:string):Promise<User | null>{
        try{
            const user = await prisma.user.findFirst({
                where:{
                    username:username,
                }
            });
            return user;
        } catch {
            throw new Error ('User not found');
        }   
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
import { CreateUserDTO } from '../../dtos/CreateUserDTO';
import { IUserRepository } from '../IUserRepository';
import { prisma } from '../../database';
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
    async updateUser(user: any): Promise<User > {
        throw new Error('Method not implemented.');
    }

    async deleteUser(id: string): Promise<void> {
        await prisma.user.delete({
            where: {
                id:Number(id),
            },
        });
    }
}


export {UserRepository};
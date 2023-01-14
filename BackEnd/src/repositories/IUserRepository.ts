import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { User } from '@prisma/client';

interface IUserRepository{
    createUser(createUserDto:CreateUserDTO):Promise<void >;
    listUser():Promise<User[] | null>;
    readUser(id:string):Promise<User | null>;
    updateUser(user:any):Promise<User>;
    deleteUser(id:string):Promise<void>;
}
// id:string,name:string,lastname:string,password:string
export {IUserRepository};


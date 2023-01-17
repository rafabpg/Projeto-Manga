import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { User } from '@prisma/client';

interface IUserRepository{
    create(createUserDto:CreateUserDTO):Promise<void >;
    listUser():Promise<User[] | null>;
    findByID(id:string):Promise<User | null>;
    update(user:any):Promise<User>;
    delete(id:string):Promise<void>;
    findByUsername(username:string):Promise<Boolean>;
    findByEmail(email:string):Promise<Boolean>;
}
// id:string,name:string,lastname:string,password:string
export {IUserRepository};


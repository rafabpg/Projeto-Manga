import { UserDTO } from '../dtos/CreateUserDTO';
import { User } from '@prisma/client';

interface IUserRepository{
    create(createUserDto:UserDTO):Promise<void >;
    listUser():Promise<User[] | null>;
    findByID(id:string):Promise<User | null>;
    update(user:any):Promise<User>;
    delete(id:string):Promise<void>;
    findByUsername(username:string):Promise<User | null>;
    findByEmail(email:string):Promise<Boolean>;
}
// id:string,name:string,lastname:string,password:string
export {IUserRepository};


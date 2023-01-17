import { UserDTO } from '../dtos/CreateUserDTO';
import { User } from '@prisma/client';

interface IUserRepository{
    createUser(createUserDto:UserDTO):Promise<void >;
    listUser():Promise<User[] | null>;
    readUser(id:string):Promise<User | null>;
    updateUser(user:any):Promise<User>;
    deleteUser(id:string):Promise<void>;
    findByUsername(username:string):Promise<User | null>;
    findByEmail(email:string):Promise<Boolean>;
}
// id:string,name:string,lastname:string,password:string
export {IUserRepository};


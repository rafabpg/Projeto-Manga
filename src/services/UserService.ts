import { UserRepository } from '../repositories/UserRepository';

interface CreateUserRequest{
    name:string,
    email:string,
    username:string,
    lastname?:string,
    password:string
}
interface UpdateUserRequest{
    id:string,
    name?:string,
    lastname?:string,
    password?:string
}


class UserService{
    constructor( private userRepository: UserRepository){}

    async create({name,email,username,lastname,password}:CreateUserRequest){
        let checkUsername = await this.userRepository.findByUsername(username);
        if(checkUsername){
            throw Error('Username ja em uso');
        } 
        else{
            let checkEmail = await this.userRepository.findByUsername(username);
            if(checkEmail){
                throw Error('Email ja em uso');
            } 
            this.userRepository.create({name,email,username,lastname,password})
        }
    }

    async getAll(){
        const allUser = await this.userRepository.listUser();
        return allUser;
    }

    async findByID(id:string){
        const userSpecificService = await this.userRepository.findByID(id);
        if(userSpecificService == null) throw Error('Usuario não encontrado');
        //checar se foi falso
        return userSpecificService;
    }

    async update({id,name,lastname,password}:UpdateUserRequest){
        const userSpecificService = await this.userRepository.findByID(id);
        if(userSpecificService == null) throw Error('Usuario não encontrado');
        const updateUser = await this.userRepository.update({id,name,lastname,password});
        return updateUser;
    }

    async delete(id:string){
        //check if user exist
        const userSpecificService = await this.userRepository.findByID(id);
        if(userSpecificService == null) throw Error('Usuario não encontrado');
        this.userRepository.delete(id);
    }
}
export  { UserService}



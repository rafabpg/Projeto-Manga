import { UserRepository } from '../repositories/implementations/UserRepository';

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


export class CreateUserService{
    constructor( private userRepository: UserRepository){}

    async execute({name,email,username,lastname,password}:CreateUserRequest){
        let checkUsername = await this.userRepository.findByUsername(username);
        if(checkUsername){
            throw Error('Username ja em uso');
        } 
        else{
            let checkEmail = await this.userRepository.findByUsername(username);
            if(checkEmail){
                throw Error('Email ja em uso');
            } 
            this.userRepository.createUser({name,email,username,lastname,password})
        }
    }

    async getAllService(){
        const allUser = await this.userRepository.listUser();
        return allUser;
    }

    async getSpecificUserService(identifier:string){
        const userSpecificService = await this.userRepository.readUser(identifier);
        if(userSpecificService == null) throw Error('Usuario não encontrado');
        //checar se foi falso
        return userSpecificService;
    }

    async updateUserService({id,name,lastname,password}:UpdateUserRequest){
        const userSpecificService = await this.userRepository.readUser(id);
        if(userSpecificService == null) throw Error('Usuario não encontrado');
        const updateUser = await this.userRepository.updateUser({id,name,lastname,password});
        return updateUser;
    }

    async deleteUserService(identifier:string){
        //check if user exist
        const userSpecificService = await this.userRepository.readUser(identifier);
        if(userSpecificService == null) throw Error('Usuario não encontrado');
        this.userRepository.deleteUser(identifier);
    }
}




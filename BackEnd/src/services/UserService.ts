// import { prisma } from '../../database';
import { prisma } from '../database';

interface CreateUserRequest{
    name:string,
    email:string,
    username:string,
    lastname?:string,
    password:string
}

export class CreateUserService{
    async execute({name,email,username,lastname,password}:CreateUserRequest){
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
    async getAllService(){
       const usersAll =  await prisma.user.findMany();
       return usersAll;
    }
}


// class CreateUserService{

//     // constructor( private specificationRepository: ISpecificationRepositories){}

//     async execute({name,email,username,lastname,password}:CreateUserDTO){
//         // const SpecificationAlreadyExist = this.specificationRepository.findByName(name);
//         // if(SpecificationAlreadyExist) throw new Error("Category already exist");
//         const user = await prisma.user.create({
//             data:{//data = inserir informação
//                 name:name,
//                 email:email,
//                 username:username,
//                 lastname:lastname,
//                 password:password
//             }
//         })
//         return user;
//         // this.specificationRepository.create({
//         //     name,
//         //     email,
//         //     username,
//         //     lastname,
//         //     password
            
//         // })
//     }
// }
// export { CreateUserService};
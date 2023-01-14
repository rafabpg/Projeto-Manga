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
    async getSpecificUserService(identifier:string){
        const userSpecificSevice = await prisma.user.findFirst({
            where:{
                id:Number(identifier),
                AND:{
                    role:'USER'
                }
            },
        })
        return userSpecificSevice;
    }
    async updateUserService(identifier:string,name?:string,lastname?:string,password?:string){
        const updateUser = await prisma.user.update({
            where:{
                id:Number(identifier),
            },
            data:{
                name:name,
                lastname:lastname,
                password:password,
            }
        })
        return updateUser;
    }
    async deleteUserService(identifier:string){
        await prisma.user.delete({
            where: {
                id:Number(identifier),
            },
        });
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
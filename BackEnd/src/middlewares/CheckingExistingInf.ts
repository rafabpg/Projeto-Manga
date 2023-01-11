import { prisma } from '../database';
// import e, { Request,Response } from "express";
// import { NextFunction } from "express";


export async function checkingCredencialsExist(username:string,email:string): Promise<boolean> {
    let checkUsername = await prisma.user.findFirst({
                where:{
                    username:username,
                    OR:{
                        email:email,
                    }
                }
    });
    if(checkUsername == null) return false;
    return true;
}

// module.exports = function addNewHeader(request:Request, response:Response, next:NextFunction) {
//     console.log('teste');
//     const { username,email} = request.body;
//     let checkUsername = prisma.user.findFirst({
//         where:{
//             username:username,
//             OR:{
//                 email:email,
//             }
//         }
//     });  
//     if(checkUsername == null) return response.status(400).json({erro:"Esse username já esta sendo usado"});
//     next();
//     // next();
//   };


// export   function checkingExistUsername(request:Request, response:Response, next:NextFunction){
//     // await console.log('teste');
//     const { username } = request.body;
//     let checkUsername =  prisma.user.findUnique({
//         where:{
//             username:username,
//         }
//     });  
//     if(checkUsername == null) return response.status(400).json({erro:"Esse username já esta sendo usado"});
//     next();
//     // await prisma.user.create({
    
//     // })
// }
// // export{checkingExistUsername}

// export   function checkingExistEmail(request:Request, response:Response, next:NextFunction){
//     // await console.log('teste');
//     const {email} = request.body;
//     let checkEmail =  prisma.user.findUnique({
//         where:{
//             email:email,
//         }
//     });  
//     if(checkEmail == null) return response.status(400).json({erro:"Esse email já esta sendo usado"});
//     next();
// }
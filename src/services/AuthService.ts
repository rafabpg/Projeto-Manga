import { UserRepository } from "../repositories/implementations/UserRepository";
import jwt from 'jsonwebtoken';

interface LoginRequest{
    username: string;
    password: string;
}

class AuthService {
    constructor(private userRepository: UserRepository){}
    async login({username, password}: LoginRequest){
        const user =  this.userRepository.findByUsername(username)
        const token = process.env.ACCESS_TOKEN_SECRET;
        const accessToken = jwt.sign(user, token as string)
    }
}

export { AuthService };
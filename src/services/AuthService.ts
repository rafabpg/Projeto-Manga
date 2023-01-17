import { UserRepository } from "../repositories/UserRepository";
import jwt from 'jsonwebtoken';

interface LoginRequest{
    username: string;
    password: string;
}

class AuthService {
    constructor(private userRepository: UserRepository){}
    async login({username, password}: LoginRequest){
        const user = await this.userRepository.findByUsername(username)
        const userF = { username: user?.username}
        const token = process.env.ACCESS_TOKEN_SECRET;
        // console.log(token)
        const accessToken = jwt.sign(userF, token as string)
        console.log(accessToken)
        return { accessToken: accessToken };
    }
}

export { AuthService };
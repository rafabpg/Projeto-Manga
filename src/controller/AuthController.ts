import {Request,Response} from 'express';
import { AuthService } from '../services/AuthService';


class AuthController {
    constructor(private authService : AuthService){}
    async login(request: Request, response: Response){
        const {username, password} = request.body;
        try{
            const accessToken = await this.authService.login({username, password});
            return response.status(200).json(accessToken)
        } catch(err) {
            return response.status(401).json({err});
        }
    }
}

export { AuthController };
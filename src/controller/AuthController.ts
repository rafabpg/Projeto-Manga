import {Request,Response} from 'express';
import { AuthService } from '../services/AuthService';


class AuthController {
    constructor(private authService : AuthService){}
    async login(request: Request, response: Response){
        const {username, password} = request.body;
        try{
            return this.authService.login
        } catch(err) {
            return response.status(401).json({err});
        }
    }
}
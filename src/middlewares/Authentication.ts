import {Request,Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

class Authentication{
    async authToken(request: Request, response: Response, next: NextFunction ) {
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if(token == null) return response.sendStatus(401);

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err, user) => {
            if (err) return response.sendStatus(403);
            next();
        });   
    }
}

export { Authentication };
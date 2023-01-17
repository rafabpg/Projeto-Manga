import express from 'express';
import { router } from './routes';
import dotenv from 'dotenv';
dotenv.config()

const app = express();

app.use(express.json());

app.use('/api',router)

app.listen(3333, () => {
    console.log('server on viado');
});
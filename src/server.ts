import express from 'express';
import { router } from './routes';
import dotenv from 'dotenv';
dotenv.config()
const PORT = 3333;
const app = express();

app.use(express.json());

app.use('/api',router)

app.listen(PORT, () => {
    console.log(`server on viado, na porta ${PORT}`);
});
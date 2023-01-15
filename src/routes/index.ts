import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { mangaRoutes } from "./manga.routes";

const router = Router();

router.use("/users",usersRoutes);
router.use("/mangas",mangaRoutes);


export {router}

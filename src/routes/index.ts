import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { usersRoutes } from "./users.routes";
import { mangaRoutes } from "./manga.routes";
import { categoryRoutes } from "./category.routes";

const router = Router();

router.use("/users",usersRoutes);
router.use("/auth", authRoutes);
router.use("/mangas",mangaRoutes);
router.use("/categories",categoryRoutes);



export {router}

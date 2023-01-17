import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { mangaRoutes } from "./manga.routes";
import { categoryRoutes } from "./category.routes";
import { mangaCategoryRoutes } from "./mangaCategory.routes";
import { mangaWithCategoryRoutes } from "./MangaWithCategory.routes";

const router = Router();

router.use("/users",usersRoutes);
router.use("/mangas",mangaRoutes);
router.use("/categories",categoryRoutes);
router.use("/categoriesOnMangas",mangaCategoryRoutes);
router.use("/mangaWithCategory",mangaWithCategoryRoutes);



export {router}

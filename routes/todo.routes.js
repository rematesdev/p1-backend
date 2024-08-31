import { Router } from "express";
import { todoController } 
from "../controllers/todo.controller.js";

const router = Router();

router.get("/",todoController.getAll);
router.get("/:id",todoController.getById);
router.post("/create",todoController.createTitle);

export default router;
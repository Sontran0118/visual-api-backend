import { Router } from "express";
import { GetUsers } from "../controllers/GetUsers";

const router = Router();

router.get("/users", GetUsers);

export default router;

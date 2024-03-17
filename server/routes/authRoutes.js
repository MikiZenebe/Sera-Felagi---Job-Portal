import express from "express";
import { login, register, updateUser } from "../controllers/Auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/update/:id", updateUser);

export default router;

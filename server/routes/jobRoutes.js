import express from "express";
import {
  addJob,
  applyJob,
  getAllJob,
  getSingleJob,
  requiredSkill,
} from "../controllers/jobController.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.post("/addJob", verifyToken, addJob);
router.post("/reqSkill", verifyToken, requiredSkill);
router.post("/applyJob", verifyToken, applyJob);

router.get("/getAllJob", verifyToken, getAllJob);
router.get("/getJob/:id", verifyToken, getSingleJob);

export default router;

import express from "express";
import { addJob, getAllJob } from "../controllers/jobController.js";

const router = express.Router();

router.post("/addJob", addJob);
router.get("/getAllJob", getAllJob);

export default router;

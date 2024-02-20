import express from "express";
import {
  addJob,
  getAllJob,
  getSingleJob,
} from "../controllers/jobController.js";

const router = express.Router();

router.post("/addJob", addJob);
router.get("/getAllJob", getAllJob);
router.get("/getJob/:id", getSingleJob);

export default router;

import express from "express";
import {
  addJob,
  applyJob,
  getAllJob,
  getSingleJob,
  jobDetail,
  myJobPost,
  requiredSkill,
  userByJobId,
  jobAppliById,
  getJobDetail,
  getRequiredSkill,
  applicationById,
  appRequest,
} from "../controllers/jobController.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.post("/addJob", addJob);
router.post("/reqSkill", requiredSkill);
router.post("/applyJob", verifyToken, applyJob);
router.post("/addInfo", verifyToken, jobDetail);
router.post("/myJobPost", verifyToken, myJobPost);
router.post("/userByjobId", userByJobId);
router.post("/appliedJob", verifyToken, jobAppliById);
router.post("/appReq", verifyToken, appRequest);

router.get("/getAllJob", getAllJob);
router.get("/getJob/:id", getSingleJob);
router.get("/jobDetail/:id", verifyToken, getJobDetail);
router.get("/reqSkill/:id", getRequiredSkill);
router.get("/application/:id", verifyToken, applicationById);

export default router;

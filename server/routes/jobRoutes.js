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
  deleteJob,
} from "../controllers/jobController.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.post("/addJob", addJob);
router.post("/reqSkill", requiredSkill);
router.post("/applyJob", applyJob);
router.post("/addInfo", jobDetail);
router.post("/myJobPost", myJobPost);
router.post("/userByjobId", userByJobId);
router.post("/appliedJob", jobAppliById);
router.post("/appReq", appRequest);

router.get("/getAllJob", getAllJob);
router.get("/getJob/:id", getSingleJob);
router.get("/jobDetail/:id", getJobDetail);
router.get("/getReqSkill/:id", getRequiredSkill);
router.get("/application/:id", applicationById);
router.delete("/delete/:id", deleteJob);

export default router;

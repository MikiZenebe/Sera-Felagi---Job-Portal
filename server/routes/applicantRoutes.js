import express from "express";
import {
  addAddress,
  addEducation,
  addPortfolio,
  addSkills,
  allUserAddress,
  allUserEducation,
  allUserPortfolio,
  allUserSkill,
  deleteSkills,
  myProfile,
  updateSkills,
} from "../controllers/applicantController.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.post("/addEdu", verifyToken, addEducation);
router.post("/allEdu", verifyToken, allUserEducation);
router.post("/addPort", verifyToken, addPortfolio);
router.post("/allPort", verifyToken, allUserPortfolio);
router.post("/addAddress", verifyToken, addAddress);
router.post("/allAddress", verifyToken, allUserAddress);
router.post("/addSkills", verifyToken, addSkills);
router.post("/allSkills", verifyToken, allUserSkill);
router.put("/updateSkills", verifyToken, updateSkills);
router.delete("/deleteSkills", verifyToken, deleteSkills);
router.post("/profile/me", verifyToken, myProfile);

export default router;

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

router.post("/addEdu", addEducation);
router.post("/allEdu", allUserEducation);
router.post("/addPort", addPortfolio);
router.post("/allPort", allUserPortfolio);
router.post("/addAddress", addAddress);
router.post("/allAddress", allUserAddress);
router.post("/addSkills", addSkills);
router.get("/allSkills", allUserSkill);
router.put("/updateSkills", updateSkills);
router.delete("/deleteSkills", deleteSkills);
router.post("/profile/me", myProfile);

export default router;

import express from "express";
import {
  addEducation,
  addPortfolio,
  getEducation,
} from "../controllers/applicantController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/addEdu", protectRoute, addEducation);
router.post("/getEdu", getEducation);
router.post("/addPort", addPortfolio);

export default router;

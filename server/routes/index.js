import express from "express";
import authRoute from "./authRoutes.js";
import applicantRoute from "./applicantRoutes.js";
import jobRoutes from "./jobRoutes.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/applicant", applicantRoute);
router.use("/job", jobRoutes);

export default router;

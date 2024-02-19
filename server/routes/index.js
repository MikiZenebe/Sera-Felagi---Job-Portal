import express from "express";
import authRoute from "./authRoutes.js";
import applicantRoute from "./applicantRoutes.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/applicant", applicantRoute);

export default router;

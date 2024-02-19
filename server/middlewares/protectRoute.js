import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const protectRoute = async (req, res, next) => {
  const authHeader = req?.headers?.authorization;

  if (!authHeader || !authHeader?.startsWith("Bearer")) {
    next("Authentication== failed");
  }

  const token = authHeader?.split(" ")[1];

  try {
    const userToken = jwt.verify(token, process.env.JWT_SECRET);

    req.body.user = {
      userId: userToken.userId,
    };

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error in protectUser", error.message);
  }
};

export default protectRoute;

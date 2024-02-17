import User from "../models/userModel.js";
import { hashString } from "../utils/index.js";

export const register = async (req, res, next) => {
  const { name, username, email, password, userType } = req.body;

  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      next("Email Address already exists");
      return;
    }

    const hashedPassword = await hashString(password);

    const user = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
      userType,
    });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

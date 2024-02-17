import User from "../models/userModel.js";
import { compareString, createJWT, hashString } from "../utils/index.js";

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

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    //Validation
    if (!email || !password) {
      next("Please Provide User Credentials");
    }

    //Find a user by email
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      next("Invalid email or password");
      return;
    }

    //Compare Password
    const isMatch = await compareString(password, user?.password);

    if (!isMatch) {
      next("Invalid email or password");
      return;
    }

    //remove the password from the user object for security reasons.
    user.password = undefined;

    const token = createJWT(user?._id);

    res.status(200).json({
      success: true,
      message: "Login successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

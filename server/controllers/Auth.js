import User from "../models/userModel.js";
import { compareString, createJWT, hashString } from "../utils/index.js";
import { v2 as cloudinary } from "cloudinary";

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
    const user = await User.findOne({ email });

    if (!user) {
      next("User not found");
      return;
    }

    //Compare Password
    const isMatch = await compareString(password, user?.password);

    if (!isMatch) {
      next("Invalid email or password");
      return;
    }

    //remove the password from the user object for security reasons.
    delete user.password;

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

export const updateUser = async (req, res) => {
  const { name, email, username, password, aboutComp, benefits } = req.body;
  let { profilePic } = req.body;
  const userId = req.params.id;

  console.log("The User is", userId);

  try {
    let user = await User.findById(userId);
    if (!user) return res.status(400).json({ error: "User not found" });

    if (req.params.id !== userId.toString())
      return res
        .status(400)
        .json({ error: "You can't update other's profile" });

    if (password) {
      //Compare Password
      const isMatch = await compareString(password, user?.password);

      if (!isMatch) {
        next("Invalid email or password");
        return;
      }
    }

    if (profilePic) {
      if (user.profilePic) {
        await cloudinary.uploader.destroy(
          user.profilePic.split("/").pop().split(".")[0]
        );
      }
      const uploadedResponse = await cloudinary.uploader.upload(profilePic);
      profilePic = uploadedResponse.secure_url;
    }

    //Update the user
    user.name = name || user.name;
    user.email = email || user.email;
    user.username = username || user.username;
    user.profilePic = profilePic || user.profilePic;
    user.aboutComp = aboutComp || user.aboutComp;
    user.benefits = benefits || user.benefits;

    user = await user.save();

    //password should be null in res
    user.password = null;

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error in updateUser: ", error.message);
  }
};

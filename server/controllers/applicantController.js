import Education from "../models/applicant/appEduModel.js";
import Portfolio from "../models/applicant/appPortfModel.js";
import Skill from "../models/applicant/appSkillModel.js";
import Address from "../models/applicant/appAddrModel.js";
import User from "../models/userModel.js";

//Applicant Eduction
export const addEducation = async (req, res) => {
  try {
    const { userId, instName, depName, eduLevel, studyFrom, studyTo } =
      req.body;
    const user = await User.findById(userId);

    const newEdu = await Education.create({
      userId,
      name: user.name,
      instName,
      depName,
      eduLevel,
      studyFrom,
      studyTo,
    });

    await newEdu.save();
    res.status(200).json(newEdu);
  } catch (error) {
    console.log("Error in adding education", error.message);
    res.status(500).json({ error: error.message });
  }
};
export const allUserEducation = async (req, res) => {
  try {
    const { userId } = req.body.id;
    const getEdu = await Education.find(userId);

    res.status(200).json(getEdu);
  } catch (error) {
    console.log("Error in getting education", error.message);
    res.status(500).json({ error: error.message });
  }
};

//Applicant Portfolio
export const addPortfolio = async (req, res) => {
  try {
    const { userId, projTitle, projDesc, projLink, img } = req.body;

    const newPort = await Portfolio.create({
      userId,
      projTitle,
      projDesc,
      projLink,
      img,
    });

    await newPort.save();
    res.status(200).json(newPort);
  } catch (error) {
    console.log("Error in adding portfolio", error.message);
    res.status(500).json({ error: error.message });
  }
};
export const allUserPortfolio = async (req, res) => {
  try {
    const { userId } = req.body;
    const getPort = await Portfolio.find({ userId });

    res.status(200).json(getPort);
  } catch (error) {
    console.log("Error in getting portfolio", error.message);
    res.status(500).json({ error: error.message });
  }
};

//Applicant Address
export const addAddress = async (req, res) => {
  try {
    const { userId, location, mobileNo, github, linkedin, telegram } = req.body;

    const newAddress = await Address.create({
      userId,
      location,
      mobileNo,
      github,
      linkedin,
      telegram,
    });

    await newAddress.save();
    res.status(200).json(newAddress);
  } catch (error) {
    console.log("Error in adding address", error.message);
    res.status(500).json({ error: error.message });
  }
};
export const allUserAddress = async (req, res) => {
  try {
    const { userId } = req.body.id;

    const getAddr = await Address.findById(userId);
    res.status(200).json(getAddr);
  } catch (error) {
    console.log("Error in getting address", error.message);
    res.status(500).json({ error: error.message });
  }
};

//Applicant Skills
export const addSkills = async (req, res) => {
  try {
    const { userId, skillType, skillStatus } = req.body;

    const newSkill = await Skill.create({
      userId,
      skillType,
      skillStatus,
    });

    await newSkill.save();
    res.status(200).json(newSkill);
  } catch (error) {
    console.log("Error in adding skills", error.message);
    res.status(500).json({ error: error.message });
  }
};
export const allUserSkill = async (req, res) => {
  try {
    const { userId } = req.body;
    const allSKills = await Skill.find(userId);

    res.status(200).json(allSKills);
  } catch (error) {
    console.log("Error in getting skill", error.message);
    res.status(500).json({ error: error.message });
  }
};
export const updateSkills = async (req, res) => {
  const { skillType, skillStatus, id } = req.body;
  const skill = await Skill.findOneAndUpdate({ _id: id });
  skill.skillType = skillType;
  skill.skillStatus = skillStatus;
  await skill.save();

  res.status(200).json("Updated");
};
export const deleteSkills = async (req, res) => {
  try {
    const { _id } = req.body;
    await Skill.findOneAndDelete(_id);
    res.status(200).json("Deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

//User Profile
export const myProfile = async (req, res) => {
  try {
    const { _id } = req.body.id;
    await User.find(_id).select("-password");
    res.status(200).json("Worked");
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

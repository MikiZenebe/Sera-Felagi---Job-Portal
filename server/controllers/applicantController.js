import Education from "../models/applicant/appEduModel.js";
import Portfolio from "../models/applicant/appPortfModel.js";
import Skill from "../models/applicant/appSkillModel.js";
import Address from "../models/applicant/appAddrModel.js";

//Applicant Eduction
export const addEducation = async (req, res) => {
  try {
    const { instName, DepName, EduLevel, studyFrom, studyTo } = req.body;

    const newEdu = await Education.create({
      instName,
      DepName,
      EduLevel,
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
export const getEducation = async (req, res) => {
  try {
    const { userId } = req.body.id;
    const getEdu = await Education.findById(userId);

    res.status(200).json(getEdu);
  } catch (error) {
    console.log("Error in getting education", error.message);
    res.status(500).json({ error: error.message });
  }
};

//Applicant Portfolio
export const addPortfolio = async (req, res) => {
  try {
    const { userId } = req.body.user;
    const { projTitle, projDesc, projLink, img } = req.body;

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
// export const getEducation = async (req, res) => {
//   try {
//     const { userId } = req.body.id;
//     const getEdu = await Education.findById(userId);

//     res.status(200).json(getEdu);
//   } catch (error) {
//     console.log("Error in getting education", error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

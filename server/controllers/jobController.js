import Job from "../models/job/jobModel.js";
import ReqSkill from "../models/job/requiredSkillModel.js";
import JobDetail from "../models/job/jobDetailModel.js";
import Application from "../models/applicationModel.js";

export const addJob = async (req, res) => {
  try {
    const {
      userId,
      jobTitle,
      compName,
      jobDuration,
      salary,
      jobType,
      WorkFrom,
      location,
    } = req.body;

    const newJob = await Job.create({
      userId,
      jobTitle,
      compName,
      jobDuration,
      salary,
      jobType,
      WorkFrom,
      location,
    });

    await newJob.save();
    res.status(200).json(newJob);
  } catch (error) {
    console.log("Error in adding job", error.message);
    res.status(500).json({ error: error.message });
  }
};
export const getAllJob = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.status(200).json(jobs);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const getSingleJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error in getting job: ", error.message);
  }
};

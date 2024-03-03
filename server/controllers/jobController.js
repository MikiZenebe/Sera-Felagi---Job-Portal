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
      jobDesc,
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
      jobDesc,
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
export const applyJob = async (req, res) => {
  const {
    userId,
    jobId,
    AppliName,
    coverLetter,
    availability,
    Assessment,
    status,
  } = req.body;

  try {
    const jobExist = await Job.findById(jobId);
    if (!jobExist) {
      return "Job is not found";
    }

    const apply = await Application.create({
      userId,
      jobId,
      AppliName,
      coverLetter,
      availability,
      Assessment,
      status,
    });
    await apply.save();

    const obj = await Job.findById(jobId);
    obj.jobCount.push(userId);
    await obj.save();

    res.send("New apply is Added");
  } catch (error) {}
};
export const requiredSkill = async (req, res) => {
  const { jobId, reqSkill } = req.body;

  try {
    const addSkill = await ReqSkill.create({
      jobId,
      reqSkill,
    });
    await addSkill.save();
    res.status(200).json(addSkill);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const jobDetail = async (req, res) => {
  const { jobId, aboutcom, numOfposi, benefits, addiInfo } = req.body;

  try {
    const detail = await JobDetail.create({
      jobId,
      aboutcom,
      numOfposi,
      benefits,
      addiInfo,
    });
    await detail.save();
    res.status(200).json(detail);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const myJobPost = async (req, res) => {
  const { userId } = req.body;

  try {
    const myJob = await Job.find({ userId });
    res.status(200).json(myJob);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const userByJobId = async (req, res) => {
  const { jobId } = req.body;

  try {
    const userByJid = await Application.find({ jobId });
    res.status(200).json(userByJid);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const jobAppliById = async (req, res) => {
  const { userId } = req.body;

  try {
    const application = await Application.find({ userId });
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json(application);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const getJobDetail = async (req, res) => {
  const { jobId } = req.body;

  try {
    const getDetail = await JobDetail.find({ jobId });
    if (!getDetail) {
      return res.status(404).json({ message: "Detail not found" });
    }
    res.status(200).json(getDetail);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const getRequiredSkill = async (req, res) => {
  const { jobId } = req.body;

  try {
    const getRequired = await ReqSkill.find({ jobId });
    if (!getRequired) {
      return res.status(404).json({ message: "Required skill not found" });
    }
    res.status(200).json(getRequired);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const applicationById = async (req, res) => {
  try {
    Application.find({ _id: req.params.id });
    res.status(200).json("Yes");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const appRequest = async (req, res) => {
  const { _id } = req.body;

  try {
    const appliRequest = await Application.find({ _id });
    appliRequest[0].status = req.body.stausType;
    await appliRequest[0].save();

    res.status(200).json(appliRequest);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

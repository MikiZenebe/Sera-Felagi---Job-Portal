import Job from "../models/job/jobModel.js";
import ReqSkill from "../models/job/requiredSkillModel.js";
import JobDetail from "../models/job/jobDetailModel.js";
import Application from "../models/applicationModel.js";

//Function to delete expired jobs
const deleteExpiredJobs = async () => {
  try {
    //Calculate the current date and time
    const currentDate = new Date();

    //Calculate the date 10 days ago
    const tenDaysAgo = new Date(currentDate);
    tenDaysAgo.setDate(currentDate.getDate() - 10);

    //Find and delete jobs that have expired
    await Job.deleteMany({ expiryDate: { $lte: tenDaysAgo } });
    res.status(200).json("Expired job deleted");
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

//Schedule recurring task to delete
const scheduleJobDeletion = () => {
  //runs every day
  setInterval(deleteExpiredJobs, 24 * 60 * 60 * 1000);
};

//start the job deletion scheduler
scheduleJobDeletion();

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
      jobLevel,
      numOfPosition,
    } = req.body;

    //Calculate expiry date
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 10);

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
      jobLevel,
      numOfPosition,
      expiryDate,
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
    const jobs = await Job.find({}).sort({
      createdAt: -1,
    });
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
export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    await Job.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
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
  const { userId } = req.body.id;

  try {
    const myJob = await Job.find(userId);
    res.status(200).json(myJob);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const userByJobId = async (req, res) => {
  const { jobId } = req.body;

  try {
    const userById = await Application.find({ jobId });
    res.status(200).json(userById);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const jobAppliById = async (req, res) => {
  const { userId } = req.body;

  try {
    const application = await Application.find(userId);
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
  try {
    const getRequired = await ReqSkill.find({ jobId: req.params.id });
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
    const getAppDetail = await Application.find({ _id: req.params.id });
    res.status(200).json(getAppDetail);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const appRequest = async (req, res) => {
  const app = await Application.find({ _id: req.body.id });
  app[0].status = req.body.statusType;
  await app[0].save();
};

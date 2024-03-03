import mongoose from "mongoose";

const JobSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    jobTitle: { type: String, required: true },
    compName: { type: String, required: true },
    jobDuration: { type: Number, required: true },
    jobDesc: { type: String, required: true },
    salary: { type: Number, required: true },
    jobType: { type: String, required: true },
    WorkFrom: { type: String, required: true },
    location: { type: String, required: true },
    jobCount: [],
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", JobSchema);
export default Job;

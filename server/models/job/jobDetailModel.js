import mongoose from "mongoose";

const JobDetailSchema = mongoose.Schema(
  {
    jobId: { type: String, required: true },
    aboutcom: { type: String },
    numOfposi: { type: Number, required: true },
    benefits: { type: String },
    addiInfo: { type: String },
  },
  {
    timestamps: true,
  }
);

const JobDetail = mongoose.model("JobDetail", JobDetailSchema);
export default JobDetail;

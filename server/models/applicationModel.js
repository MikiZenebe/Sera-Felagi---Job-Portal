import mongoose from "mongoose";

const ApplicationSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    jobId: { type: String, required: true },
    AppliName: { type: String, required: true },
    coverLetter: { type: String, required: true },
    availability: { type: String, required: true },
    Assessment: { type: String, required: true },
    status: { type: String, default: "Under Process" },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", ApplicationSchema);
export default Application;

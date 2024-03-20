import mongoose from "mongoose";

const AppEduSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    instName: {
      type: String,
    },
    depName: {
      type: String,
    },
    eduLevel: {
      type: String,
    },
    studyFrom: {
      type: String,
    },
    studyTo: {
      type: String,
    },
  },
  { timestamps: true }
);

const Education = mongoose.model("Education", AppEduSchema);
export default Education;

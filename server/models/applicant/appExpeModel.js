import mongoose from "mongoose";

const AppExpeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    companyName: {
      type: String,
      required: true,
    },
    position: {
      type: String,
    },
    join_from: {
      type: String,
    },
    to: {
      type: String,
    },
  },
  { timestamps: true }
);

const Experience = mongoose.model("Experience", AppExpeSchema);
export default Experience;

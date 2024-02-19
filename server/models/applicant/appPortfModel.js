import mongoose from "mongoose";

const AppPortfSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    projTitle: {
      type: String,
      required: true,
    },
    projDesc: {
      type: String,
    },
    projLink: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

const Portfolio = mongoose.model("Portfolio", AppPortfSchema);
export default Portfolio;

import mongoose from "mongoose";

const ReqSkillSchema = mongoose.Schema(
  {
    jobId: { type: String, required: true },
    reqSkill: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const RequiredSkill = mongoose.model("RequiredSkill", ReqSkillSchema);
export default RequiredSkill;

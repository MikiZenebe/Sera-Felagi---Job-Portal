import mongoose from "mongoose";

const AppSkillSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  skillType: {
    type: String,
    required: true,
  },
  skillStatus: {
    type: String,
    default: "Beginner",
  },
});

const AppliSkill = mongoose.model("AppliSkill", AppSkillSchema);
export default AppliSkill;

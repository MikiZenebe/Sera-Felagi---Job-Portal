import mongoose from "mongoose";

const AppEduSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  instName: {
    type: String,
  },
  DepName: {
    type: String,
  },
  EduLevel: {
    type: String,
  },
  studyFrom: {
    type: String,
  },
  studyTo: {
    type: String,
  },
});

const Education = mongoose.model("Education", AppEduSchema);
export default Education;

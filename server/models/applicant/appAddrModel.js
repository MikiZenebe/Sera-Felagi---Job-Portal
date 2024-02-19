import mongoose from "mongoose";

const AppAddressSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: String,
    },
    github: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    telegram: {
      type: String,
    },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", AppAddressSchema);
export default Address;

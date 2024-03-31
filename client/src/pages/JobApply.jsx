import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  applyForJobAction,
  getJobByIdAction,
} from "../redux/actions/jobActions";
import {
  userEducations,
  userPortfolio,
  userProfileAction,
  userSkills,
} from "../redux/actions/userAction";
import { Button, Textarea, useColorModeValue } from "@chakra-ui/react";
import toast from "react-hot-toast";

export default function JobApply() {
  const { id } = useParams();
  const [letter, setLetter] = useState("");
  const [availability, setAvailability] = useState("");
  const [assessment, setAssessment] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("currentUser"))._id;

    if (userId) {
      dispatch(getJobByIdAction(id));
      dispatch(userProfileAction(userId));
      dispatch(userEducations(userId));
      dispatch(userPortfolio(userId));
      dispatch(userSkills(userId));
    }
  }, [dispatch, id]);

  const { job } = useSelector((state) => state.getJobByIdReducer);

  const interpretResponse = (response) => {
    if (response.response === "success" && response.responseCode === 200) {
      toast.success(response.message, {
        duration: 1500,
        position: "top-center",
      });

      window.location.replace("/jobList");
    } else {
      toast.error(response.message, {
        duration: 1500,
        position: "top-center",
      });
    }
  };

  const handleSubmit = () => {
    const obj = {
      AppliName: JSON.parse(localStorage.getItem("currentUser")).name,
      coverLetter: letter,
      availability: availability,
      Assessment: assessment,
      jobId: id,
      userId: JSON.parse(localStorage.getItem("currentUser"))._id,
    };

    dispatch(applyForJobAction(obj, interpretResponse));
    setLetter("");
    setAvailability("");
    setAssessment("");
  };

  return (
    <div className="flex flex-col justify-center my-20">
      <form onSubmit={handleSubmit} className="w-full md:w-3/4 md:mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-10">
          {job.jobTitle} job / {job.WorkFrom} at {job && job.compName}
        </h3>

        <div>
          <h3 className="text-xl font-semibold">Cover letter</h3>
          <p>Why should you be hired for this role?</p>
          <Textarea
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent w-[600px]"
            value={letter}
            rows="5"
            onChange={(e) => setLetter(e.target.value)}
          />
        </div>
        <br />
        <div>
          <h3 className="text-xl font-semibold">Your availability</h3>
          <Textarea
            rows={5}
            className="w-full "
            onChange={(e) => setAvailability(e.target.value)}
            value={availability}
            placeholder="ex. I am available for 3 months starting immediately for a full-time internship"
          />
        </div>
        <br />
        <div>
          <h3 className="text-xl font-semibold">Assessment</h3>
          <p>
            Q1. If you have any experience in {job && job.jobTitle}, please
            share. If you want to share any documents or files, please upload it
            on Google Drive or Dropbox and paste the public link in the answer.
          </p>
          <Textarea
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent w-[600px]"
            rows="3"
            onChange={(e) => setAssessment(e.target.value)}
            value={assessment}
          />
        </div>
        <br />
        <Button
          bg={useColorModeValue("#6A38C2", "#6A38C2")}
          color={useColorModeValue("white", "white")}
          _hover={useColorModeValue("", "#183242")}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlljobPostofUser } from "../redux/actions/userAction";
import MyJob from "../components/JobsComp/MyJob";

export default function MyJobList() {
  const dispatch = useDispatch();

  const id = JSON.parse(localStorage.getItem("currentUser"))._id;
  useEffect(() => {
    if (id) {
      dispatch(getAlljobPostofUser(id));
    }
  }, []);

  const { jobsPost } = useSelector((state) => state.getUserAllJobPostReducer);

  return (
    <div className="my-16">
      <div>
        <h3 className="text-center text-2xl font-bold my-6">
          All My Job Post is Here
        </h3>

        {jobsPost?.map((ele) => {
          return <MyJob key={ele._id} item={ele} />;
        })}
      </div>
    </div>
  );
}

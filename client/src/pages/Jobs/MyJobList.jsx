import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlljobPostofUser } from "../../redux/actions/userAction";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function MyJobList() {
  const dispatch = useDispatch();

  const id = JSON.parse(localStorage.getItem("currentUser"))._id;
  useEffect(() => {
    if (id) {
      dispatch(getAlljobPostofUser(id));
    }
  }, [dispatch, id]);

  const { jobsPost } = useSelector((state) => state.getUserAllJobPostReducer);

  return (
    <div className="w-full">
      <div>
        <h3 className="text-center text-2xl font-bold my-2">
          All My Job Post is Here
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full py-6 mx-auto">
          {jobsPost.map((item) => {
            return (
              <>
                <div
                  className=" border border-gray-400 p-3 rounded-md w-full mx-auto"
                  key={item._id}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{item.jobTitle}</h4>
                        <p className="text-xs text-gray-400">{item.compName}</p>
                      </div>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      <p className="text-[#FA4F09] font-semibold">
                        {item.WorkFrom}
                      </p>{" "}
                      |
                      <p className="text-[#5e99ff] font-semibold">
                        {item.location}
                      </p>{" "}
                      |
                      <p className="text-[#41c564] font-semibold">
                        {item.jobDuration}
                      </p>{" "}
                      |
                      <p className="text-[#3AC2BA] font-semibold">
                        ${item.salary}
                      </p>
                    </div>

                    <div className="my-2">
                      <div className="flex gap-3">
                        <button className="text-[#8e58ec] p-2 rounded-md border border-[#8e58ec] hover:bg-[#8e58ec] hover:text-white text-xs font-semibold">
                          <Link to={`/job/application/${item._id}`}>
                            Applicant Detail
                          </Link>
                        </button>

                        <button className="text-[#60c457] hover:bg-[#60c457] hover:text-white p-2 rounded-md border border-[#60c457] text-xs font-semibold">
                          <Link to={`/job/${item._id}`}>Job Details</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

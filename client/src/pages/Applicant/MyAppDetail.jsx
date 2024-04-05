/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getJobByIdAction,
  getApplicaByIdAction,
} from "../../redux/actions/jobActions";
import { Box, Divider, Flex, Text, useColorModeValue } from "@chakra-ui/react";

export default function MyAppDetail() {
  const { jobid, appId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobByIdAction(jobid));
    dispatch(getApplicaByIdAction(appId));
  }, [appId, dispatch, jobid]);

  const { job } = useSelector((state) => state.getJobByIdReducer);
  const { applica } = useSelector((state) => state.getApplicationByIdReducer);

  return (
    <div className="flex flex-col my-10">
      <Flex className="flex flex-col gap-10">
        <Text className="text-3xl text-center font-bold text-[#935af7]">
          {job && job.jobTitle} {job.WorkFrom} {job.jobType} at{" "}
          {job && job.compName}
        </Text>
      </Flex>

      <div className="  gap-3 w-full py-6 ">
        <>
          <div
            className=" border border-gray-400 p-3 rounded-md w-full mx-auto"
            key={job._id}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{job.jobTitle}</h4>
                  <p className="text-xs text-gray-400">{job.compName}</p>
                </div>

                <div>
                  <p className="text-sm">
                    <b>Num Of Application:</b>{" "}
                    <span className="font-semibold">
                      {job && job.jobCount.length}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap">
                <p className="text-[#FA4F09] font-semibold">{job.WorkFrom}</p> |
                <p className="text-[#5e99ff] font-semibold">{job.location}</p> |
                <p className="text-[#41c564] font-semibold">
                  {job.jobDuration}
                </p>{" "}
                |<p className="text-[#3AC2BA] font-semibold">${job.salary}</p>
              </div>
            </div>
          </div>
        </>
      </div>

      {applica && (
        <>
          <Box
            bg={useColorModeValue("white", "#183242")}
            className="p-7 flex flex-col gap-2 w-full rounded-lg cursor-pointer"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Cover Letter</h3>
              <p className="text-gray-400">{applica[0].coverLetter}</p>

              <Divider />
              <h3 className="text-xl font-bold">Availability</h3>
              <p className="text-gray-400">{applica[0].availability}</p>
              <Divider />
              <h3 className="text-xl font-bold">Assessment</h3>
              <p className="text-gray-400">{applica[0].Assessment}</p>
            </div>
          </Box>
        </>
      )}
    </div>
  );
}

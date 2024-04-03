/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllJobAction,
  getAllJobAppliByuserId,
} from "../redux/actions/jobActions";
import { Link } from "react-router-dom";
import { Button, useColorModeValue } from "@chakra-ui/react";

export default function MyApplication() {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("currentUser"))._id;
    dispatch(getAllJobAppliByuserId(id));
    dispatch(getAllJobAction("All"));
  }, [dispatch]);

  const { jobs } = useSelector((state) => state.getAllJobReducer);
  const { myJob } = useSelector((state) => state.getJobAppliByUserIdReducer);
  console.log(myJob);

  const arr = [];
  const modifyFyb = () => {
    const list =
      myJob &&
      jobs &&
      myJob.forEach((ele) => {
        jobs.forEach((item) => {
          if (ele.jobId === item._id) {
            ele.jobTitle = item.jobTitle;
            ele.compName = item.compName;
            arr.push(ele);
          }
        });
      });

    console.log(list);
  };
  modifyFyb();

  return (
    <div className="overflow-auto sm:overflow-hidden w-full mx-auto">
      <table className="w-full mt-6">
        <thead>
          <tr className="bg-gray-700 text-center text-xs font-semibold uppercase tracking-widest text-white">
            <th className="px-5 py-3">Serial No.</th>
            <th className="px-5 py-3">Company</th>
            <th className="px-5 py-3">Profile</th>
            <th className="px-5 py-3">Date</th>
            <th className="px-5 py-3">Application Status</th>
            <th className="px-5 py-3">Application Review</th>
          </tr>
        </thead>

        <tbody className="text-gray-400 ">
          {arr &&
            arr.map((apply, index) => {
              return (
                <tr
                  key={index}
                  className="text-center border hover:bg-gray-100 transition-all duration-150 ease-in-out cursor-pointer"
                >
                  <td className="border">
                    <p className="whitespace-no-wrap text-center">
                      {index + 1}
                    </p>
                  </td>
                  <td className="border">
                    <p className="whitespace-no-wrap text-center">
                      {apply?.compName}
                    </p>
                  </td>
                  <td className="border">
                    <p className="whitespace-no-wrap text-center">
                      {apply?.jobTitle}
                    </p>
                  </td>
                  <td className="border">
                    <p className="whitespace-no-wrap text-center">
                      {apply?.createdAt.substring(0, 10)}
                    </p>
                  </td>
                  <td className="border">
                    <p className="whitespace-no-wrap text-center text-green-500 font-semibold">
                      {apply?.status}
                    </p>
                  </td>
                  <td className="border py-2">
                    <Button
                      size={"sm"}
                      bg={useColorModeValue("#6A38C2", "#6A38C2")}
                      color={useColorModeValue("white", "white")}
                      _hover={useColorModeValue("", "#183242")}
                    >
                      <Link
                        to={`/myapplication/${apply._id}/job/${apply.jobId}`}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Detail
                      </Link>
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

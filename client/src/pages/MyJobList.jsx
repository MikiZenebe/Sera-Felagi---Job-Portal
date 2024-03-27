import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlljobPostofUser } from "../redux/actions/userAction";
import { Link } from "react-router-dom";

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
    <div className="w-full ">
      <div className="overflow-scroll lg:overflow-hidden">
        <h3 className="text-start text-2xl font-bold my-2">
          All My Job Post is Here
        </h3>

        <table className="md:w-[1000px] w-[600px] border  mt-6 text-gray-400 ">
          <thead>
            <tr className="border  text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
              <th className="px-5 py-3 text-[10px]">Job Title</th>
              <th className="px-5 py-3 text-[10px]">Company Name</th>
              <th className="px-5 py-3 text-[10px]">Work From</th>
              <th className="px-5 py-3 text-[10px]">Location</th>
              <th className="px-5 py-3 text-[10px]">Duration</th>
              <th className="px-5 py-3 text-[10px]">Salary</th>
              <th className="px-5 py-3 text-[10px]">Action</th>
              <th className="px-5 py-3 text-[10px]"></th>
            </tr>
          </thead>

          {jobsPost?.map((item) => {
            return (
              <tbody
                key={item._id}
                className=" hover:bg-gray-100  transition-all duration-150 ease-in-out cursor-pointer"
              >
                <tr className="text-center border">
                  <td className="px-5 text-sm font-semibold">
                    <p className="whitespace-no-wrap text-center">
                      {item?.jobTitle}
                    </p>
                  </td>
                  <td className="px-5 py-1 text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="whitespace-no-wrap text-center">
                          {item?.compName}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-1 text-sm">
                    <p className="whitespace-no-wrap">{item?.WorkFrom}</p>
                  </td>
                  <td className="px-5 py-1 text-sm">
                    <p className="whitespace-no-wrap">{item?.location}</p>
                  </td>
                  <td className="px-5 py-1 text-sm">
                    <p className="whitespace-no-wrap">{item?.jobDuration}</p>
                  </td>
                  <td className=" px-5 py-1 text-sm">
                    <p className="whitespace-no-wrap">{item?.salary}</p>
                  </td>
                  <td className="px-3 text-sm">
                    <Link to={`/job/application/`}>
                      <button className=" text-[#6F4DAC] font-semibold w-fit">
                        Applicant Detail
                      </button>
                    </Link>
                  </td>
                  <td className="px-5 py-1 text-sm">
                    <Link to={`/job/${item._id}`}>
                      {" "}
                      <button className=" text-[#39cf78] font-semibold w-fit py-3">
                        Job Detail
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

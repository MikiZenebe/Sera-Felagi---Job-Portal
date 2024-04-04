import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getJobByIdAction,
  getApplicaByIdAction,
} from "../../redux/actions/jobActions";

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
    <div className="flex flex-col my-24">
      <div>
        <br />
        {applica && (
          <>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Cover Letter</h3>
              <p>{applica[0].coverLetter}</p>
              <h3 className="text-2xl font-bold">Availability</h3>
              <p>{applica[0].availability}</p>
              <h3 className="text-2xl font-bold">Assessment</h3>
              <p>{applica[0].Assessment}</p>
            </div>
          </>
        )}
      </div>

      <div className="mt-10">
        <div>
          <h2 className="text-2xl font-bold">
            {job && job.jobTitle} Work from home job/internship at{" "}
            {job && job.compName}
          </h2>
        </div>
      </div>
      <br />
      <div className="col-8 m-auto">
        <p>
          {" "}
          <b>Number Of Application: </b> {job && job.jobCount.length}
        </p>
      </div>

      <div className="max-w-xl rounded overflow-hidden mt-2 shadow-lg p-4">
        <div>
          {job && (
            <div key={job._id}>
              <h3>Job Title: {job.jobTitle}</h3>
              <p>{job.compName}</p>
              <p>Work From :{job.WorkFrom}</p>

              <p>location: {job.location}</p>

              <div>
                <div className="flex items-center gap-2">
                  <p>Duration: </p>
                  <p>{job.jobDuration}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>Salary: </p>
                  <p>{job.salary}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

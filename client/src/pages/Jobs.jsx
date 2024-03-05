import { useDispatch, useSelector } from "react-redux";
import { Filter, JobLists } from "../components/index";
import { useEffect } from "react";
import { getAllJobAction } from "../redux/actions/jobActions";

export default function Jobs() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobAction("All"));
  }, [dispatch]);

  const { jobs } = useSelector((state) => state.getAllJobReducer);
  console.log(jobs);

  return (
    <div className="h-auto w-full flex gap-5">
      <div className="w-1/4">
        <div className="w-1/4" style={{ position: "fixed" }}>
          <Filter />
        </div>
      </div>

      <div className="w-2/4 flex flex-col gap-2">
        <JobLists jobs={jobs} />
      </div>
    </div>
  );
}

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

  return (
    <div className="h-auto w-full flex flex-col md:flex-row gap-8">
      <div className="sm:w-3/5 md:2/4 w-full mx-auto">
        <div className="mx-auto md:w-3/4  md:fixed">
          <Filter />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <JobLists jobs={jobs} />
      </div>
    </div>
  );
}

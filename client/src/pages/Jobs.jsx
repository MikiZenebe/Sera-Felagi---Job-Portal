import { Filter, JobLists } from "../components/index";

export default function Jobs() {
  return (
    <div className="h-auto w-full flex gap-5">
      <div className="w-1/4">
        <div className="w-1/4" style={{ position: "fixed" }}>
          <Filter />
        </div>
      </div>

      <div className="w-2/4 flex flex-col gap-2">
        <JobLists /> <JobLists /> <JobLists /> <JobLists /> <JobLists />{" "}
        <JobLists />
      </div>
    </div>
  );
}

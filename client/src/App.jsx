import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  HomePage,
  SignupPage,
  LoginPage,
  Jobs,
  JobDetail,
  CreateJob,
  UpdateProfile,
  MyJobList,
  Resume,
  JobApply,
  MyApplication,
  MyAppDetail,
  ApplicantList,
} from "./pages/index";

export default function App() {
  const user = JSON.parse(localStorage.getItem("currentUser"))
    ? JSON.parse(localStorage.getItem("currentUser"))._id
    : null;

  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <div className="px-14 py-7">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/jobList" element={user ? <Jobs /> : <HomePage />} />
          <Route
            path="/createJob"
            element={user ? <CreateJob /> : <HomePage />}
          />
          <Route
            path="/job/:id"
            element={user ? <JobDetail /> : <HomePage />}
          />
          <Route
            path="/updateProfile"
            element={user ? <UpdateProfile /> : <HomePage />}
          />
          <Route path="/myJobList" exact element={<MyJobList />} />
          <Route path="/resume/:id" exact element={<Resume />} />
          <Route path="/apply/:id" exact element={<JobApply />} />
          <Route path="/myapplication" exact element={<MyApplication />} />
          <Route
            path="/myapplication/:appId/job/:jobid"
            exact
            element={<MyAppDetail />}
          />
          <Route
            path="/job/application/:id"
            exact
            element={<ApplicantList />}
          />
        </Routes>
      </div>

      <footer className="sticky z-50 top-60">
        <Footer />
      </footer>
    </>
  );
}

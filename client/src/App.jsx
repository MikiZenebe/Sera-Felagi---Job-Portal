import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  HomePage,
  SignupPage,
  LoginPage,
  Jobs,
  JobDetail,
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
            path="/job/:id"
            element={user ? <JobDetail /> : <HomePage />}
          />
        </Routes>
      </div>

      <footer className="sticky z-50 top-0">
        <Footer />
      </footer>
    </>
  );
}

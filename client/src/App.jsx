import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { HomePage, SignupPage, LoginPage } from "./pages/index";

export default function App() {
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
        </Routes>
      </div>

      <footer className="sticky  z-50  top-0">
        <Footer />
      </footer>
    </>
  );
}

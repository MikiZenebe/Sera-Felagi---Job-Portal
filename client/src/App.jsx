import React from "react";
import { HeroSection, Navbar, Footer } from "./components";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <div className="px-14 py-7">
        <HomePage />
      </div>

      <footer className="sticky  z-50  top-0">
        <Footer />
      </footer>
    </>
  );
}

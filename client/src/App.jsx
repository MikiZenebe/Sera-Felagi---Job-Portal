import React from "react";
import { HeroSection, Navbar } from "./components";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="px-14 py-7">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <HomePage />
    </div>
  );
}

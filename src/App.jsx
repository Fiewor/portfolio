import "./app.scss";
import React, { useState, useEffect } from "react";
import MainHeader from "./components/Header/MainHeader";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import Footer from "./components/Footer/Footer";
import { Theme } from "@carbon/react";

function App() {
  const [theme, setTheme] = useState("g100");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("g100");
    } else {
      setTheme("white");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "white" ? "g100" : "white";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Theme theme={theme}>
      <MainHeader theme={theme} toggleTheme={toggleTheme} />
      <main className="cds--content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Theme>
  );
}

export default App;

import "./app.scss";
import { Content, Theme } from "@carbon/react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/";
import MainHeader from "./components/Header/";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Theme theme="g100">
        <MainHeader />
      </Theme>
      <Content>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Content>
      <Footer />
    </>
  );
}

export default App;

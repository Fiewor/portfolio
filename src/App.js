import "./app.scss";
import { Content, Theme } from "@carbon/react";
import MainHeader from "./components/Header/MainHeader";
import { Route, Routes } from "react-router-dom";
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
    </>
  );
}

export default App;

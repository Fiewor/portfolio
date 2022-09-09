import "./app.scss";
import { Content, Theme } from "@carbon/react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/";
import MainHeader from "./components/Header/";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";

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
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Content>
      <Footer />
    </>
  );
}

export default App;

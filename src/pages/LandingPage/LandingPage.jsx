import { useEffect, useState } from "react";
import { Launch } from "@carbon/icons-react";
import me from "../../assets/me.jpeg";
import {
  Button,
  Grid,
  Column,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
  StructuredListBody,
  Link as CarbonLink,
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@carbon/react";
import { Link } from "react-router-dom";
import { achievements, experience, certificates } from "./data.js";

const LandingPage = () => {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const triggerGlitch = () => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 5000);
    };

    triggerGlitch();
    const intervalId = setInterval(triggerGlitch, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Grid className="landing-page" fullWidth>

      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb aria-label="Page navigation">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1
          data-text="WELCOME TO MY PORTFOLIO"
          className={`${glitchActive ? "glitch" : ""} landing-page__heading`}
        >
          WELCOME TO MY PORTFOLIO
        </h1>
      </Column>

      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs>
          <TabList aria-label="Tab navigation" className="tabs-group">
            <Tab>Intro</Tab>
            <Tab>Achievements</Tab>
            <Tab>Experience</Tab>
            <Tab>Certificates</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
                  <h2 className="landing-page__subheading">Hi there,</h2>
                  <p className="landing-page__p">
                    my name is
                    <span data-text="John Fiewor" className="other-glitch landing-page__p__span">
                      {" "}
                      John Fiewor
                    </span>{" "}
                    and I'm a Full-Stack Web Developer.
                  </p>
                  <p className="landing-page__p">
                    I have a Master's degree in Computer Science and skills in web development,
                    artificial intelligence and cloud technologies. I build software solutions using
                    MERN-Stack (and other tools as necessary). I'm also certified in Azure AI and
                    Google Cloud Platform fundamentals.
                  </p>
                  <Button
                    renderIcon={Launch}
                    href="https://github.com/Fiewor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </Button>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 8 }} sm={4} className="landing-page--image-container">
                  <img className="landing-page__illo" alt="Profile" src={me} />
                </Column>
              </Grid>
            </TabPanel>

            <TabPanel>
              <div className="tabs-group-content">
                <StructuredListWrapper>
                  <StructuredListHead>
                    <StructuredListRow head>
                      <StructuredListCell head>Achievement</StructuredListCell>
                      <StructuredListCell head>Details</StructuredListCell>
                    </StructuredListRow>
                  </StructuredListHead>
                  <StructuredListBody>
                    {achievements.map((item, i) => (
                      <StructuredListRow key={i}>
                        <StructuredListCell noWrap><strong>{item.title}</strong></StructuredListCell>
                        <StructuredListCell>{item.details}</StructuredListCell>
                      </StructuredListRow>
                    ))}
                  </StructuredListBody>
                </StructuredListWrapper>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tabs-group-content">
                <StructuredListWrapper>
                  <StructuredListHead>
                    <StructuredListRow head>
                      <StructuredListCell head>Role</StructuredListCell>
                      <StructuredListCell head>Company | Timeline</StructuredListCell>
                      <StructuredListCell head>Description</StructuredListCell>
                    </StructuredListRow>
                  </StructuredListHead>
                  <StructuredListBody>
                    {experience.map((item, i) => (
                      <StructuredListRow key={i}>
                        <StructuredListCell noWrap><strong>{item.role}</strong></StructuredListCell>
                        <StructuredListCell noWrap>{item.company} | {item.timeline}</StructuredListCell>
                        <StructuredListCell>{item.description}</StructuredListCell>
                      </StructuredListRow>
                    ))}
                  </StructuredListBody>
                </StructuredListWrapper>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tabs-group-content">
                <StructuredListWrapper>
                  <StructuredListHead>
                    <StructuredListRow head>
                      <StructuredListCell head>Certificate</StructuredListCell>
                      <StructuredListCell head>Issuer</StructuredListCell>
                      <StructuredListCell head>Year</StructuredListCell>
                    </StructuredListRow>
                  </StructuredListHead>
                  <StructuredListBody>
                    {certificates.map((item, i) => (
                      <StructuredListRow key={i}>
                        <StructuredListCell noWrap><strong>{item.name}</strong></StructuredListCell>
                        <StructuredListCell>{item.issuer}</StructuredListCell>
                        <StructuredListCell>{item.date}</StructuredListCell>
                      </StructuredListRow>
                    ))}
                  </StructuredListBody>
                </StructuredListWrapper>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
    </Grid>
  );
};


export default LandingPage;

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
  StructuredListBody,
  Link as CarbonLink,
} from "@carbon/react";
import { Link } from "react-router-dom";
import { Launch, DocumentDownload } from "@carbon/react/icons";

import downloadResume from "./downloadResume.js";
import me from "../../assets/me.jpg";

const LandingPage = () => {
  const url =
    "https://drive.google.com/file/d/1lrp9v4lH5gUGu0f1DLjO6xxt67qb8PGZ/view?usp=sharing";

  // * to be used for tooltip definition
  const definition = {
    mern: "a MERN stack developer is someone who specializes in using MongoDB, Express, React and Nodejs to build fullstack web applications.",
  };

  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb aria-label="Page navigation">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">WELCOME TO MY PORTFOLIO</h1>
      </Column>

      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Grid className="tabs-group-content">
          <Column lg={16} md={8} sm={4} className="landing-page__r2">
            <Tabs defaultSelectedIndex={0}>
              <TabList className="tabs-group" aria-label="Tab navigation">
                <Tab>Intro</Tab>
                <Tab>Achievements</Tab>
                <Tab>Experience</Tab>
                <Tab>Certificates</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Grid className="tabs-group-content">
                    <Column
                      md={4}
                      lg={7}
                      sm={4}
                      className="landing-page__tab-content"
                    >
                      <h2 className="landing-page__subheading">Hi there,</h2>
                      <p className="landing-page__p">
                        my name is{" "}
                        <span className="landing-page__p__span">
                          John Fiewor
                        </span>{" "}
                        and I'm a MERN-Stack developer.
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
                    <Column
                      md={4}
                      lg={{ span: 8, offset: 7 }}
                      sm={4}
                      className="landing-page--image-container"
                    >
                      <img
                        className="landing-page__illo"
                        alt="Profile"
                        src={me}
                      />
                    </Column>
                  </Grid>
                </TabPanel>

                <TabPanel>
                  <Grid className="tabs-group-content">
                    <Column
                      lg={16}
                      md={8}
                      sm={4}
                      className="landing-page__tab-content"
                    >
                      <StructuredListWrapper>
                        <StructuredListHead>
                          <StructuredListRow head>
                            <StructuredListCell head>
                              Achievement
                            </StructuredListCell>
                            <StructuredListCell head>
                              Details
                            </StructuredListCell>
                          </StructuredListRow>
                        </StructuredListHead>
                        <StructuredListBody>
                          <StructuredListRow>
                            <StructuredListCell>
                              MongoDB World Hackathon 2nd Place Winner
                            </StructuredListCell>
                            <StructuredListCell>
                              Together with{" "}
                              <CarbonLink
                                href="https://github.com/avik-singha/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Avik Singha
                              </CarbonLink>{" "}
                              and{" "}
                              <CarbonLink
                                href="https://github.com/sucheta21"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Sucheta Singa
                              </CarbonLink>
                              {", "}I built 'Good News' - a web app showcasing
                              positive news from all over the world using the
                              GDELT dataset. This submission won us 2nd place
                              out of over 600 participants in the virtual,
                              worldwide hackathon. See{" "}
                              <CarbonLink
                                href="https://bit.ly/3bZwbOI"
                                target="_blank"
                                rel="noopener noreferrer"
                                renderIcon={Launch}
                              >
                                more
                              </CarbonLink>
                            </StructuredListCell>
                          </StructuredListRow>
                          <StructuredListRow>
                            <StructuredListCell>
                              Open Source Contributor @ IBM Call For Code For
                              Racial Justice
                            </StructuredListCell>
                            <StructuredListCell>
                              Contributor to{" "}
                              <CarbonLink
                                href="https://developer.ibm.com/callforcode/racial-justice/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                IBM's Call for Code for Racial Justice Open
                                Source Projects
                              </CarbonLink>{" "}
                              including the Truth Loop project mostly
                              contributing in areas of i18n and a11y. Was also a
                              demo day speaker during Hacktoberfest 2021. See{" "}
                              <CarbonLink
                                href="https://bit.ly/3IA8QPW"
                                target="_blank"
                                rel="noopener noreferrer"
                                renderIcon={Launch}
                              >
                                more
                              </CarbonLink>
                            </StructuredListCell>
                          </StructuredListRow>
                        </StructuredListBody>
                      </StructuredListWrapper>
                    </Column>
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <Grid className="tabs-group-content">
                    <Column
                      lg={16}
                      md={8}
                      sm={4}
                      className="landing-page__tab-content"
                    >
                      <StructuredListWrapper>
                        <StructuredListHead>
                          <StructuredListRow head>
                            <StructuredListCell head>Role</StructuredListCell>
                            <StructuredListCell head>
                              Company
                            </StructuredListCell>
                            <StructuredListCell head>
                              Timeline
                            </StructuredListCell>
                            <StructuredListCell head>
                              Description
                            </StructuredListCell>
                          </StructuredListRow>
                        </StructuredListHead>
                        <StructuredListBody>
                          <StructuredListRow>
                            <StructuredListCell>
                              Frontend Developer
                            </StructuredListCell>
                            <StructuredListCell>
                              <p className="landing-page__span">HelloHub</p>
                              <p className="landing-page__location">
                                London, UK - Remote
                              </p>
                            </StructuredListCell>
                            <StructuredListCell>
                              02.2022 - Present
                            </StructuredListCell>
                            <StructuredListCell className="landing-page__cell">
                              <Column lg={16} md={8} sm={4}>
                                Working on the frontend of HelloHub's suite of
                                applications along with an international team.
                              </Column>
                              <Column lg={16} md={8} sm={4}>
                                <span className="landing-page__cell-span">
                                  Technologies:{" "}
                                </span>
                                MVVM Architectural Pattern, React, TypeScript,
                                JavaScript, Styled components, React Testing
                                Library, Jest, Storybook.js.
                              </Column>
                            </StructuredListCell>
                          </StructuredListRow>
                          <StructuredListRow>
                            <StructuredListCell>
                              Web Development Intern (Frontend)
                            </StructuredListCell>
                            <StructuredListCell>
                              <p className="landing-page__span">Zuri</p>
                              <p className="landing-page__location">
                                Nigeria - Remote
                              </p>
                            </StructuredListCell>
                            <StructuredListCell>
                              03.2021 - 07.2021
                            </StructuredListCell>
                            <StructuredListCell>
                              Virtual internsip program. Practiced HTML, CSS,
                              Bootstrap, JavaScript, Gulp and collaborated with
                              team members using AGILE software methodology to
                              create a web application to manage leasing.
                            </StructuredListCell>
                          </StructuredListRow>
                        </StructuredListBody>
                      </StructuredListWrapper>
                      <Button
                        renderIcon={DocumentDownload}
                        onClick={() => downloadResume(url, "john_resume")}
                      >
                        Download Resume
                      </Button>
                    </Column>
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <Grid className="tabs-group-content">
                    <Column
                      lg={16}
                      md={8}
                      sm={4}
                      className="landing-page__tab-content"
                    >
                      <StructuredListWrapper>
                        <StructuredListHead>
                          <StructuredListRow head>
                            <StructuredListCell head>
                              Certificate
                            </StructuredListCell>
                            <StructuredListCell head>Issuer</StructuredListCell>
                            <StructuredListCell head>
                              Timeline
                            </StructuredListCell>
                            <StructuredListCell head>Link</StructuredListCell>
                          </StructuredListRow>
                        </StructuredListHead>
                        <StructuredListBody>
                          <StructuredListRow>
                            <StructuredListCell>
                              Azure AI Engineer Associate
                            </StructuredListCell>
                            <StructuredListCell>Microsoft</StructuredListCell>
                            <StructuredListCell>
                              09/2021 - 09/2023
                            </StructuredListCell>
                            <StructuredListCell>
                              <CarbonLink
                                href="https://bit.ly/azureAIEngineer"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                https://bit.ly/azureAIEngineer
                              </CarbonLink>
                            </StructuredListCell>
                          </StructuredListRow>
                          <StructuredListRow>
                            <StructuredListCell>
                              Carbon Design System Developer Essentials - React
                            </StructuredListCell>
                            <StructuredListCell>IBM</StructuredListCell>
                            <StructuredListCell>
                              10/2021 - Present
                            </StructuredListCell>
                            <StructuredListCell>
                              <CarbonLink
                                href="https://bit.ly/3Fbv8oW"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                https://bit.ly/3Fbv8oW
                              </CarbonLink>
                            </StructuredListCell>
                          </StructuredListRow>
                          <StructuredListRow>
                            <StructuredListCell>
                              Responsive Web Design Certiﬁcate
                            </StructuredListCell>
                            <StructuredListCell>
                              freeCodeCamp
                            </StructuredListCell>
                            <StructuredListCell>
                              11/2020 - Present
                            </StructuredListCell>
                            <StructuredListCell>
                              <CarbonLink
                                href="https://bit.ly/3C4UL8I"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                https://bit.ly/3C4UL8I
                              </CarbonLink>
                            </StructuredListCell>
                          </StructuredListRow>
                          <StructuredListRow>
                            <StructuredListCell>
                              Introduction to Open Source
                            </StructuredListCell>
                            <StructuredListCell>IBM</StructuredListCell>
                            <StructuredListCell>
                              06/2021 - Present
                            </StructuredListCell>
                            <StructuredListCell>
                              <CarbonLink
                                href="https://bit.ly/3C7oON8"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                https://bit.ly/3C7oON8
                              </CarbonLink>
                            </StructuredListCell>
                          </StructuredListRow>
                          <StructuredListRow>
                            <StructuredListCell>
                              Google Cloud - Certiﬁcate of Course Completion
                            </StructuredListCell>
                            <StructuredListCell>Google</StructuredListCell>
                            <StructuredListCell>
                              02/2021 - Present
                            </StructuredListCell>
                            <StructuredListCell>
                              <CarbonLink
                                href="https://bit.ly/2YT7hKf"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                https://bit.ly/2YT7hKf
                              </CarbonLink>
                            </StructuredListCell>
                          </StructuredListRow>
                        </StructuredListBody>
                      </StructuredListWrapper>
                    </Column>
                  </Grid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
};

export default LandingPage;

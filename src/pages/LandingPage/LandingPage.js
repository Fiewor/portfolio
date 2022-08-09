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
} from "@carbon/react";
import { Link } from "react-router-dom";
import { LogoGithub, LogoLinkedin, LogoTwitter } from "@carbon/react/icons";

const LandingPage = () => {
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
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Grid className="tabs-group-content">
                    <Column
                      md={8}
                      lg={16}
                      sm={4}
                      className="landing-page__tab-content"
                    >
                      <h2 className="landing-page__subheading">Hi there,</h2>
                      <p className="landing-page__p">
                        My name is John Fiewor and I'm a MERN-Stack Developer.
                      </p>
                      <Button>Read more</Button>
                    </Column>
                    {/* <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                      <img
                        className="landing-page__illo"
                        src={`${process.env.PUBLIC_URL}/me.jpg`}
                        alt="Profile"
                      />
                    </Column> */}
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
                              I was part of an international, diverse team that
                              built ''Good News'' app a web app showing positive
                              news from all over the world. This submission won
                              us the 2nd place out of over 600 participants
                              worldwide. See: https://bit.ly/3bZwbOI
                            </StructuredListCell>
                          </StructuredListRow>
                          <StructuredListRow>
                            <StructuredListCell>
                              Open Source Contributor @ IBM Call For Code For
                              Racial Justice
                            </StructuredListCell>
                            <StructuredListCell>
                              I'm currently a contributor to IBM's Call for Code
                              for Racial Justice Open Source Projects including
                              the Truth Loop project and I mostly contribute in
                              areas of i18n and a11y. See:
                              https://bit.ly/3IA8QPW
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
                              Description
                            </StructuredListCell>
                          </StructuredListRow>
                        </StructuredListHead>
                        <StructuredListBody>
                          <StructuredListRow>
                            <StructuredListCell>
                              Frontend Developer - HelloHub
                            </StructuredListCell>
                            <StructuredListCell>
                              Working on the frontend of HelloHub's suite of
                              applications along with an international remote
                              team. Technologies: MVVM Architectural Pattern,
                              React, TypeScript, JavaScript, Styled components,
                              React Testing Library, Jest, Storybook.js.
                            </StructuredListCell>
                          </StructuredListRow>
                          <StructuredListRow>
                            <StructuredListCell>
                              Frontend Web Development Intern
                            </StructuredListCell>
                            <StructuredListCell>
                              Used HTML, CSS, Bootstrap, JS, Gulp and
                              collaborated with team members using AGILE
                              methodology to create a web application for
                              managing leasing.
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
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <Grid>
          <Column md={4} lg={4} sm={4}>
            <h3 className="landing-page__label">
              <Column md={8} lg={16} sm={4}>
                React + IBM Carbon = ❤️
              </Column>
              <Column md={8} lg={16} sm={4}>
                &copy; {new Date().getFullYear()}
              </Column>
            </h3>
          </Column>
          <Column md={4} lg={4} sm={4}>
            <Column md={8} lg={16} sm={4}>
              Social
            </Column>
            <Column md={8} lg={16} sm={4} className="landing-page__social">
              <LogoGithub size={24} />
              <LogoLinkedin size={24} />
              <LogoTwitter size={24} />
            </Column>
          </Column>
          <Column md={4} lg={4} sm={4}>
            Projects
          </Column>
          <Column md={4} lg={4} sm={4}>
            Blog
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
};

export default LandingPage;

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
import {
  LogoGithub,
  LogoLinkedin,
  LogoTwitter,
  LogoDiscord,
  Launch,
} from "@carbon/react/icons";

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
                        my name is <span>John Fiewor</span> and I'm a MERN-Stack
                        Developer.
                      </p>
                      <Button
                        renderIcon={Launch}
                        href="https://github.com/Fiewor"
                        target="_blank"
                      >
                        Read more
                      </Button>
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
                                href="https://github.com"
                                target="_blank"
                              >
                                Avik Singha
                              </CarbonLink>{" "}
                              and{" "}
                              <CarbonLink
                                href="https://github.com"
                                target="_blank"
                              >
                                Sucheta Sahid
                              </CarbonLink>
                              {", "}I built 'Good News' - a web app showcasing
                              positive news from all over the world using the
                              GDELT dataset. This submission won us 2nd place
                              out of over 600 participants in the virtual,
                              worldwide hackathon. See{" "}
                              <CarbonLink
                                href="https://bit.ly/3bZwbOI"
                                target="_blank"
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
                                href="https://ibmcallforcode.com"
                                target="_blank"
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
                              Description
                            </StructuredListCell>
                          </StructuredListRow>
                        </StructuredListHead>
                        <StructuredListBody>
                          <StructuredListRow>
                            <StructuredListCell>
                              Frontend Developer -{" "}
                              <span className="landing-page__cell-span">
                                HelloHub
                              </span>
                            </StructuredListCell>
                            <StructuredListCell className="landing-page__cell">
                              <Column lg={16} md={8} sm={4}>
                                Working on the frontend of HelloHub's suite of
                                applications along with an international remote
                                team.
                              </Column>
                              <Column lg={16} md={8} sm={4}>
                                Technologies: MVVM Architectural Pattern, React,
                                TypeScript, JavaScript, Styled components, React
                                Testing Library, Jest, Storybook.js.
                              </Column>
                            </StructuredListCell>
                          </StructuredListRow>
                          <StructuredListRow>
                            <StructuredListCell>
                              Frontend Web Development Intern -{" "}
                              <span className="landing-page__cell-span">
                                Zuri
                              </span>
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
                      <Button renderIcon={Launch}>Download Resume</Button>
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
          <Column md={2} lg={4} sm={2} className="landing-page__nested">
            <h3 className="landing-page__label">
              <Column
                md={8}
                lg={16}
                sm={4}
                className="landing-page__social_title"
              >
                React + IBM Carbon + ❤️
              </Column>
              <Column md={8} lg={16} sm={4}>
                &copy; {new Date().getFullYear()}
              </Column>
            </h3>
          </Column>

          <Column md={2} lg={4} sm={2} className="landing-page__nested">
            <Column
              md={4}
              lg={16}
              sm={4}
              className="landing-page__social_links"
            >
              <Grid className="social__subgrid">
                <Column md={2} lg={4} sm={2}>
                  <LogoGithub size={24} />
                </Column>
                <Column md={2} lg={4} sm={2}>
                  <LogoLinkedin size={24} />
                </Column>
                <Column md={2} lg={4} sm={2}>
                  <LogoTwitter size={24} />
                </Column>
                <Column md={2} lg={4} sm={2} href="https://discord.com">
                  <LogoDiscord size={24} />
                </Column>
              </Grid>
            </Column>
          </Column>

          <Column md={2} lg={4} sm={2}>
            <Link to="/projects" className="landing-page__footer">
              Projects
            </Link>
          </Column>

          <Column md={2} lg={4} sm={2}>
            <Link to="/about" className="landing-page__footer">
              About
            </Link>
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
};

export default LandingPage;

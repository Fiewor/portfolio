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
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  UnorderedList,
  ListItem,
  Link as CarbonLink,
} from "@carbon/react";
import { Link } from "react-router-dom";
import {
  achievements,
  certificates,
  education,
  experience,
  publications,
  researchArtifacts,
  researchInterests,
  teaching,
} from "./data.js";

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
          data-text="John Ogheneruese Fiewor"
          className={`${glitchActive ? "glitch" : ""} landing-page__heading`}
        >
          John Ogheneruese Fiewor
        </h1>
        <p className="landing-page__tagline">
          AI Engineer · Founder, GradrAI · AI in Education Researcher
        </p>
      </Column>

      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs>
          <TabList aria-label="Tab navigation" className="tabs-group">
            <Tab>Intro</Tab>
            <Tab>Education</Tab>
            <Tab>Research</Tab>
            <Tab>Experience</Tab>
            <Tab>Achievements</Tab>
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
                  <h2 className="landing-page__subheading">About</h2>
                  <p className="landing-page__p">
                    I'm an AI engineer and the founder of GradrAI, working on
                    trustworthy AI-assisted assessment for African classrooms.
                  </p>
                  <p className="landing-page__p">
                    My work focuses on end-to-end assessment pipelines:
                    paper-based exam digitisation, rubric-grounded grading,
                    teacher-in-the-loop review, code-switched oral verification,
                    and offline execution for low-connectivity settings. I'm
                    especially interested in systems that preserve teacher
                    authority while making assessment more scalable, auditable,
                    and accessible.
                  </p>
                  <Button
                    renderIcon={Launch}
                    href="/John_Fiewor_Academic_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read my academic CV
                  </Button>
                </Column>
                <Column
                  md={4}
                  lg={{ span: 8, offset: 8 }}
                  sm={4}
                  className="landing-page--image-container"
                >
                  <img className="landing-page__illo" alt="John Fiewor" src={me} />
                </Column>
              </Grid>
            </TabPanel>

            <TabPanel>
              <div className="tabs-group-content">
                <StructuredListWrapper>
                  <StructuredListHead>
                    <StructuredListRow head>
                      <StructuredListCell head>Degree</StructuredListCell>
                      <StructuredListCell head>Institution</StructuredListCell>
                      <StructuredListCell head>Period</StructuredListCell>
                      <StructuredListCell head>Grade</StructuredListCell>
                    </StructuredListRow>
                  </StructuredListHead>
                  <StructuredListBody>
                    {education.map((item) => (
                      <StructuredListRow key={item.degree}>
                        <StructuredListCell>
                          <strong>{item.degree}</strong>
                        </StructuredListCell>
                        <StructuredListCell>{item.institution}</StructuredListCell>
                        <StructuredListCell>{item.period}</StructuredListCell>
                        <StructuredListCell>{item.grade}</StructuredListCell>
                      </StructuredListRow>
                    ))}
                  </StructuredListBody>
                </StructuredListWrapper>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tabs-group-content">
                <h2 className="landing-page__section-title">
                  Research interests
                </h2>
                <UnorderedList className="landing-page__interests">
                  {researchInterests.map((interest) => (
                    <ListItem key={interest}>{interest}</ListItem>
                  ))}
                </UnorderedList>

                <h2 className="landing-page__section-title">
                  Peer-reviewed workshop papers
                </h2>
                {publications.map((paper) => (
                  <article key={paper.title} className="landing-page__publication">
                    <h3 className="landing-page__publication-title">
                      {paper.title}
                    </h3>
                    <p className="landing-page__publication-meta">
                      {paper.authors} · {paper.venue}
                    </p>
                    <p className="landing-page__publication-summary">
                      {paper.summary}
                    </p>
                    <CarbonLink
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      renderIcon={Launch}
                    >
                      {paper.linkLabel}
                    </CarbonLink>
                  </article>
                ))}

                <h2 className="landing-page__section-title">
                  Datasets & write-ups
                </h2>
                <StructuredListWrapper>
                  <StructuredListHead>
                    <StructuredListRow head>
                      <StructuredListCell head>Artifact</StructuredListCell>
                      <StructuredListCell head>Type</StructuredListCell>
                      <StructuredListCell head>Description</StructuredListCell>
                    </StructuredListRow>
                  </StructuredListHead>
                  <StructuredListBody>
                    {researchArtifacts.map((item) => (
                      <StructuredListRow key={item.link}>
                        <StructuredListCell>
                          <CarbonLink
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.name}
                          </CarbonLink>
                        </StructuredListCell>
                        <StructuredListCell>{item.type}</StructuredListCell>
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
                      <StructuredListCell head>Role</StructuredListCell>
                      <StructuredListCell head>
                        Company | Timeline
                      </StructuredListCell>
                      <StructuredListCell head>Description</StructuredListCell>
                    </StructuredListRow>
                  </StructuredListHead>
                  <StructuredListBody>
                    {experience.map((item) => (
                      <StructuredListRow key={`${item.company}-${item.role}`}>
                        <StructuredListCell>
                          <strong>{item.role}</strong>
                        </StructuredListCell>
                        <StructuredListCell>
                          {item.company} | {item.timeline}
                        </StructuredListCell>
                        <StructuredListCell>
                          {item.description}
                        </StructuredListCell>
                      </StructuredListRow>
                    ))}
                  </StructuredListBody>
                </StructuredListWrapper>

                <h2 className="landing-page__section-title">
                  Teaching & mentoring
                </h2>
                <StructuredListWrapper>
                  <StructuredListHead>
                    <StructuredListRow head>
                      <StructuredListCell head>Role</StructuredListCell>
                      <StructuredListCell head>
                        Organisation | Timeline
                      </StructuredListCell>
                      <StructuredListCell head>Description</StructuredListCell>
                    </StructuredListRow>
                  </StructuredListHead>
                  <StructuredListBody>
                    {teaching.map((item) => (
                      <StructuredListRow key={item.role}>
                        <StructuredListCell>
                          <strong>{item.role}</strong>
                        </StructuredListCell>
                        <StructuredListCell>
                          {item.organisation} | {item.timeline}
                        </StructuredListCell>
                        <StructuredListCell>
                          {item.description}
                        </StructuredListCell>
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
                      <StructuredListCell head>Achievement</StructuredListCell>
                      <StructuredListCell head>Details</StructuredListCell>
                    </StructuredListRow>
                  </StructuredListHead>
                  <StructuredListBody>
                    {achievements.map((item) => (
                      <StructuredListRow key={item.title}>
                        <StructuredListCell>
                          <strong>{item.title}</strong>
                        </StructuredListCell>
                        <StructuredListCell>
                          {item.details}
                          {item.link && (
                            <>
                              {" "}
                              <CarbonLink
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                inline
                              >
                                {item.linkLabel}
                              </CarbonLink>
                            </>
                          )}
                        </StructuredListCell>
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
                    {certificates.map((item) => (
                      <StructuredListRow key={item.name}>
                        <StructuredListCell>
                          <strong>{item.name}</strong>
                        </StructuredListCell>
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

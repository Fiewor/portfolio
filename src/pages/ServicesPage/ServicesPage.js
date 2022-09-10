import React from "react";
import { Link } from "react-router-dom";
import {
  UnorderedList,
  ListItem,
  Grid,
  Column,
  Accordion,
  AccordionItem,
  Link as CarbonLink,
} from "@carbon/react";

const ServicesPage = () => {
  return (
    <Grid className="" fullWidth>
      <Column lg={16} md={8} sm={4} className="">
        <h3 className="heading-text">
          Here are some of my professional services
        </h3>
        <UnorderedList className="list">
          <ListItem className="list-item">
            <p className="role">Frontend Development</p>
            <p className="detail">
              Have a product and want to build an impressive landing page or a
              modern, user-friendly frontend for your application?
            </p>
            <p className="detail-contact">
              Send me a{" "}
              <CarbonLink
                href="mailto:johnfiewor@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                mail
              </CarbonLink>{" "}
              or a short message on my <Link to="/contact">contact page</Link>.
            </p>
            <Accordion className="accordion">
              <AccordionItem title="Have questions about my stack and past projects? Read more">
                <p>
                  <span className="accordion-span">Stack:</span> React,
                  JavaScript, TypeScript, Redux, Storybook.js, CSS, SASS, Styled
                  Components, jQuery, EJS.
                </p>
                <p className="detail">
                  See projects <Link to="/projects">here</Link>
                </p>
              </AccordionItem>
            </Accordion>
          </ListItem>

          <ListItem className="list-item">
            <p className="role">Backend Development</p>
            <p className="detail-contact">
              Want to build a fast API-Driven application let's{" "}
              <CarbonLink
                href="mailto:johnfiewor@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                discuss
              </CarbonLink>
              .
            </p>
            <Accordion className="accordion">
              <AccordionItem title="Read more">
                <p>
                  <span className="accordion-span">Stack:</span> Node.js,
                  MongoDB, Mongoose, Serverless Functions, REST Architecture.
                </p>
              </AccordionItem>
            </Accordion>
          </ListItem>
          <ListItem className="list-item">
            <p className="role">A.I. Engineering</p>
            <p className="detail">
              Want to add speech capabilities to your existing application?
            </p>
            <p className="detail">
              Or extract insights from your video content?
            </p>
            <p className="detail">
              Upgrade your app to understand natural language and respond
              intuitively to users' text input?
            </p>
            <p className="detail">
              Extract key phrases and sentiment from text data?
            </p>
            <p className="detail">
              Embed a conversational bot into your communication channel?
            </p>
            <p className="detail">
              Upgrade your app's search functionality with cognitive
              superpowers?
            </p>
            <p className="detail-contact">
              Contact me via{" "}
              <CarbonLink
                href="mailto:johnfiewor@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                mail
              </CarbonLink>{" "}
              or drop a short message on my{" "}
              <Link to="/contact">contact page</Link>.
            </p>
            <Accordion className="accordion">
              <AccordionItem title="Read more">
                <p className="detail">
                  Microsoft Azure provides a suite of{" "}
                  <CarbonLink
                    href="https://azure.microsoft.com/en-us/services/cognitive-services/#overview"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    artificial intelligence services
                  </CarbonLink>{" "}
                  around Language, Speech and Vision which can be embedded into
                  web applications to bring a host of cognitive capabilities to
                  these applications.
                </p>
                <p className="detail">
                  <CarbonLink
                    href="https://docs.microsoft.com/en-us/azure/cognitive-services/what-are-cognitive-services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </CarbonLink>{" "}
                  about Azure's AI services.
                </p>
                <p>
                  As a certified Azure{" "}
                  <CarbonLink
                    href="https://www.credly.com/badges/6d245184-8173-40ce-a112-afb73572bbfb/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AI-Engineer
                  </CarbonLink>
                  , I help businesses build complete end-to-end AI solutions to
                  meet custom business needs.
                </p>
              </AccordionItem>
            </Accordion>
          </ListItem>
        </UnorderedList>
      </Column>
    </Grid>
  );
};

export default ServicesPage;

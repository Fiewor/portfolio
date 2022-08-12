import React from "react";
import { Grid, Column } from "@carbon/react";
import { Link } from "react-router-dom";
import {
  LogoGithub,
  LogoLinkedin,
  LogoTwitter,
  LogoDiscord,
} from "@carbon/react/icons";

const Footer = () => {
  return (
    <Grid className="footer" fullWidth>
      <Column lg={16} md={8} sm={4} className="footer__column">
        <Grid>
          <Column md={2} lg={4} sm={2} className="footer__nested">
            <h3 className="footer__label">
              <Column md={8} lg={16} sm={4} className="footer__social_title">
                React + IBM Carbon + ❤️
              </Column>
              <Column md={8} lg={16} sm={4}>
                &copy; {new Date().getFullYear()}
              </Column>
            </h3>
          </Column>

          <Column md={2} lg={4} sm={2} className="footer__nested">
            <Column md={4} lg={16} sm={4} className="footer__social_links">
              <Grid className="social-subgrid">
                <Column md={2} lg={4} sm={2}>
                  <a
                    className="social-subgrid__icon-container"
                    href="https://github.com/Fiewor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LogoGithub size={24} />
                  </a>
                </Column>
                <Column md={2} lg={4} sm={2}>
                  <a
                    className="social-subgrid__icon-container"
                    href="https://www.linkedin.com/in/john-fiewor-365484127/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LogoLinkedin size={24} />
                  </a>
                </Column>
                <Column md={2} lg={4} sm={2}>
                  <a
                    className="social-subgrid__icon-container"
                    href="https://twitter.com/the21st_pilot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LogoTwitter size={24} />
                  </a>
                </Column>
                <Column md={2} lg={4} sm={2} href="https://discord.com">
                  <a
                    className="social-subgrid__icon-container"
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LogoDiscord size={24} />
                  </a>
                </Column>
              </Grid>
            </Column>
          </Column>

          <Column md={2} lg={4} sm={2}>
            <Link to="/projects" className="footer__link">
              Projects
            </Link>
          </Column>

          <Column md={2} lg={4} sm={2}>
            <Link to="/about" className="footer__link">
              About
            </Link>
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
};

export default Footer;

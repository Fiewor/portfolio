import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from "@carbon/react";
import { LogoGithub, Home, Light, Asleep } from "@carbon/react/icons";
import { Link, useNavigate } from "react-router-dom";

const MainHeader = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Carbon Main">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName element={Link} to="/" prefix="">
            Fiewor
          </HeaderName>
          <HeaderNavigation aria-label="Carbon Main">
            <HeaderMenuItem element={Link} to="/projects">
              Projects
            </HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/contact">
              Contact
            </HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/services">
              Services
            </HeaderMenuItem>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem element={Link} to="/projects">
                  Projects
                </HeaderMenuItem>
                <HeaderMenuItem element={Link} to="/contact">
                  Contact
                </HeaderMenuItem>
                <HeaderMenuItem element={Link} to="/services">
                  Services
                </HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Toggle Theme"
              tooltipAlignment="center"
              onClick={toggleTheme}
            >
              {theme === "g100" ? <Light size={20} /> : <Asleep size={20} />}
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="Home"
              tooltipAlignment="center"
              onClick={() => navigate("/")}
            >
              <Home size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="Github"
              tooltipAlignment="end"
              onClick={() =>
                window.open(
                  "https://github.com/Fiewor",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <LogoGithub size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />
  );
};

export default MainHeader;

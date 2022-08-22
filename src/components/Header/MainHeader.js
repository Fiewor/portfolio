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
import { LogoGithub, Home, UserAvatar } from "@carbon/react/icons";
import { Link } from "react-router-dom";

const MainHeader = () => (
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
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Home" tooltipAlignment="center">
            <Link to="/">
              <Home size={20} element={Link} to="/" />
            </Link>
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Github" tooltipAlignment="end">
            <a
              className="social-subgrid__icon-container"
              href="https://github.com/Fiewor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoGithub size={20} />
            </a>
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default MainHeader;

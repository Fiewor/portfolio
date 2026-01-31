import React from "react";
import {
  TabPanel,
  Grid,
  Column,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
  StructuredListBody,
} from "@carbon/react";

const tabPanelContent = [
  {
    cellHead: ["Achievement", "Details"],
    cellBody: [
      {
        achievement: "MongoDB World Hackathon 2nd Place Winner",
        details:
          "Together with Avik Singha and Sucheta Singa, I built 'Good News' - a web app showcasing positive news from all over the world using the GDELT dataset. This submission won us 2nd place out of over 600 participants in the virtual, worldwide hackathon. See more",
      },
      {
        achievement:
          "Open Source Contributor @ IBM Call For Code For Racial Justice",
        details:
          "Contributor to IBM's Call for Code for Racial Justice Open Source Projects including the Truth Loop project mostly contributing in areas of i18n and a11y. Was also a demo day speaker during Hacktoberfest 2021. See more",
      },
    ],
  },
  {
    cellHead: ["Role", "Company | Timeline", "Description"],
    cellBody: [
      {
        role: "Frontend Developer",
        company: "HelloHub | 02.2022 - Present",
        description:
          "Working on the frontend of HelloHub's suite of applications along with an international remote team. Technologies: MVVM Architectural Pattern, React, TypeScript, JavaScript, Styled components, React Testing Library, Jest, Storybook.js.",
      },
      {
        role: "Frontend Web Development Intern",
        company: "Zuri | 03.2021 - 07.2021",
        description:
          "Used HTML, CSS, Bootstrap, JS, Gulp and collaborated with team members using AGILE methodology to create a web application for managing leasing.",
      },
    ],
  },
];

const TabPanelComponent = ({ tabPanelContent }) => {
  console.log("tabPanelContent", tabPanelContent);
  return (
    <TabPanel>
      <Grid>
        <Column lg={16} md={8} sm={4} className="landing-page__tab-content">
          <StructuredListWrapper>
            <StructuredListHead>
              <StructuredListRow head>
                {/* map through head and display text here */}
                {/* {cellHead.map((cellText) => {
                  return (
                    <StructuredListCell head>{cellText}</StructuredListCell>
                  );
                })} */}
              </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
              {/* map through body. create a new row */}
              <StructuredListRow>
                <StructuredListCell></StructuredListCell>
              </StructuredListRow>
            </StructuredListBody>
          </StructuredListWrapper>
        </Column>
      </Grid>
    </TabPanel>
  );
};

export default TabPanelComponent;

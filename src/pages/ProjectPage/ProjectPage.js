import React from "react";
import ProjectTile from "./ProjectTile";
import { Grid, Column, Button } from "@carbon/react";
import starCard from "../../assets/star-card.PNG";
import aiGrader from "../../assets/ai-grader.png";
import goodNews from "../../assets/good-news.PNG";
import mollo from "../../assets/mollo.PNG";
import anyLease from "../../assets/anylease.PNG";

const ProjectPage = () => {
  // ? Which projects do I want to display:
  // AI-Grader
  // Good-news
  // Star-card
  const projects = [
    {
      id: "1",
      name: "AI-Grader",
      description:
        "Using Azure AI Cognitive services to grade handwritten PBTs.",
      image: aiGrader,
      live: "https://www.aigrader.live",
      repo: "https://github.com/Fiewor/ai-grader",
      alt: "ai-grader landing page",
      tags: [{ red: "Undergoing fixes" }, { green: "Live" }],
    },
    {
      id: "2",
      name: "GoodNews",
      description:
        "Web application displaying positive news from over 100 countries using GDELT dataset.",
      image: goodNews,
      live: "https://github.com/avik-singha/good-news",
      repo: "https://github.com/avik-singha/good-news",
      alt: "Good News app landing page",
      tags: [
        { purple: "Teamwork" },
        { gray: "Not live" },
        { blue: "Hackathon" },
      ],
    },
    {
      id: "3",
      name: "Star-Card",
      description:
        " Web platform for real-time reporting and visibility into various workplace risks and hazards.",
      image: starCard,
      live: "https://star-card.us-south.cf.appdomain.cloud/",
      repo: "https://github.com/Fiewor/star-card",
      alt: "Star Card landing page",
      tags: [{ purple: "Teamwork" }, { green: "Live" }, { blue: "Hackathon" }],
    },
    {
      id: "4",
      name: "AnyLease",
      description:
        "Web application to help automate leasing. Final team project after virtual internship.",
      image: anyLease,
      live: "https://any-lease.netlify.app/",
      repo: "https://github.com",
      alt: "Anylease landing page",
      tags: [{ purple: "Teamwork" }, { green: "Live" }],
    },
  ];

  return (
    <>
      <Grid>
        {/* <Grid className="project__grid"> */}
        {projects.map(
          ({ id, name, description, image, live, repo, alt, tags }) => {
            return (
              <ProjectTile
                key={id}
                name={name}
                description={description}
                image={image}
                live={live}
                repo={repo}
                alt={alt}
                tags={tags}
              />
            );
          }
        )}
      </Grid>
      <Button
        href="https://github.com/Fiewor"
        target="_blank"
        rel="noopener noreferrer"
        className="project-button"
      >
        See more
      </Button>
    </>
  );
};

export default ProjectPage;

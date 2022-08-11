import React from "react";
import ProjectTile from "./ProjectTile";
import { Grid, Column, Button } from "@carbon/react";
import starCard from "../../assets/star-card.PNG";
import aiGrader from "../../assets/ai-grader.png";
import goodNews from "../../assets/good-news.PNG";

const ProjectPage = () => {
  // ? Which projects do I want to display:
  // AI-Grader
  // Good-news
  // Star-card
  const projects = [
    {
      id: "1",
      name: "AI-Grader",
      image: aiGrader,
      live: "https://www.aigrader.live",
      repo: "https://github.com/Fiewor/ai-grader",
      alt: "ai-grader landing page",
    },
    {
      id: "2",
      name: "GoodNews",
      image: goodNews,
      live: "https://github.com/avik-singha/good-news",
      repo: "https://github.com/avik-singha/good-news",
      alt: "Good News app landing page",
    },
    {
      id: "3",
      name: "Star-Card",
      image: starCard,
      live: "https://star-card.us-south.cf.appdomain.cloud/",
      repo: "https://github.com/Fiewor/star-card",
      alt: "Star Card landing page",
      // https://github.com/Fiewor/star-card
    },
  ];

  return (
    <>
      <Grid className="project__grid">
        {projects.map(({ id, name, image, live, repo, alt }) => {
          return (
            <ProjectTile
              key={id}
              name={name}
              image={image}
              live={live}
              repo={repo}
              alt={alt}
            />
          );
        })}
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

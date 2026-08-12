import React from "react";
import ProjectTile from "./ProjectTile";
import { Grid, Column, Button } from "@carbon/react";
import gradrAI from "../../assets/gradrai.png";
import goodNews from "../../assets/good-news.PNG";

const ProjectPage = () => {
  const projects = [
    {
      id: "1",
      name: "GradrAI",
      description:
        "End-to-end assessment platform for educators and schools — generate, deliver, grade, and analyse paper-based exams, CBTs, and AI-driven mock tests. Backed by Google for Startups and MongoDB for Startups. 3rd Place at the Google Gemini #BuildWithAI Hackathon.",
      image: gradrAI,
      live: "https://gradrai.com",
      alt: "GradrAI landing page",
      tags: [
        { purple: "Award Winner" },
        { green: "Live" },
        { blue: "AI/ML" },
      ],
    },
    {
      id: "2",
      name: "GoodNews",
      description:
        "Web application showcasing positive news from over 100 countries using the GDELT dataset. Won 2nd place out of 600+ participants at the MongoDB World Hackathon.",
      image: goodNews,
      live: "https://github.com/avik-singha/good-news",
      repo: "https://github.com/avik-singha/good-news",
      alt: "Good News app landing page",
      tags: [
        { purple: "Award Winner" },
        { blue: "Hackathon" },
        { teal: "MongoDB" },
      ],
    },
    {
      id: "3",
      name: "Hydrogen Storefront",
      description:
        "Headless Shopify storefront built with Hydrogen + Remix, featuring full product browsing, cart management, customer accounts, and predictive search. Deployed on Shopify Oxygen with CI/CD.",
      repo: "https://github.com/Fiewor/hydrogen-storefront",
      alt: "Hydrogen Storefront screenshot",
      tags: [
        { teal: "TypeScript" },
        { purple: "Shopify" },
        { cyan: "Remix" },
      ],
    },
    {
      id: "4",
      name: "ReaDoc",
      description:
        "AI document extraction tool that uses Google Gemini 1.5 Flash to extract text from uploaded images and export content to Word documents.",
      repo: "https://github.com/Fiewor/readoc",
      alt: "ReaDoc screenshot",
      tags: [
        { blue: "AI/ML" },
        { teal: "Next.js" },
        { magenta: "Gemini" },
      ],
    },
  ];

  return (
    <>
      <Grid>
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
        href="https://github.com/Fiewor?tab=repositories&sort=updated"
        target="_blank"
        rel="noopener noreferrer"
        className="project-button"
      >
        See more on GitHub
      </Button>
    </>
  );
};

export default ProjectPage;

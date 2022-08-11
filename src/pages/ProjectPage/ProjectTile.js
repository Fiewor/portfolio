import React from "react";
import { Grid, Column, Link } from "@carbon/react";

const ProjectTile = ({ name, image, live, repo, alt }) => {
  return (
    <Column md={8} lg={8} sm={4} className="project-tile__column">
      <p className="project-tile__title">{name}</p>
      <img className="project-tile-image" src={image} alt={alt} href={repo} />
      <Grid className="project-tile__grid">
        <Column md={2} lg={4} sm={2}>
          <Link href={live} target="_blank" rel="noopener noreferrer">
            Demo
          </Link>
        </Column>
        <Column md={2} lg={4} sm={2}>
          <Link href={repo} target="_blank" rel="noopener noreferrer">
            Repo
          </Link>
        </Column>
      </Grid>
    </Column>
  );
};

export default ProjectTile;

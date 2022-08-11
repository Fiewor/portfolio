import React from "react";
import { Grid, Column, Link, Tag } from "@carbon/react";

const ProjectTile = ({ name, description, image, live, repo, alt, tags }) => {
  return (
    <>
      {/* <Grid className="project-tile__grid"> */}
      <Column md={8} lg={8} sm={4} className="project-tile__column">
        <Grid className="project-tile__header">
          <Column md={4} lg={4} sm={4}>
            <p className="project-tile__title">{name}</p>
          </Column>

          <Column md={4} lg={4} sm={4} className="project-tile__tag-container">
            {tags.map((tag) => {
              const [[key, value] = []] = Object.entries(tag);
              return (
                <Tag
                  className="project-tile__tag"
                  type={key}
                  size="sm"
                  title="Clear Filter"
                  //  {...args}
                >
                  {value}
                </Tag>
              );
            })}
          </Column>
        </Grid>

        <p className="project-tile__description">{description}</p>

        <img className="project-tile-image" src={image} alt={alt} href={repo} />

        <Grid>
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
    </>
  );
};

export default ProjectTile;

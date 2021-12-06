import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import Project from "./Project";
import useStyles from "./projectStyles";
import maniacs from "../2021-09-21.png";

function Projects() {
  const classes = useStyles();

  return (
    <Container className={classes.container} id="projects">
      <Typography className={classes.head}>Some of my projects</Typography>
      <Box className={classes.imageBox}>
        <Project
          image={maniacs}
          link="https://maniacs-e-shop.netlify.app/"
          text="Ecommerce App"
        />
        <Project
          image={maniacs}
          link="https://maniacs-e-shop.netlify.app/"
          text="Ecommerce App"
        />
        <Project
          image={maniacs}
          link="https://maniacs-e-shop.netlify.app/"
          text="Ecommerce App"
        />
        <Project
          image={maniacs}
          link="https://maniacs-e-shop.netlify.app/"
          text="Ecommerce App"
        />
      </Box>
    </Container>
  );
}

export default Projects;

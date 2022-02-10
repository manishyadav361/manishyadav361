import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import Project from "./Project";
import useStyles from "./projectStyles";
import maniacs from "../images/2021-09-21.png";
import airbnb from "../images/airbnb.png";
import twitter from "../images/twitter.png";
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
          image={airbnb}
          link="https://maniacs-e-shop.netlify.app/"
          text="Voice Control Ecommerce App"
        />
        <Project
          image={airbnb}
          link="https://airbnb-clone-r79ik7jd5-manishyadav361.vercel.app/"
          text="Airbnb Clone UI"
        />
        <Project
          image={twitter}
          link="https://0vuzm.csb.app/"
          text="Twitter Clone UI"
        />
      </Box>
    </Container>
  );
}

export default Projects;

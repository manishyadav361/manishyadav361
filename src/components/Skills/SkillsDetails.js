import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./skillsStyles";
import html from "../images/html5.png";
import js from "../images/js.png";
import reactjs from "../images/react js.png";
import mui from "../images/mui.png";
import node from "../images/nodejs.png";
import git from "../images/github.jpg";

function SkillsDetails() {
  const classes = useStyles();
  return (
    <Container className={classes.detailContainer}>
      <Box className={classes.headBox}>
        <Typography className={classes.head}>Skills</Typography>
      </Box>
      <Box className={`${classes.skillSet} ${classes.second}`}>
        <Box className={classes.skill}>
          <img className={classes.image} src={html} alt="" />
          <Typography variant="">HTML</Typography>
        </Box>
        <Box className={classes.skill}>
          <img className={classes.image} src={js} alt="" />
          <Typography variant="" color="inherit">
            JS
          </Typography>
        </Box>
        <Box className={classes.skill}>
          <img className={classes.image} src={reactjs} alt="" />
          <Typography variant="" color="inherit">
            React JS
          </Typography>
        </Box>
        <Box className={classes.skill}>
          <img className={classes.image} src={mui} alt="" />
          <Typography variant="" color="inherit">
            Material UI
          </Typography>
        </Box>
        <Box className={classes.skill}>
          <img className={classes.image} src={node} alt="" />
          <Typography variant="" color="inherit">
            Node JS
          </Typography>
        </Box>
        <Box className={classes.skill}>
          <img className={classes.image} src={git} alt="" />
          <Typography variant="" color="inherit">
            Github
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default SkillsDetails;

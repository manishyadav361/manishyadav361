import { Container } from "@material-ui/core";
import React from "react";
import Template from "./Template";
import useStyles from "./skillsStyles";
import SkillsDetails from "./SkillsDetails";

function Skills() {
  const classes = useStyles();

  return (
    <Container className={classes.main_container} id="skills">
      <Template
        head="Education"
        detail1="St. Gonsalo Garcia College vasai,India"
        detail2="Bachelor's Degree, Computer Science •May 2022"
      />
      <Template
        head="Work"
        detail1="St. Gonsalo Garcia College vasai,India"
        detail2="Bachelor's Degree, Computer Science •May 2022"
      />
      <SkillsDetails />
    </Container>
  );
}

export default Skills;

import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./aboutStyles";

function About() {
  const classes = useStyles();

  return (
    <Container fixed className={classes.about} id="about">
      <Box className={classes.imageBox}>
        <img
          className={classes.image}
          src="https://manish-yadav-361.netlify.app/images/profilepic.jpg"
          alt=""
        />
      </Box>
      <div className={classes.contentBox}>
        <Box className={classes.box}>
          <Typography className={classes.head}>About Me</Typography>
          <Typography variant="caption" className={classes.info}>
            Hi there! I am Manish! You might also know me as PAPA React. I've
            been coding for last 5 months now.Currently i am student, I build
            different web apps which helps me to improve my skills and learning
            different technologies.
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.head}>Contact Details</Typography>
          <Typography
            className={classes.info}
            variant="caption"
            display="inline"
          >
            Manishkumar Yadav <br />
            Ec/50 A/302 Sai Suman Mumbai
            <br />
            Maharashta,401208
            <br /> +91 8830209970
            <br /> manishyadav361my@gmail.com
          </Typography>
        </Box>
      </div>
    </Container>
  );
}

export default About;

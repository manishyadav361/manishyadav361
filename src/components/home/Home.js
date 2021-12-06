import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./homeStyles";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
function Home() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.name}>MANISHKUMAR YADAV</Typography>
      <Typography className={classes.place}>Based in Mumbai</Typography>
      <Box className={classes.social}>
        <a className={classes.link} href="https://github.com/manishyadav361">
          <GitHubIcon />
        </a>
        <a
          className={classes.link}
          href="https://www.facebook.com/profile.php?id=100007703442151"
        >
          <FacebookIcon />
        </a>
        <a
          className={classes.link}
          href="https://www.instagram.com/manishyadav361/"
        >
          <InstagramIcon />
        </a>
      </Box>
    </Container>
  );
}

export default Home;

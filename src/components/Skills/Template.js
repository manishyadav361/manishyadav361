import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
// import SkillsDetails from "./SkillsDetails";
import useStyles from "./skillsStyles";

function Template({ head, detail1, detail2, SkillsDetails }) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box className={classes.template}>
        <Box className={classes.headBox}>
          <Typography className={classes.head}>{head}</Typography>
        </Box>
        <Box className={`${classes.right} ${classes.second}`}>
          <Typography className={classes.detail1}>{detail1}</Typography>
          <Typography className={classes.detail2}>{detail2}</Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Template;

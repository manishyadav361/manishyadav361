import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./skillsStyles";

function Bar({ title, percentage }) {
  const classes = useStyles();
  return (
    <Container className={classes.barContainer}>
      <Box>
        <Typography className={classes.detail1}>{title}</Typography>
      </Box>
      <Box className={classes.bars}>
        <div className={classes.div1}></div>
        <div className={classes.div2} style={{ width: `${percentage}%` }}></div>
      </Box>
    </Container>
  );
}

export default Bar;

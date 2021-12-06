import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import Bar from "./Bar";
import useStyles from "./skillsStyles";

function SkillsDetails() {
  const classes = useStyles();
  return (
    <Container className={classes.detailContainer}>
      <Box className={classes.headBox}>
        <Typography className={classes.head}>Skills</Typography>
      </Box>
      <Box className={classes.second}>
        <Box>
          <Bar percentage={30} title="Javascript" />
        </Box>
        <Box>
          <Bar percentage={10} title="React Js" />
        </Box>
        <Box>
          <Bar percentage={10} title="Material UI" />
        </Box>
        <Box>
          <Bar percentage={10} title="Node Js" />
        </Box>
        <Box>
          <Bar percentage={10} title="GitHub" />
        </Box>
      </Box>
    </Container>
  );
}

export default SkillsDetails;

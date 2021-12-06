import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./projectStyles";
import InsertLinkIcon from "@material-ui/icons/InsertLink";

function Project({ image, text, link }) {
  const classes = useStyles();
  const [visible, setVisible] = React.useState(false);
  return (
    <a href={link} className={classes.a}>
      <Box
        className={classes.image}
        style={{
          background: `url(${image})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "contain",
        }}
        onMouseEnter={() => setVisible(!visible)}
        onMouseLeave={() => setVisible(!visible)}
      >
        <Typography
          className={
            visible ? `${classes.visible} ${classes.text}` : `${classes.text}`
          }
        >
          {text}
          <InsertLinkIcon />
        </Typography>
      </Box>
    </a>
  );
}

export default Project;

import { Box, Container, IconButton, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./headerStyles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
function Header() {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  React.useEffect(() => {
    if (window.screenTop == 2) {
      console.log(window.screenTop);
    }
  }, []);

  return (
    <Container className={`${classes.container}`}>
      {toggle ? (
        <IconButton
          className={classes.btn}
          onClick={handleToggle}
          onMouseEnter={handleToggle}
        >
          <CloseIcon />
        </IconButton>
      ) : (
        <IconButton
          className={classes.btn}
          onClick={handleToggle}
          onMouseEnter={handleToggle}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Box
        className={
          !toggle ? `${classes.box}` : `${classes.box} ${classes.show}`
        }
      >
        <Typography className={`${classes.typography}`}>
          <a onClick={handleToggle} href="#home" className={classes.link}>
            HOME
          </a>
        </Typography>
        <Typography className={`${classes.typography}`}>
          <a onClick={handleToggle} href="#about" className={classes.link}>
            ABOUT
          </a>
        </Typography>
        <Typography className={`${classes.typography}`}>
          <a onClick={handleToggle} href="#contact" className={classes.link}>
            CONTACT
          </a>
        </Typography>
        <Typography className={`${classes.typography}`}>
          <a onClick={handleToggle} href="#skills" className={classes.link}>
            SKILLS
          </a>
        </Typography>
        <Typography className={`${classes.typography}`}>
          <a onClick={handleToggle} href="#projects" className={classes.link}>
            PROJECTS
          </a>
        </Typography>
      </Box>
    </Container>
  );
}

export default Header;

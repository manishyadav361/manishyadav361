import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  box: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      top: "0%",
      left: "0%",
      width: "200px",
      height: "100vh",
      display: "flex",
      padding: "50px 24px",
      position: "fixed",
      flexDirection: "column",
      justifyContent: "flex-start",
      background: "rgba(0,0,0,0.9)",
      transform: "translateX(-100%)",
      transition: "all 0.25s ease-in-out",
    },
  },
  show: {
    transform: "translateX(0%)",
  },
  btn: {
    color: "white",
    display: "none",
    marginTop: "10px",
    borderRadius: "10px",
    background: "rgba(0,0,0,0.4)",
    [theme.breakpoints.down("sm")]: {
      zIndex: "101",
      display: "block",
    },
  },
  container: {
    top: "0%",
    left: "0%",
    minWidth: "100%",
    position: "fixed",
    zIndex: "100",
  },
  typography: {
    color: "white",
    padding: "10px",
    fontSize: "18px",
    cursor: "pointer",
    letterSpacing: "1px",
    transition: "0.3s ease-in",
    fontFamily: `"Rajdhani",sans-serif`,
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
      "&:hover": {
        color: "white",
      },
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "rgba(255,215,0,0.9)",
      transition: "all 0.4s ease-out",
    },
  },
}));

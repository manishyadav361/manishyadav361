import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    padding: "30px 0px",
    width: "100%",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
      padding: "0",
      borderBottom: "none",
    },
  },
  template: {
    display: "flex",
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  main_container: {
    padding: "50px 40px",
    display: "flex",
    flexDirection: "column",
  },
  detailContainer: {
    padding: "30px 0",
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",
      padding: "0",
    },
  },

  barContainer: {
    padding: "0",
    display: "flex",
    flexDirection: "column",
    minWidth: "100%",

    flex: "1",
    [theme.breakpoints.down("sm")]: {},
  },
  head: {
    marginBottom: "20px",
    fontSize: "20px",
    width: "30%",
    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: "24px",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: "24px",
    },

    [theme.breakpoints.down("sm")]: {
      borderBottom: "1px solid rgba(0,0,0,0.2)",
    },
  },

  div1: {
    width: "100%",
    height: "30px",
    background: "rgba(0,0,0,0.4)",
    borderRadius: "5px  5px",
  },
  div2: {
    height: "30px",
    width: "100%",
    background: "rgba(0,0,0,0.8)",
    position: "absolute",
    // zIndex: "10",
    borderRadius: "5px 0px 0px 5px",
  },
  bars: {
    display: "flex",
    position: "relative",
    zIndex: "-1",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  detail1: {
    color: "rgba(0,0,0,0.8)",
    fontWeight: "medium",
    fontSize: "18px",
    [theme.breakpoints.up("lg")]: {
      fontSize: "22px",
    },
  },
  detail2: {
    color: "rgba(0,0,0,0.6)",
    fontSize: "14px",

    [theme.breakpoints.up("lg")]: {
      fontSize: "18px",
    },
  },
  headBox: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
  },
  second: {
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: "0px",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "20px",
    },
  },
}));

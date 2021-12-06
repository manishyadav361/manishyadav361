import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  a: { zIndex: "-1" },
  container: {
    marginLeft: "0",
    marginRight: "0",

    minWidth: "100%",
    background: "rgba(128,128,128,0.1)",
    display: "flex",
    flexDirection: "column",
    padding: "40px 0",
    [theme.breakpoints.up("md")]: {
      padding: "50px 0px",
    },
    zIndex: "-1",
  },
  head: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "rgba(0,0,0,0.8)",
  },
  image: {
    boxShadow: `10px 10px 30px rgba(0,0,0,0.5)`,
    background: "white",
    padding: "0",
    objectFit: "contain",
    position: "relative",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "200px",
      margin: "20px auto",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "0px 30px",
    },
    [theme.breakpoints.up("md")]: {
      minWidth: "300px",
      minHeight: "200px",
    },
    margin: "0px 30px",
    minWidth: "300px",
    minHeight: "200px",
  },
  imageBox: {
    [theme.breakpoints.up("sm")]: {
      width: "90%",

      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      overflowX: "scroll",
      flexWrap: "nowrap",
      zIndex: "1",
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  text: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",

    justifyContent: "center",
    visibility: "hidden",
    textDecoration: "none",

    background: "rgba(0,0,0,0.6)",
    transition: "all 0.2s ease-in",
    color: "white",
    fontSize: "16px",

    [theme.breakpoints.up("md")]: {
      minWidth: "300px",
      minHeight: "200px",
    },
    cursor: "pointer",
  },
  visible: {
    visibility: "visible",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
}));

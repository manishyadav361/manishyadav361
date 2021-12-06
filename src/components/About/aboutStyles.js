import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  about: {
    minWidth: "100%",
    margin: "0",
    padding: "30px 20px",
    display: "flex",
    background: "rgba(0,0,0,0.9)",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
    },
  },
  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginTop: "5px",
    [theme.breakpoints.down("sm")]: {
      width: "80px",
      height: "80px",
    },

    marginLeft: "40%",
    marginRight: "auto",
  },
  imageBox: {
    display: "flex",
    padding: "20px 0px ",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      padding: "10px",
      width: "100%",
    },
    width: "30%",
  },
  contentBox: {
    padding: "20px",
    height: "100%",
    width: "60%",
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: "0",
    },
  },
  box: {
    marginBottom: "20px",
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  head: {
    color: "rgb(255,255,255)",
    fontSize: "20px",
    marginBottom: "20px",
  },
  info: {
    color: "rgba(255,255,255,0.43)",
    marginBottom: "20px",
    width: "50%",
    overflow: "hidden",
    fontSize: "16px",
  },
  contact: {
    display: "flex",
    flexDirection: "column",
  },
}));

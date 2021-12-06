import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    height: "100%",
    minWidth: "100%",
    margin: "0px 0px",
    padding: "30px 0px",
    background: "rgba(0,0,0,0.95)",
  },
  box: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: "22px",
    fontWeight: "500",
  },
  form: {
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      height: "100%",
    },
  },
  textfield: {
    color: "white",
    width: "300px",
    borderRadius: "4px",
    margin: "20px auto",
    background: "rgba(255,255,255,0.1)",
    [theme.breakpoints.up("lg")]: {
      width: "300px",
      margin: "20px auto",
    },
  },
  button: {
    width: "200px",
    margin: "0 auto",
  },
  ipt: {
    color: "rgba(255,255,255,0.6)",
  },
}));

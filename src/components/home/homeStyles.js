import { makeStyles } from "@material-ui/core";
import Image from "../Desktop - 1.jpg";
export default makeStyles((theme) => ({
  container: {
    padding: "0",
    minHeight: "100vh",
    minWidth: "100%",
    // backgroundImage: `url(${Image})`,
    backgroundImage: `url(${"https://images.unsplash.com/photo-1539947257641-0f0e9f213528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"})`,
    objectFit: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.up("lg")]: {
      minWidth: "100%",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    margin: "auto",
  },
  name: {
    fontSize: "30px",
    // minWidth: "100%",
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
    textOverflow: "overflow",
  },
  place: {
    fontSize: "16px",
  },
  social: {
    display: "flex",
    alignItems: "center",
    margin: "10px",
    "&:hover": {
      color: "white",
    },
  },
  link: {
    textDecoration: "none",
    color: "grey",
    padding: "0px 10px",
  },
}));

import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { db } from "../../firebase.js";
import { collection, addDoc } from "firebase/firestore";
import useStyles from "./footerStyles";

function Footer() {
  const classes = useStyles();
  const dbRef = collection(db, "quotes");
  const [state, setState] = React.useState({
    name: "",
    email: "",
    quote: "",
  });
  const handleSubmit = async (e) => {
    if (state.name && state.email && state.quote) {
      await addDoc(dbRef, state)
        .then(() => {
          alert("thankyou for your feedback.");
        })
        .catch((e) => console.log(e.message));
      setState({ ...state, name: "", email: "", quote: "" });
    } else {
      alert("Please enter a valid input...");
    }
  };

  return (
    <Container className={classes.container} id="contact">
      <Box className={classes.box}>
        <Typography className={classes.text}>Contact Me</Typography>
      </Box>
      <FormControl error={true} className={classes.form}>
        <TextField
          className={classes.textfield}
          label="Name"
          variant="filled"
          InputProps={{
            className: classes.ipt,
          }}
          InputLabelProps={{
            className: classes.ipt,
          }}
          required={true}
          onChange={(e) => setState({ ...state, name: e.target.value })}
          value={state.name}
        />
        <TextField
          className={classes.textfield}
          label="Email"
          variant="filled"
          InputProps={{
            className: classes.ipt,
          }}
          InputLabelProps={{
            className: classes.ipt,
          }}
          required={true}
          type="email"
          onChange={(e) => setState({ ...state, email: e.target.value })}
          value={state.email}
        />
        <TextField
          className={classes.textfield}
          size="small"
          multiline
          minRows={4}
          label="Quote"
          variant="filled"
          InputProps={{
            className: classes.ipt,
          }}
          InputLabelProps={{
            className: classes.ipt,
          }}
          required={true}
          onChange={(e) => setState({ ...state, quote: e.target.value })}
          value={state.quote}
        />
        <Button
          className={classes.button}
          // type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </FormControl>
    </Container>
  );
}

export default Footer;

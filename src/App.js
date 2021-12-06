import "./AppStyles.js";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import useStyles from "./AppStyles";
import About from "./components/About/About.js";
import Skills from "./components/Skills/Skills.js";
import Projects from "./components/Projects/Projects.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App} id="home">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

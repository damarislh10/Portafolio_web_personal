import { makeStyles } from "@material-ui/core";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { MyWork } from "../components/MyWork";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <About />
      <Skills />
      <MyWork />
      <Contact />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));
export default App;

import { About } from "../components/About";
import { BackgroundImage } from "../components/BackgroundImage";
import { Contact } from "../components/Contact";
import { MyWork } from "../components/MyWork";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About id="about" />
      <BackgroundImage/>
      <Skills id="skills" />
      <MyWork id="mywork" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
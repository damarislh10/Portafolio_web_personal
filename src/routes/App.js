import { About } from "../components/About";
import { BackgroundImage } from "../components/BackgroundImage";
import { Certifications } from "../components/Certifications";
import { Contact } from "../components/Contact";
import { MoreProject } from "../components/MoreProject";
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
      <Certifications id="certifications"/>
      <MyWork id="mywork" />
      <Contact id="contact" />
      <MoreProject/>
    </div>
  );
}

export default App;

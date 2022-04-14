import { About } from "../components/About";
import { BackgroundImage } from "../components/BackgroundImage";
import { Certifications } from "../components/Certifications";
import { Contact } from "../components/Contact";
import { MyWork } from "../components/MyWork";
import { Navbar } from "../components/Navbar";
import { NetworkSocial } from "../components/NetWorkSocial";
import { Skills } from "../components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About title="perfil" id="about" />
      <BackgroundImage/>
      <Skills title = "Habilidades" id="skills" />
      <Certifications title = "Certificaciones" id="certifications"/>
      <MyWork title = "Proyectos" id="mywork" />
      <Contact title = "Contactame" id="contact" />
      <NetworkSocial/>
    </div>
  );
}

export default App;

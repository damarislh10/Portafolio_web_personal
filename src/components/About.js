import React from "react";
import Typewriter from "typewriter-effect";
import "../styles/about.css";

export const About = () => {
  // .hero {
  //   position: relative;
  //   color: #fff;
  //   background: linear-gradient(to bottom,#ea19f1,#332179);
  //   background-attachment: fixed;

  return (
    <div className="container">
      <div className="containerAllAbout">
        <div className="container-about">
          <h1 className="titleName">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Hola, soy Damaris Hernandez").start();
              }}
            />
          </h1>
          <div className="container-description">
            <p className="text-description">
              Soy desarrolladora Front-end Jr, cuento con habilidades de
              resolución de problemas, capacidad de aprendizaje, trabajo en
              equipo, persistente y autodidacta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Typewriter from "typewriter-effect";
import "../styles/about.css";

export const About = ({ id }) => {
  return (
    <div className="container">
      <div className="containerAllAbout">
        <div className="container-about">
          <div className="classes.sectioncontent" id={id}></div>
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

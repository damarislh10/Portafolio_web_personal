import { Button } from "@material-ui/core";
import React from "react";
import "../styles/certifications.css";

export const Certifications = ({ id }) => {
  return (
    <div className="containerSkills">
      <div className="container-text">
        <div id={id}>
          <h1 className="title-main title-certification">Mis Certificaciones</h1>

          <div className="row row-certifications">
            <div className="col">
              <div className="container-col">
                <div className="geek">
                  <div className="containerImage" id="imageGeek">
                    <img 
                      className="imageGeek"
                      src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649700177/MyPortafolio/Logo-AG-2021_wivnqq_mfzbgg.png"
                      alt="logo"
                    />
                  </div>
                  <div className="container-text-certi">
                    <h3>Desarrollo frontend en ReactJs</h3>
                    <p className="text-resumen">
                      Bootcamp de desarrollo Web Front-End con énfasis en
                      ReactJS. Un entrenamiento basada en proyectos y en
                      sprints.
                    </p>
                     <Button
                      variant="outlined"
                      className="buttonWork btnSite"
                      href="https://drive.google.com/file/d/1xXiPgfhTco-5NycpXMG4HbXuHwm3ODLK/view"
                      target="_blank"
                    >
                      Ver credencial
                    </Button> 
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="container-col ">
                <div className="geek">
                  <div className="containerImage">
                    <img
                      className="imageGeek"
                      src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649702214/MyPortafolio/1200px-Logotipo_de_la_Universidad_Nacional_de_Colombia.svg_bfk4ed.png"
                      alt="logo"
                    />
                  </div>
                  <div className="container-text-certi">
                    <h3>
                      Misión TIC 2022 con profundización en desarrollo de
                      aplicaciones web.
                    </h3>
                    <p className="text-resumen">
                      Habilidades de programación con python, java, vue Js y
                      javascript.
                    </p>
                    <Button
                      variant="outlined"
                      className="buttonWork btnSite"
                      href="https://drive.google.com/file/d/1SqlkO9KxWnKDCKoKo37jIm5YImN3E06_/view"
                      target="_blank"
                    >
                      Ver credencial
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-certifications row-frecode">
            <div className="col col-freecode">
              <div className="container-col container-camp">
                <div className="geek">
                  <div className="containerImage">
                    <img
                      className="imageGeek"
                      src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649801484/MyPortafolio/logoFreecomcamp_3_qnsgyf.png"
                      alt="logo"
                    />
                  </div>
                  <div className="container-text-certi">
                    <h3>Responsive Web Design</h3>

                    <Button
                      variant="outlined"
                      className="buttonWork btnSite"
                      href="https://www.freecodecamp.org/certification/DamarisHernandez/responsive-web-design"
                      target="_blank"
                    >
                      Ver credencial
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-freecode">
              <div className="container-col container-camp-2">
                <div className="geek code-freecode">
                  <div className="containerImage">
                    <img
                      className="imageGeek"
                      src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649801484/MyPortafolio/logoFreecomcamp_3_qnsgyf.png"
                      alt="logo"
                    />
                  </div>
                  <div className="container-text-certi">
                    <h3>JavaScript Algorithms and Data Structures</h3>

                    {/* <Button
                      variant="outlined"
                      className="buttonWork btnSite"
                      href="https://drive.google.com/file/d/1SqlkO9KxWnKDCKoKo37jIm5YImN3E06_/view"
                      target="_blank"
                    >
                      Ver credencial
                    </Button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

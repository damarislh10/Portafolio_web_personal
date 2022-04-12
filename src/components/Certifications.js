import { Button } from "@material-ui/core";
import React from "react";
import "../styles/certifications.css";

export const Certifications = () => {
  return (
    <div className="containerSkills">
      <div className="container-text">
        <h1 className="title-main">Mis Certificaciones</h1>

        <div className="row">
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
                    Bootcamp, Desarrollo Web Front-End con énfasis en ReactJS.
                  </p>
                  <Button
                    variant="outlined"
                    className="buttonWork btnSite"
                    href="#"
                    target="_blank"
                  >
                    Ver credencial
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="container-col">
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
                    Habilidades de programación con python, java, vue Js y javascript.
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

        <div className="row">
          <div className="col col-freecode">
            <div className="container-col">
              <div className="geek">
                <div className="containerImage">
                  <img
                    className="imageGeek"
                    src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649703304/MyPortafolio/logoFreecomcamp-removebg-preview_nded5b.png"
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
            <div className="container-col">
              <div className="geek">
                <div className="containerImage">
                  <img
                    className="imageGeek"
                    src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649703304/MyPortafolio/logoFreecomcamp-removebg-preview_nded5b.png"
                    alt="logo"
                  />
                </div>
                <div className="container-text-certi">
                  <h3>JavaScript Algorithms and Data Structures</h3>

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
      </div>
    </div>
  );
};

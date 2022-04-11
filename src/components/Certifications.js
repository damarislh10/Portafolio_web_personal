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
                  <a href="#" target="_blank" rel="noreferrer">
                    Ver credencial
                  </a>
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
                    Habilidades de programación de misión TIC 2022 con
                    profundización en desarrollo de aplicaciones web.
                  </h3>
                  <a
                    href="https://drive.google.com/file/d/1SqlkO9KxWnKDCKoKo37jIm5YImN3E06_/view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver credencial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
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
                  <a href="https://www.freecodecamp.org/certification/DamarisHernandez/responsive-web-design" target="_blank" rel="noreferrer">
                    Ver credencial
                  </a>
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
                    src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649703304/MyPortafolio/logoFreecomcamp-removebg-preview_nded5b.png"
                    alt="logo"
                  />
                </div>
                <div className="container-text-certi">
                  <h3>
                  JavaScript Algorithms and Data Structures
                  </h3>
                  <a
                    href="https://drive.google.com/file/d/1SqlkO9KxWnKDCKoKo37jIm5YImN3E06_/view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver credencial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

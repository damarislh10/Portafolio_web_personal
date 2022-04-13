import React from "react";
import "../styles/skills.css";

export const Skills = () => {
  return (
    <div>
      <div className="containerSkills">
        <div className="container-text">
          <h1 className="title-main">Mis Skills</h1>
          <p>
            Estos son los lenguajes y tecnologías que manejo, de los cuales me
            interesa seguir aprendiendo.
          </p>
        </div>
        <div className="row">
          <div className="col container-text-certi">
            <h3 className="title-languaje">Lenguajes y Librerias</h3>
            <h4 className="stack">JavaScript</h4>
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649805664/MyPortafolio/icons8-javascript_1_n0awds.svg"
              alt="js"
            />

            <br />
            <h4 className="stack">React Js</h4>

            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649805966/MyPortafolio/icons8-reaccionar-nativo_afsdzv.svg"
              alt="react"
            />
            <br />
            <h4 className="stack">Redux</h4>

            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649806737/MyPortafolio/icons8-redux_2_m2vchu.svg"
              alt="redux"
            />
            <br />
            <h4 className="stack">Python</h4>
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649806902/MyPortafolio/icons8-python_hycqix.svg"
              alt="python"
            />
            <br />
          </div>
          <div className="col container-text-certi">
            <h3 className="title-languaje">Maquetado y estilos</h3>
            <h4 className="stack">Html</h4>
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649808024/MyPortafolio/icons8-html-5_1_djyxs0.svg"
              alt="html"
            />
            
            <br />
            <h4 className="stack">Css</h4>

            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649808324/MyPortafolio/icons8-css3_anj9ii.svg"
              alt="css"
            />
            <br />
            <h4 className="stack">Bootstrap</h4>

            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649809148/MyPortafolio/icons8-oreja_2_r0cdzr.svg"
              alt="boostrap"
            />
            <br />
            <h4 className="stack">Material UI</h4>

            <img

              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649809397/MyPortafolio/icons8-material-ui_fow95i.svg"
              alt="mui"
            />
            <br />
          </div>
          <div className="col container-text-certi">
            <h3 className="title-languaje">Bases de datos</h3>
            <h4 className="stack">MySql</h4>
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649810009/MyPortafolio/icons8-logo-de-mysql_gkx1gs.svg"
              alt="Mysql"
            />
            <br />
            <h4 className="stack">Firebase</h4>

            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649810177/MyPortafolio/icons8-firebase_ycx29e.svg"
              alt="firebase"
            />
            <br />
            <h4 className="stack">Mongo DB</h4>
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649810733/MyPortafolio/icons8-mongodb_1_jqzwis.svg"
              alt="mongoDb"
            />
          </div>
          <div className="col container-text-certi">
            <h3 className="title-languaje">Otras tecnologias</h3>
            <h4 className="stack">Git</h4>

            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649810897/MyPortafolio/icons8-git_vt92hr.svg"
              alt="Git"
            />
            <br />
            <h4 className="stack">Heroku</h4>

            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649811367/MyPortafolio/icons8-heroku_2_estnfu.svg"
              alt="heroku"
            />
            <br />
            <h4 className="stack">Figma</h4>
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649811494/MyPortafolio/icons8-figma_lqxbq6.svg"
              alt="figma"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

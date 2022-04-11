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
          <div className="col">
            <h3 className="title-languaje">Lenguajes y Frameworks</h3>
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649462535/MyPortafolio/javascript-icon-png-23_kgh9xf_uweywx.png"
              alt="js"
            />
            <br />
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649462558/MyPortafolio/7946470_nlwl4i_gwodxn.png"
              alt="react"
            />
            <br />
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649463908/MyPortafolio/redux-harmful_mervf5_jcmqeq.png"
              alt="redux"
            />
            <br />
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649464380/MyPortafolio/Python-Logo_pbadff.png"
              alt="python"
            />
            <br />
          </div>
          <div className="col">
            <h3 className="title-languaje">Maquetado y estilos</h3>
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649464492/MyPortafolio/IconoHtml_pkwr9y_khdiw0.png"
              alt="html"
            />
            <br />
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649465123/MyPortafolio/732190_oosjww_navrvb.png"
              alt="css"
            />
            <br />
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649465173/MyPortafolio/Bootstrap_logo.svg_clae9s_bbuhyg.png"
              alt="boostrap"
            />
            <br />
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649465234/MyPortafolio/material-ui_fyjtyg_w9je5q.png"
              alt="mui"
            />
            <br />
          </div>
          <div className="col">
            <h3 className="title-languaje">Bases de datos</h3>
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649465318/MyPortafolio/MySQL_mnnpzt_yiw3dm.png"
              alt="Mysql"
            />
            <br />
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649465424/MyPortafolio/firebase_sjyp2k_csaugk.png"
              alt="firebase"
            />
            <br />
            <img
              className="imageTech"
              src="https://victorroblesweb.es/wp-content/uploads/2016/11/mongodb.png"
              alt="mongoDb"
            />
          </div>
          <div className="col">
            <h3 className="title-languaje">Otras tecnologias</h3>
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649465737/MyPortafolio/logo_git_icon_fbd99p_s07qi0.png"
              alt="Git"
            />
            <br />
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649465875/MyPortafolio/1519905610801_uhnpfe.jpg"
              alt="heroku"
            />
            <br />
            <img
              className="imageTech"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649466170/MyPortafolio/descarga_1_feut0i_cjtuwx.png"
              alt="figma"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

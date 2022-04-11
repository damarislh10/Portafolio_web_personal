import React from "react";
import '../styles/myWork.css'

export const MyWork = () => {
  return (
    <div>
      <div className="container-text">
        <h1 className="title-main">Mis proyectos recientes</h1>
        <p>Aquí hay algunos proyectos en los que he trabajado recientemente.</p>
      </div>

      <div className="row">
        <div className="col">
          <div className="container-col-2">
            <div className="containerImageWork">
              <img className="imageProject" src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649705081/MyPortafolio/imagegestwork_dx4npx.png" />
            </div>
            <div className="">
              <h3>GestWork</h3>
              <p>Es poder tener un lugar de control para gestionar cada proceso; esto es indispensable para un mayor crecimiento y tener la posibilidad de darle visibilidad y prioridad a las solicitudes e ideas, con gestwork no hay espacio para pérdidas de información y así todo su equipo podrá mantenerse conectado en una misma red.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

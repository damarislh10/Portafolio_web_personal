import { Button } from "@material-ui/core";
import React from "react";
import "../styles/moreProject.css";

export const MoreProject = () => {
  return (
    <div>
      <div className="container-projects">
        <div className="row">
          <div className="col">
            <h2>Proyectos</h2>
          </div>

          <div className="col">
            <p>
              Si deseas ver mas de mis proyectos puedes hacer clic en el
              siguiente boton
            </p>
          </div>

          <div className="col">
            <Button className="btnMoreProject">Ir ahora</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

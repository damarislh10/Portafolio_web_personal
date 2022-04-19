import { Button } from "@mui/material";
import React from "react";
import "../styles/myWork.css";
import WebIcon from '@mui/icons-material/Web';

export const MyWork = ({ id }) => {
  return (
    <div className="containerSkills">
      <div className="container-text contain-work">
        <div id={id}>
          <h1 className="title-main title-work">Mis proyectos recientes</h1>
          <p className="text-skills">
            Aquí hay algunos proyectos en los que he trabajado recientemente.
          </p>
        </div>

        <div className="row">
          <div className="col">
            <div className="container-col-2">
              <div className="containerImageWork">
                <img
                  className="imageProject"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649816674/MyPortafolio/computerOriginal_c4sctz.jpg"
                  alt="imageProject"
                />
              </div>
              <div>
                <h2 className="titleProject">GestWork</h2>
                <p className="container-des-work parrafoApp">
                  Permite tener un lugar de control para gestionar cada proceso;
                  esto es indispensable para un mayor crecimiento y tener la
                  posibilidad de darle visibilidad y prioridad a las solicitudes
                  e ideas, con gestwork no hay espacio para pérdidas de
                  información y así todo su equipo podrá mantenerse conectado en
                  una misma red.
                </p>
                <div className="container-btnWork">
                  <Button
                    variant="contained"
                    className="buttonWork btnGit"
                    href="https://github.com/academia-geek/demo-day-projects-gestwork"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outlined"
                    className="buttonWork btnSite"
                    href="https://gestwork-bad1b.web.app/landing"
                    target="_blank"
                  >
                    Ver sitio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="container-col-2">
              <div className="containerImageWork">
                <img
                  className="imageProject"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649815765/MyPortafolio/computerOriginal_-_Copy_oeu7rc.jpg"
                  alt="imageProject"
                />
              </div>
              <div>
                <h2 className="titleProject">Daily Bits</h2>
                <p className="container-des-work parrafoApp">
                  App de aprendizaje de lenguajes de programación y diseño. Es
                  donde abra diferentes cuestionarios para saber el nivel de
                  conocmimientos que se cuenta, ademàs vera sus estadisticas,
                  perfil, y si es administrador vera el tablero con todos los
                  usuarios registrados en ello y sus estadisticas.
                </p>
                <div className="container-btnWork">
                  <Button
                    variant="contained"
                    className="buttonWork btnGit"
                    href="https://github.com/damarislh10/Daily-Bits"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outlined"
                    className="buttonWork btnSite"
                    href="https://frontend-sprint-2-damarislh10-ten.vercel.app/"
                    target="_blank"
                  >
                    Ver sitio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="container-col-2">
              <div className="containerImageWork">
                <img
                  className="imageProject"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649796387/MyPortafolio/computerPetsMascots_nuqrep.jpg"
                  alt="imageProject"
                />
              </div>
              <div className="">
                <h2 className="titleProject">Adopción de mascotas</h2>
                <p className="container-des-work parrafoApp">
                  La página de adopción de mascotas es una red social para
                  conectar a los usuarios con los dueños de las mascotas, se
                  podrá visualizar una lista de perros o gatos, Ver más a
                  detalle y agregar a favoritos como también ver Perfil y
                  Actualizar el usuario y una Simulación de opción de chat.
                </p>
                <div className="container-btnWork">
                  <Button
                    variant="contained"
                    className="buttonWork btnGit"
                    href="https://github.com/damarislh10/AdopcionMascotas"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outlined"
                    className="buttonWork btnSite"
                    href="https://frontend-sprint-1-damarislh10-seven.vercel.app/"
                    target="_blank"
                  >
                    Ver sitio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="container-col-2">
              <div className="containerImageWork">
                <img
                  className="imageProject imagemore"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1650153754/MyPortafolio/computerfotopage_-_Copy_f1va0e.jpg"
                  alt="imageProject"
                />
              </div>
              <div className="">
                <h2 className="titleProject">Más proyectos</h2>
                <p className="container-des-work parrafoApp">
                  Si deseas ver más de mis proyectos en los que he trabajado < WebIcon/> puedes hacer clic en el
                  siguiente boton.
                </p>
                <div className="container-btnWork"> 
                  <Button
                    variant="contained"
                    className="buttonWork btnGit"
                    href="https://github.com/damarislh10?tab=repositories"
                    target="_blank"
                  >
                    Ir ahora
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

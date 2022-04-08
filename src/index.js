import React from 'react';
import ReactDOM from "react-dom/client";
import { Portafolio } from './containers/Portafolio';
import './styles/config.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Portafolio />
  </React.StrictMode>
);


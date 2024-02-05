import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <ul className="nav-lista">
        <li>
            {/* un mismo link puedo usar las veces que 
            quiera y en el componente o elemento que quiera
            en link en el TO se pone la ruta que predifines en routes  */}
         <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li>
          <Link to="galeria" className="nav-link">Galeria</Link>
        </li>
        <li>
        <Link to="formulario" className="nav-link">Formulario</Link>
        </li>
       
      </ul>
    </>
  );
}

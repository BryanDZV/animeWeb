import React from "react";
import { Link } from "react-router-dom";

export default function Lista({ galeria }) {
  // console.log("datos en Clista", galeria);

  return (
    <div className="contenedor">
      {galeria.map((serie, index) => (
        <div key={index} className="elemento">
          <div className="titulo">
            <p>
              {serie.attributes.canonicalTitle} {serie.id}
            </p>
          </div>

          <div className="imagen">
            {serie.attributes.coverImage &&
              serie.attributes.coverImage.original && (
                <img
                  src={serie.attributes.coverImage.original}
                  alt="imagenrota"
                />
              )}
              <Link to={`/detalle/${serie.id}`}>
              <button className="ver-mas-btn">Ver más</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

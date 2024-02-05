import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CartaDetalle() {
  //aqui llamo a peticion pero especifica, la del id no hace falta coger datos de otro lado
  //crearse un estado usar el use param yllamar en el url con el id
  const [cartaDetalle, setCartaDetalle] = useState({});
  const { id } = useParams();
  // console.log("soy id en carata de detalle:",id);
  useEffect(() => {
    //aqui la peticion especifica
    const getDetailChar = async () => {
      //haces un fetch
      const datosDetail = await fetch(`https://kitsu.io/api/edge/anime/${id}`);
      const datosDetailJson = await datosDetail.json();
      console.log(
        "soy resutlado de peticion en carta de detalle:",
        datosDetailJson.data
      );
      setCartaDetalle(datosDetailJson.data);
    };
    getDetailChar();
  }, []);

  return (
    //IMPORTANTE HACER CONDICIONALES CUANDO NO APRESCA DATOS PUES ES UNA PETICION ASYCN
    //Y VA CON RETRASO LOS DATOS AL HACER IF LE DAMOS TIEMPO
    <>
      <div>CartaDetalle</div>
      {/* este ES POR SI USO DETALLE DE PERSONAJE OJO ES OTRA RUTA:`https://kitsu.io/api/edge/characters/${id}` */}
      {/* <figure>
      {cartaDetalle && cartaDetalle.attributes && (
        <div className="detalle_anime">
          <h1>{cartaDetalle.attributes.names.en},{cartaDetalle.attributes.names.ja_jp}</h1>
          <p>Apodo: {cartaDetalle.attributes.otherNames && cartaDetalle.attributes.otherNames[1]}</p>


          <div className="imagen_datella">
            <img src={cartaDetalle.attributes.image.original} alt="" />
          </div>
          <div className="descripcion">
            <p>{cartaDetalle.attributes.description}</p>
          </div>
        </div>
      )}
    </figure> */}

      <figure>
        {cartaDetalle && cartaDetalle.attributes && (
          <div className="detalle_anime">
            <div className="Titulo_detalle">
                <h1>{cartaDetalle.attributes.canonicalTitle}</h1>
            </div>
            
            <div className="imagen_datella">
              <img src={cartaDetalle.attributes.coverImage.original} alt="" />
            </div>
            <div className="descripcion">
              <p>{cartaDetalle.attributes.description}</p>
            </div>
            <div className="ranking">
                <h1>RANKIG:{cartaDetalle.attributes.popularityRank}</h1>
            </div>
          </div>
        )}
      </figure>
    </>
  );
}

import React, { useEffect, useState } from 'react'
import axios from "axios";
import Lista from './Lista';
import Paginacion from './Paginacion';

export default function Galeria() {
    const [galeria, setGaleria] = useState([])
     const baseUrl=("https://kitsu.io/api/edge/anime?page%5Blimit%5D=12&page%5Boffset%5D=");


    useEffect(() => {
      obtenerDatos(0)
    }, [])
  const obtenerDatos=async(offset)=>{
    //offset= numero elementos(numero de elementos en la pagina  que estas)*pagina
        const peticion=await axios.get(baseUrl+ offset)
        console.log(peticion.data.data);
        setGaleria(peticion.data.data)
        
      }
      


  return (
    <>
    <Lista galeria={galeria} >
      
    </Lista>
    <Paginacion onChangePage={obtenerDatos} ></Paginacion>
    
    
    
    </>
  )
}

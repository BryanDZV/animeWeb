import React from 'react'
import { Link } from 'react-router-dom'

export default function Portada() {
  return (
    <div className='div_portada'>
      <div className='div_imagen_portada'>
        <Link to="/galeria" >
        <img className='imagen_portada' src="https://hips.hearstapps.com/hmg-prod/images/pluto-5-653d534fe4511.jpg" alt="foto_galeria" />
        </Link>
        <h1>IR A GALERIA</h1>
      </div>
      <div className='div_imagen_portada'>
        <Link to="/formulario">
        <img className='imagen_portada' src="https://pm1.aminoapps.com/6371/d567970b4d62d3eb4166f8c138f107a2262b90c0_00.jpg" alt="foto_formulario" />
        </Link>
        <h1>IR A FORMULARIO</h1>
      </div>

    </div>
    
  )
}

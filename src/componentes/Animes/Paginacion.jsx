import React, { useState } from 'react'



//NOTA PARA SOLUCIONAR ALGO QUE SE REINICIA DE VALORES SOLUCION
//SACALO DE LA FUNCION PAGINACION 
export default function Paginacion({onChangePage}) {
    const [contador, setContador] = useState(1)
    const nextPage=()=>{
        setContador(contador+1)
        onChangePage(contador*12) //esto es el offset y con esto modificamos el Numero de elementos por pagina
    }
    const backPage=()=>{
        setContador(contador-1)
        onChangePage(contador*12)//este es el valor que le das a offset en galeria
    }


  return (
    <>
    <div className='div_paginacion'>
    <button className='bton_paginacion' onClick={backPage}>back</button>
        {contador}
        
        <button className='bton_paginacion' onClick={nextPage}>next</button>
    </div>
    
    
    </>
  )
}

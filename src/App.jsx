import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Galeria from "./componentes/Animes/Galeria";
import Formulario from "./componentes/Formulario_Contacto/Formulario";
import Portada from "./componentes/Home/Portada";
import Nav from "./componentes/Core/Nav";
import CartaDetalle from "./componentes/Animes/CartaDetalle";

function App() {
  return (
    <>
      <div className="general">
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            {/* //este te dice donde y 
   //desde donde te da acceso a la ruta=browserRouter
   y le decimos quien tendra rutas=routes y
    por cada uno asemos ruta=route y les pones dentro de element 
    AQUI LLAMAMOS SOLO A LOS PRINCIPALES SI DENTRO DE ELLOS AY OTROS YA SALEN */}
            {/* en el paych se crea la ruta */}
            <Route path="/" element={<Portada />}></Route>
            <Route path="/galeria" element={<Galeria />}></Route>
            <Route path="/detalle/:id" element={<CartaDetalle />}></Route>
            <Route path="/formulario" element={<Formulario />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

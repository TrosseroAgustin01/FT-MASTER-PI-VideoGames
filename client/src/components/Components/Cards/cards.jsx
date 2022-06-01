import React from "react";
import Card from "../Card/card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import Paginado from "../Paginado/paginado";

export default function Cards(){
    const allVg = useSelector((state)=> state.videogames);
    // SETEO LOS ESTADOS LOCALES
    const [pagActual,setPagActual] = useState(1); // Seteamos que nuestra pag actual comience en uno
    const [vgPP,setVgPP] = useState(15);  //videojuegos por pagina // Seteamos que nuestras pag contengan 15 videojuegos,
    const IndexUVg =  pagActual * vgPP; // indice del ultimo videojuego
    const IndexPVg = IndexUVg - vgPP;   // indice del primer videojuego
    const VgA= allVg.slice(IndexPVg,IndexUVg) ; // videojuegos actuales        
                                                        // slice nos permite cortar una porcion del arreglo, en este caso nos devolveria desde,
                                                        // el indice 0 al 14 es decir 15 vg, esto se debe a que el metodo slice
                                                        // no incluye la posicion de cierre que le asignamos sino una menos.
    const paginado = (numeroDePagina) =>{
        setPagActual(numeroDePagina);
    }
    
    
    return(
        <div>
          <div className="box">
            <Paginado vgPP={vgPP} allVg={allVg.length} paginado={paginado} />
          </div>
    {
      VgA?.map(e =>{
        return(
          <div>   {/* funciona como un div pero no ocupa espacio de la pagina */}
            <Link to={`/home/{e.id}`}></Link>
            <Card name={e.name} rating={e.rating} background_image={e.background_image} genres={e.genres} released={e.released} onClose={()=>{alert(e.name)}} id={e.id} />
          </div>
      )})
    }
  </div>
    )
}


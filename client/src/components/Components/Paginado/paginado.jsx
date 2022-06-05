import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";

export default function Paginado({allVg, vgPP, paginado}){
    const pagN = []; // se convertira en un arreglo de numeros, loos cuales derivan de el bucle for.

    for(let i = 1;i <= Math.ceil(allVg/vgPP);i++) // el math ceil nos permite redondear hacia arriba
        pagN.push(i)
    return(
        <nav>  {/* Usadas para definir el contenido que será la sección de navegación de la web */}
            <ul>
                {
                    pagN?.map(e => { // en este caso nuestro e(de elemento) representaria un numero de ese arreglo
                        return(
                            <li  key={e}>
                                    <div className="box">
                                        <a className="poc" onClick={()=>paginado(e)}>{e}</a>
                                    </div>
                            </li>
                            )
                    })
                }
            </ul>
        </nav>
    )
}
{/* TAG "a": Etiqueta utilizada para crear hiperenlaces en el documento HTML*/} 
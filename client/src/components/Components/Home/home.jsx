import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getAllVideogames } from "../../../actions/actions";
import { Link } from "react-router-dom";
import Card from '../Card/card';
import NavBar from '../NavBar/navBar'
import Cards from "../Cards/cards";
import './home.css'
import Paginado from "../Paginado/paginado";

export default function Home(){
    const dispatch = useDispatch();
    const allVg = useSelector((state)=> state.videogames); //nos permite remplazar la función mapStateToProps de modo que podamos acceder directamente en la store de Redux

    useEffect(() => {                       //component did mount
        dispatch(getAllVideogames());
    },[dispatch])   // El parámetro debe ser un array con todos los valores de los que dependerá el efecto,
                    // de forma que sólo se ejecutará cuando ese valor cambie.
                    //Si le pasamos un array vacío, eso hará que el efecto no dependa de ningún valor, 
                    // por lo que sólo se ejecutará al montarse y desmontarse el componente.
    function handleClick(e){
        e.preventDefault();
        dispatch(getAllVideogames());
    }
    return(
        <div>
            <Link to='/videogames'>Crea tu VideoJuego</Link>
            <h1>Videogames Page</h1>
            <br>
            </br>
            <button className="ren" onClick={e => {handleClick(e)}}>Reincia tu busqueda</button>
            <div>
                <Link className="caja" to='/'>Volver Atras</Link>
            </div>
            <div>
                {/* <Paginado vgPP={vgPP} allVg={allVg.length} paginado={paginado} /> */}
                <NavBar/>
                <Cards/>
            </div>
        </div>

    )
}
//  {/* {
//                     allVideogames?.map(e =>{
//                         return(
//                             <fragment>
//                                 <Link to={`/home/{e.id}`}></Link>
//                                 <Card name={e.name} rating={e.rating} background_image={e.background_image} genre={e.genre} released={e.released} onClose={()=>{alert(e.name)}} id={e.id} />
//                             </fragment>
//                     )})
//                 } */}
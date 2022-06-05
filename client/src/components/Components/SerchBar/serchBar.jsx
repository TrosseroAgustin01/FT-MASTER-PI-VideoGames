import React from "react";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getVgByname } from "../../../actions/actions";

export const SerchBar = () => {
    const dispatch = useDispatch();
    const[name,setName] = useState("");

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value) // setea que lo que escribamos aqui va a convertirse ene l foco de busqueda de nuestro onCLick
    }

    function handleClick(e){
        e.preventDefault();
        dispatch(getVgByname(name))
    }


    return(
        <div>
            <input type="text"  placeholder="...ingresa aqui el nombre de tu videojuego favorito" onChange={e => {handleInputChange(e)}}/>
            <button type="submit" onClick={e => {handleClick(e)}}>Bucar</button>
        </div>
    )
}
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getDetail,resetDetail } from "../../../actions/actions";
import { Link, useParams } from "react-router-dom";

export const  Detail = () =>{
	const dispatch = useDispatch();
const myVgame = useSelector((state) => state.detail);
const {id} = useParams();


useEffect(() => {
    dispatch(getDetail(id));
    return ()=>{
   dispatch(resetDetail())
}
}, [dispatch , id] )


return (
    <div>
      <body>
      <div>
        <h1>{myVgame.name}</h1> 
        <img src={ myVgame.img || myVgame.background_image} alt= 'Img Not Found' width='200px' height='200px'/>
         <h3>Rating:{myVgame.rating}</h3>
        <h3>Generos:{ myVgame.genres?.map(el => el.name).join('-')}</h3>
        <h3>Fecha de Lanzamiento:{myVgame.released }</h3>
        <h4>Plataformas:</h4>
          <ul>{myVgame.plataform ? myVgame.plataform.map((e) => <li >{e}</li>) : ""}</ul>
          <ul>{myVgame.id?.length   ? myVgame.platforms?.map(el => el.name)
        :myVgame.platforms?.map(el=> el.platform.name).join(' || ')}</ul>  
        <h3>Descripción:</h3>
            <p>
                <strong>{myVgame.description_raw || myVgame.description }</strong>
            </p> 
        <Link to='/home'><button>HOME</button></Link>
      </div>
      </body>
    </div>
)
}
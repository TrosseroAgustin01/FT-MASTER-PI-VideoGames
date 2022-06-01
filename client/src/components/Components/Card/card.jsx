import React,{useEffect} from "react";
import { Link } from "react-router-dom";

export default function Card({name,released,genres,background_image,rating,id,onClose}){
    return(
        <div>
            <button onClick={onClose}>X</button>
                <div>
                    <Link  to={`/home/${id}`}>
                        <h2 className='1' >{name}</h2>
                    </Link>
                </div>
                <div>
                    <h3>{released}</h3>
                </div>
                <div>
                    <h3>{genres}</h3>
                </div>
                <div>
                    <h3>{rating}</h3>
                </div>
                <div>
                    <img src={background_image} alt="imagen no encontrada" width='300px' height='300px' />
                </div>
        </div>
    )
}
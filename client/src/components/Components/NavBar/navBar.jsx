import React from "react";

export default function NavBar(){
    return(
        <div>
            <select>  {/*Input que permite una selección entre un conjunto de opciones.*/}
                {/* <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option> */}
                <option value='asc'>Orden Ascendente</option> {/* Etiqueta ligada a <select>. Permite añadir diferentes opciones al <select> */}
                <option value='des'>Orden Descendente</option>
            </select>
            <select>
                <option value="genres">Ordenado por Genero</option>
                <option value="RPG">RPG</option>
                <option value="Shooter">Shooter</option>
                <option value="Casual">Casual</option>
                <option value="Racing">Racing</option>
                <option value="Strategy">Strategy</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Sports">Sports</option>
                <option value="Action">Action</option>
                <option value="Arcade">Arcade</option>
                <option value="Fighting">Fighting</option>
                <option value="Adventure">Adventure</option>
                <option value="Platformer">Platformer</option>
                <option value="Family">Family</option>
                <option value="Simulation">Simulation</option>
                <option value="Massively Multiplayer">Massively Multiplayer</option>
            </select>
            <select>
                <option value="nam">Ordenado por Nombre</option>
            </select>
            <select>
                <option value='all'>Todos</option>
                <option value="created">Creados por el Usuario</option>
                <option value="Api">VideoJuegos existentes</option>
            </select>
        </div>    
    )
}




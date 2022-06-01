export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';
export const GET_VIDEOGAME_BY_ID = 'GET_VIDEOGAME_BY_ID';
export const GET_ALL_GENRES = 'GET_ALL_GENRES';
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME';
export const FILTER_BY_GENRES = 'FILTER_BY_GENRES'



export const getAllVideogames = ()  => {
    return (dispatch) =>{ fetch(`http://localhost:3001/videogames`)
                            .then(data => data.json())
                            .then(data => 
                                {return dispatch({
                                            type: 'GET_ALL_VIDEOGAMES', 
                                            payload: data
                    })})
    }
};

export const getVidegameByGenre = () =>{
    return (dispatch) => { 
        fetch("http://localhost:3001/genres")
        .then(data => data.json())
        .then(data =>{
            return dispatch =({
                type: 'GET_ALL_GENRES',
                payload: data,
            })
        })
    }
}

export const filterGamesByGenres = (payload) =>{
    return {
        type:'FILTER_BY_GENRES',
        payload
    }
}


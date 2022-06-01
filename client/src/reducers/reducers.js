// import { createStore, combineReducers } from 'redux';
import {GET_ALL_VIDEOGAMES, GET_ALL_GENRES, FILTER_BY_GENRES} from '../actions/actions' 


const initialState={
    videogames:[],
    allVg:[],
    videogame:[],
    genres:[],
}

const reducer =(state = initialState, action) =>{
    switch(action.type) {
        case GET_ALL_VIDEOGAMES:
            return {...state,
                    videogames: action.payload
                }
        case GET_ALL_GENRES:
            return{
                    ...state,
                    genres:action.payload
                }
        case FILTER_BY_GENRES:
            const allVg = state.videogames;
            const generos = action.payload === 'all' ? allVg : allVg.filter(el=>el.genres.includes(action.payload)) 
            return {
                ...state,
                videogames: generos
            }  
        default:
                return state;
    }   
}    


// const reducers = combineReducers({});
export default reducer;

// import { createStore, combineReducers } from 'redux';
import {GET_ALL_VIDEOGAMES,RESET_DETAIL , GET_DETAIL ,GET_ALL_GENRES, FILTER_BY_GENRES, FILTER_BY_CREATOR, ORDER_BY_NAME, ORDER_BY_RATING,GET_VG_BY_NAME, POST_VG} from '../actions/actions' 


const initialState={
    videogames:[],
    allVg:[],
    detail:[],
    genres:[],
}

const reducer =(state = initialState, action) =>{
    switch(action.type) {
        case GET_ALL_VIDEOGAMES:
            return {...state,
                    videogames: action.payload,
                    allVg: action.payload
                }
        case GET_ALL_GENRES:
        console.log('hola')    
        return{
                    ...state,
                    genres:action.payload
                }
        case FILTER_BY_GENRES:
            const allVg = state.allVg; 
            // const generos = allVg.filter(e => e.genres?.some(el => el === action.payload))
            const generos = action.payload === 'all' ? allVg : allVg.filter(e => e.genres.includes(action.payload)) 
            return {
                ...state,
                videogames: generos
            }  
        case FILTER_BY_CREATOR:
            const creador = action.payload === 'created' ? state.allVg.filter(e => e.createdInDB) : state.allVg.filter(e => !e.createdInDB)
            return{
                ...state,
                videogames:creador
            }
        case ORDER_BY_NAME:
            let reubicaciónAlph = action.payload === 'asc' ?
            state.allVg.sort(function(a, b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1;
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()){
                    return -1;
                }
                    return 0;
                }) 
                : 
            state.allVg.sort(function(a, b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return -1;
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()){
                    return 1;
                }
                    return 0;
                }) 
                return {
                    ...state,
                    videogames: reubicaciónAlph
                }
        case ORDER_BY_RATING:
            let rubiPorRating = action.payload === 'des' ?
            state.allVg.sort(function(a, b){
                if(a.rating > b.rating){
                    return 1;
                }
                if(b.rating > a.rating){
                    return -1;
                }
                    return 0;
                }) 
                : 
            state.allVg.sort(function(a, b){
                if(a.rating > b.rating){
                    return -1;
                }
                if(b.rating > a.rating){
                    return 1;
                }
                    return 0;
                }) 
                return {
                    ...state,
                    videogames: rubiPorRating
                }
                case GET_VG_BY_NAME:
                    return{
                        ...state,
                        videogames:action.payload
                    }
                case POST_VG:
                    return{
                        ...state
                    }
                case GET_DETAIL:
                    return{
                        ...state,
                        detail: action.payload
                    }   
                case RESET_DETAIL:
                    return{
                        ...state,
                        detail:[]
                    } 
        default:
                return state;
    }   
}    

// Para los filtrados hemos agregado un estado que contenga toda la informacion, este nos va aservir como variable auxiliar,
// ya que nos va a permitir optener informacion de manera conatante la informacion que requerimos de nuestro filtro sin que este estado sufra modificaciones.
export default reducer;

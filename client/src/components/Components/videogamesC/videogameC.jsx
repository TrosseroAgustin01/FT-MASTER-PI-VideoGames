import React from "react";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getVidegameByGenre,postVG } from "../../../actions/actions";
import { Link,useNavigate } from "react-router-dom";

function validate(state){
    const error={}
  
    if(!state.name){
      error.name ='El nombre del videojuego es necesario.'
    }else if(state.name.length < 3 || state.name.length > 35){
      error.name ='El nombre del videojuego debe contener entre 3 a 35 carcarteres'
    }
    if(!state.description){
      error.description ='La descripción es necesaria'
    }
    if(!state.rating){
      error.ratin ='La valoracion es necesaria'
    }else if(state.rating < 0 || state.rating > 5){
      error.rating ='La valoracion otorgada debe estar en uno (1) y cinco (5)'
    }
    if(state.genres.length === 0){
      error.genres ='Debe seleccionar al menos un(1) genero'
    }
    if(state.platform.length === 0){
      error.platform ='Debe seleccionar al menos una (1) plataforma'
  
    }
  
    return error
  }
  
  
  export const Creator = () => {
  
    let plataformss = [
        "PC","PlayStation","Xbox","Nintendo Switch","iOS", "Android","Nintendo","PS Vita","PSP","Wii","Game Boy","Atari","SEGA","PS5","PS4","PS3","PS2","PS1",
    ];
    const [button,setButton]=useState(true)
    const dispatch=useDispatch()
    const genres=useSelector((state)=>state.genres)
    const [input,setInput]=useState({
      name:'',
      description:'',
      rating:'',
      released:'',
      genres:[],
      platform:[]
    })
    const [error,setError]=useState({
      name:'',
      description:'',
      rating:'',
      genres:'',
    })
  useEffect(()=>{
    dispatch(getVidegameByGenre())
  },[dispatch])
  
  const handleChange=(e)=>{
    e.preventDefault()
      setInput(prevState=>{
        const newState={
        ...input,
        [e.target.name]:e.target.value
      };
  
      setError(validate(newState))
    
    return newState
    })
    
    if(Object.keys(error).length){
    setButton(false)}
  }
  const handleSelectP=(e)=>{
    e.preventDefault()
    if(!input.platform.includes(e.target.value)){
      setInput({
        ...input,
        platform:[...input.platform,e.target.value]
      })}else{
        console.log('Plataforma ya agregada.')
      }
  }
  const handleSelect=(e)=>{
    e.preventDefault()
    if(!input.genres.includes(e.target.value)){
    setInput({
      ...input,
      genres:[...input.genres,e.target.value]
    })}else{
      console.log('genero ya agregado!')
    }
  }
  const handleDeleteGenre=(e)=>{
    setInput({
      ...input,
      genres:input.genres.filter((g) => g!==e )
    })
  }
  const handleDeletePlat=(e)=>{
    setInput({
      ...input,
      platform:input.platform.filter((g) => g!==e )
    })
  }
  
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!input.name||!input.rating||!input.description||!input.platform || !input.genres){
      return alert('Complete los campos vacios.')
    }
    input.name=input.name.charAt().toUpperCase()+input.name.slice(1)
    dispatch(postVG(input))
    setInput({
      name:'',
      description:'',
      rating:'',
      released:'',
      genres:[],
      platform:[]
    })
    alert('Videojuego Creado!')
  }
  
    return (
      <div className="non">
        <div>
        <Link to='/home'><button className='back-button'>Regresar</button></Link>
  
        </div>
        <h1>Crea tu propio Juego!</h1>
       <div>
        <form onSubmit={e=>handleSubmit(e)}>
          <div>
            <label>Name: </label>
            <input
            onChange={e=>handleChange(e)}
            type='text'
            value={input.name}
            name='name'
            />
            <span>{error?.name ||''}</span>
          </div>
          
          <div>
            <label>Description: </label>
            <textarea
            onChange={e=>handleChange(e)}
            type='text'
            value={input.description}
            name='description'
            />
            <span>{error?.description ||''}</span>
          </div>
          
          <div>
            <label>Rating: </label>
            <input
            onChange={e=>handleChange(e)}
            type='number'
            value={input.rating}
            name='rating'
            />
            <span className='error'>{error?.rating ||''}</span>
  
            </div>
          
  
            <div>
            <label>Released: </label>
            <input
            onChange={e=>handleChange(e)}
            type='date'
            value={input.released}
            name='released'
            />
            </div>
            <div>
            <label>Background_image: </label>
            <input
            onChange={e=>handleChange(e)}
            type='text'
            value={input.background_image}
            name='background_image'
            placeholder='Image URL '
            />
            </div>
            <br/>
            <div>
              <label>Genres:</label>
              <select onChange={e=>handleSelect(e)}>
                <option hidden key={0}>select...</option>
              {genres.map(g=>{
                return(<option  key={g.id} value={g.name}>{g.name}</option>
              )})}
              </select> 
            <span>{error?.genres ||''}</span>
  
            </div>
            <br/>
            <div>
            <label>platform:</label>
              <select onChange={e=>handleSelectP(e)}>
              <option hidden>select...</option>
            {plataformss.map(p=>{
              return(
                
                <option
                
                value={p}
                name='platform'
                key={plataformss.indexOf(p)}
                >{p}</option>
                
                )
              })}
              </select>
            <span>{error?.platform ||''}</span>
  
            </div>
  
              <div>
               <button type='submit' disabled={button}>Crea tu Videojuego</button>
              </div>
            
        </form>
              <div>
            <br/>
                <span>Genres selected:</span>
                  {input.genres.map(g=>{
                    return (<div key={input.genres.indexOf(g)}>
                      <p key={input.genres.indexOf(g)}>{g}</p><button onClick={()=>handleDeleteGenre(g)}>x</button>
                    </div>
                    )
                  })}
              </div>
              <br/>
              <div>
                <span>platform selected:</span>
  
                {input.platform.map(p=>{
                  return (<div key={p}>
                    <p key={p}>{p}</p>
                  <button onClick={()=>handleDeletePlat(p)}>x</button>
                  
                  </div>)
                })}
              </div>
          </div>
        </div>
    )
  }
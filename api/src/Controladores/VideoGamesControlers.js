const axios = require('axios');
const {Videogame,Genre} = require('../db');
const { YOUR_API_KEY } = process.env;
const { allGames } = require('../Utils/getterInfo');

// allGames();
module.exports={getAllVideoGames:async(req,res)=>{
        const { name } = req.query;
        const gam = await allGames();
        if(name){
            const gamer = await gam.filter(el=>el.name.toLowerCase() === name.toLocaleLowerCase());
            if(gamer.length !== 0){
                res.status(200).json(gamer)
            }else{
                res.status(404).send('no se encontro ese juego')
            }
        }else {
            res.status(200).json(gam)
        }
    }
,postVideogame:async(req, res) => {
        let { name, description, released, rating, genres, background_image, plataform } = req.body;
        if(!name || !description || !genres  || !plataform ){
            res.status(400).send('Faltan parametros obligatorios')
    }else{  
        try {
          let videogameCreated = await Videogame.create({
            name, 
            description, 
            released, 
            rating, 
            background_image,
            plataform
          })
    
          let genresDb = await Genre.findAll({
            where: {
              name:genres
            },attributes:['id'] 
          })
          
        
          videogameCreated.addGenres(genresDb)
          res.send('Videogame creado correctamente')
        } catch (error) {
          console.log(error);
          res.status(400).send('No se ha logrado crear el juego')
        }
      }
    }}
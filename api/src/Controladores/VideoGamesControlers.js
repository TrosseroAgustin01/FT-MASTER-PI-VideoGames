const axios = require('axios');
const {Videogame,Genre} = require('../db');
const { YOUR_API_KEY } = process.env;
const { allGames } = require('../Utils/getterInfo');

// allGames();
module.exports={getAllVideoGames:async(req,res)=>{
        const { name } = req.query;
        const gam = await allGames();
        if(name){
            const gamer = await gam.filter(el=>el.name.toLowerCase().includes(name.toLowerCase()));
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
        let { name, description, released, rating, genres, background_image, platform } = req.body;
        if(!name || !description || !genres.length  || !platform.length ){
            res.status(400).send('Faltan parametros obligatorios')
    }else{  
        try {
          let videogameCreated = await Videogame.create({
            name, 
            description, 
            released, 
            rating, 
            background_image,
            platform
          })
          genres.map(async(e) =>{const gen = await Genre.findOne({
            where:{
              name:e
            }
          })
          await videogameCreated.addGenre(gen);
        })
          res.send('Videogame creado correctamente')
        } catch (error) {
          console.log(error);
          res.status(400).send('No se ha logrado crear el juego')
        }
      }
    },
  // deleteVideogame:async(req,res) =>{
  //   const{id} = req.params;
  //   try {
  //     if(id){
  //       await Videogame.destroy({where:{id:id}})
  //       res.status(200).json('videojuego eliminado correctamente')
  //     }
  //   } catch (error) {
  //     res.status(404).json('no se ha podido eliminar ese videojuego')
  //   }
  // }
}


async function deleteVideogame (req,res){
    const {id} = req.body;
      if(id){
    try {
      const unico = await Videogame.findByPk(id)
      if(unico){
        Videogame.destroy({where:{id:id}})
        res.status(200).send('videojuego eliminado correctamente')
      }
      res.status(400).send('no se ha logrado eliminar el juego')
    } catch (error) {
      res.status(400).send('no se ha logrado eliminar el juego')
    }
  }
}
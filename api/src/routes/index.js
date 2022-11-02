const { Router } = require('express');
const axios = require('axios');

// Importar todos los routers
const authRouter = require('./routes.js');
const { Pokemones } = require('./pokeapi');
//data base
const { Pokemon, Type } = require('../db')


const router = Router();

// Configurar los routers
////////////////////////////////Sub rutas//////////////////////////////////////////////////////////////////
router.use('/auth', authRouter);
///////////////////////////////ruta principal////////////////////////////////////////////////////
router.get('/pokemons', async (req, res) => {

  console.log("Esta llamando")
  ////////////////////////Mostrar todos pokemones///////////////////////////////////
  try {
    let dbPokem = await Pokemon.findAll({
      attributes: ["id", "name", "attack", "img","apodo"],
      include: "Types"
    })
    console.log("db poke", dbPokem)
    dbPokem = dbPokem.map(e => {
      let pokeObj = {
        id: e.id,
        name: e.name,
        apodo:e.apodo,
        img: e.img,
        types: e.Types.map(t => t.name?.split(",")).flat(),
        attack: e.attack,
      }
      return pokeObj
    })

    const response = await Pokemones();

    let AllPokemon = [...dbPokem, ...response]

    res.status(200).json(AllPokemon)

    //////////////////////////Manenjo de error/////////////////////////////////
  } catch (e) {
    if (e.message=== "getaddrinfo ENOTFOUND pokeapi.co") {
      return res.status(404).json({ error: "Error 404"})
      
    }
    return res.status(404).json({ error: e.message })
  }
})

module.exports = router;

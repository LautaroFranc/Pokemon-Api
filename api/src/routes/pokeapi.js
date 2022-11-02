const axios = require('axios')
const { Pokemon, Type } = require('../db')


let pokemons_Arr = []
module.exports = {
  Pokemones: async () => {
    ////////////////////////Traemos los datos de cada pokemon [nombre, img, tipo,atk] ///////////////////////////////////
    if (pokemons_Arr.length === 40) {
      return pokemons_Arr
    } 
    const resp = await axios(`https://pokeapi.co/api/v2/pokemon?limit=40`)
    const responseArray = resp.data.results
    async function mapApi(c) {
      if (pokemons_Arr.length === 40) {
        return pokemons_Arr
      }
      try {
        const resp = await axios.get(responseArray[c].url)
        const pokedex = resp.data

        let pokeObj = {
          id: pokedex.id,
          name: pokedex.name,
          img: pokedex.sprites.other.home.front_default,
          types: pokedex.types.map(t => t.type.name),
          attack: pokedex.stats[1].base_stat,
        }
        console.log(pokeObj)

        pokemons_Arr.push(pokeObj)
        console.log("me vale", pokemons_Arr.length)
        return mapApi(c + 1)
      } catch (error) {
        
        console.log(error.message)
        return mapApi(c)
      }
    }
    let pks = await mapApi(0)

    return pks
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  SearchPokemon: api = async (name) => {
    try {
      const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const pokedex = resp.data

      console.log(pokedex)
      let pokeObj = {
        id: pokedex.id,
        name: pokedex.name,
        img: pokedex.sprites.other.home.front_default,
        types: pokedex.types.map(t => t.type.name),
        attack: pokedex.stats[1].base_stat,
      }

      return pokeObj
    } catch (e) {
      if (e.message == "Request failed with status code 404") {
        return false
      } else {
        return api(name)
      }
    }
  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  DetallPokemon: api = async (id) => {

    try {
      const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const pokedex = resp.data
      let pokeObj = {
        id: pokedex.id,
        name: pokedex.name,
        img: pokedex.sprites.other.home.front_default,
        Estadísticas: pokedex.stats.map(e => { return { name: e.stat.name, base_stat: e.base_stat } }),
        Altura: pokedex.height,
        peso: pokedex.weight,
        types: pokedex.types.map(t => t.type.name)
      }
      return pokeObj
    } catch (e) {
      if (e.message == "Request failed with status code 404") {
        return false
      } else {
        return api(id)
      }
    }
  },
  getType : async function apiType(){
  
    try {
      const resp = await axios.get(`https://pokeapi.co/api/v2/type`)
      const Restypes = resp.data
      console.log(resp)
  
      Restypes.results.map(t => {
        Type.create({ name: t.name })
      })
    } catch (e) {
      console.log(e.message)
      if(e.message=== "getaddrinfo ENOTFOUND pokeapi.co"){
        return e.message
     }else{
        return apiType()
  
      }
    }
  }
};




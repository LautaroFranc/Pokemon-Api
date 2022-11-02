const { Router } = require('express');
const { Pokemon, Type } = require('../db');

const { SearchPokemon, DetallPokemon } = require('./pokeapi');
const router = Router();

let cont = 0

// - [ ] __GET /pokemons__:
//   - Obtener un listado de los pokemons desde pokeapi.
//   - Debe devolver solo los datos necesarios para la ruta principal
// - [ ] __GET /pokemons/{idPokemon}__:
//   - Obtener el detalle de un pokemon en particular
//   - Debe traer solo los datos pedidos en la ruta de detalle de pokemon
//   - Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes
// - [ ] __GET /pokemons?name="..."__:
//   - Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
//   - Si no existe ningún pokemon mostrar un mensaje adecuado
// - [ ] __POST /pokemons__:
//   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
//   - Crea un pokemon en la base de datos relacionado con sus tipos.
// - [ ] __GET /types__:
//   - Obtener todos los tipos de pokemons posibles
//   - En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

router.get('/pokemons', async (req, res) => {
  //////////////////////////////get por query/////////////////////////////////////////////////////
  const { name } = req.query

  if (!name) {
    res.status(404).json({ error: "Max 3 words" })
    return
  }
  try {
    const resp = SearchPokemon(name);
    resp.then(async r => {
      if (r) {
        return res.status(200).json(r);
      } else {
        let dbPokem = await Pokemon.findAll({
          where: { name },
          attributes: ["id", "name", "attack", "img"],
          include: "Types",
        })
        console.log("db poke", dbPokem)


        if (dbPokem.length > 0) {
          dbPokem = dbPokem.map(e => {
            let pokeObj = {
              id: e.id,
              name: e.name,
              img: e.img,
              types: e.Types.map(t => t.name.split(",")).flat(),
              attack: e.attack,
            }
            return pokeObj
          })
          res.status(200).json(dbPokem[0]);
          return
        }
        else {
          return res.status(404).json({ error: 'Pokemon no encontrado' })
        }
      }
    });
  } catch (e) {
    return res.status(404).json({ error: e.message })
  }
})
////////////////////////////detalles del pokemon por id///////////////////////////////////////////////////////////
router.get('/pokemons/:id', (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({ error: "Falta info" })
  }
  try {
    const resp = DetallPokemon(id);
    resp.then(async r => {
      if (r) {
        return res.status(202).json(r);
      } else {
        let dbPokem = await Pokemon.findAll({ where: { id }, include: "Types" })
        console.log(dbPokem, id)
        if (dbPokem.length > 0) {
          dbPokem = dbPokem.map(e => {
            let pokeObj = {
              id: e.id,
              name: e.name,
              img: e.img,
              types: e.Types.map(t => t.name?.split(",")).flat(),
              Estadísticas: [
                { name: "hp", base_stat: e.life },
                { name: "attack", base_stat: e.attack },
                { name: "speed", base_stat: e.Velocidad },
                { name: "special-attack", base_stat: e.special_attack },
                { name: "special-defense", base_stat: e.Def },
              ],
              Altura: e.Altura,
              peso: e.Peso,
            }

            return pokeObj
          })
          res.status(202).json(dbPokem[0]);
          return
        }
        else {
          return res.status(404).json({ error: 'Error detalle' })
        }
      }
    });
  } catch (e) {
    return res.status(404).json({ error: e.message })
  }

})

router.get('/types', async (req, res) => {
  try {
    let Typedb = await Type.findAll({ attributes: ["name"] });

    let data_db_arr = Typedb.map(e => e.name.split(","));

    data_db_arr = new Set(data_db_arr.flat());

    let result = []
    for (const iterator of data_db_arr) {
      result.push({ name: iterator })
    }
    
   return res.status(200).json(result)
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
})



router.post('/pokemons', async (req, res) => {
  const {
    name,
    attack,
    apodo,
    hp,
    defense,
    height,
    speed,
    weight,
    type,
    special_defense,
    special_attack } = req.body


  if (!name) {
    return res.status(404).json({ error: 'missing information' })
  }

  const pokeomsDB = await Pokemon.findAll({ where: { name: name } })

  if (pokeomsDB.length !== 0) {
    return res.status(404).json({ error: 'pokemon ya existe' })

  }
  try {
  
    cont++
    let id = `${cont}Experimento`;
    const obj = {
      id: id,
      name,
      apodo,
      life: hp,
      attack: attack,
      Def: defense,
      Altura: height,
      special_defense,
      special_attack,
      Velocidad: speed,
      Peso: weight,
      img: "https://4.bp.blogspot.com/-mW10iWI3RfQ/V9k5IHTxLHI/AAAAAAAARGM/KZaBDcqubUkFzPiq-pfprPVYSrG_0VwowCLcB/s1600/Huevo%2B500.png"
    }
    let typeObj = {
      name: type?.join(",")
    }

    const dbTypePokemons = await Type.create(typeObj)
    const dbPokemon = await Pokemon.create(obj)
    /////
    await dbTypePokemons.setPokemons([dbPokemon])


    res.status(200).json({ message: "Pokemon created successfully" })

  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
})

module.exports = router;

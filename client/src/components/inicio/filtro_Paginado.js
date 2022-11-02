function paginado(pokemos) {
  let current = 0
  let cont = 0
  let num = 12
  let arr = []

  if (pokemos.length === 0) {
    arr.push({ pokemnsp: [{ error: "Pokemon no encontrado" }], numPaginado: 0 })
    return arr
  }
  pokemos && pokemos.map((e, next) => {
    if (next == num) { // 12, 24, 36, 40
      /////   constar la cantidad de paginas  ////////////////////////////
      ///////// guardad en un nuevo array un objto del nuevo array de pokemos y su numero de pagina         ////////////////////////////
      arr.push({ pokemnsp: pokemos.slice(current, next), numPaginado: cont });
      /////////         pasamaos al siguiente                                                                      ////////////////////////////
      current = next
      num += 12
      cont++
    }
  })

  if (pokemos) {
    let next = pokemos.slice(arr.length * 12, pokemos.length)
    arr.push({ pokemnsp: next, numPaginado: cont + 1 });
    return arr
  }
}

export function AllPaginado(data) {

  if (data.length >= 40) {
    let result = paginado(data);
    return result

  } else {
    if (data.length > 0) {

      let valid = Object.hasOwn(data[0], "id")
      let error = Object.hasOwn(data[0], "error")

      if (valid) {
        let result = paginado(data);
        return result
        
      }else if(error){
        let result = paginado(data);
        return result
      }
    }
  }
  return data
}
export function oredenamiento_type(type, data) {//[{},{}]
  let result = []
  if (type == "A-z") {
    result = data.sort((x, y) => {
      if (x.name.toLowerCase() < y.name.toLowerCase()) { return -1; }
      if (x.name.toLowerCase() > y.name.toLowerCase()) { return 1; }
    });

    return paginado(result)
  }
  if (type == "Z-a") {
    result = data.sort((x, y) => {
      if (x.name.toLowerCase() > y.name.toLowerCase()) { return -1; }
      if (x.name.toLowerCase() < y.name.toLowerCase()) { return 1; }
    });
    return paginado(result)
  }
  if (type == "Attack ↓") {
    result = data.sort((x, y) => x.attack - y.attack);
    return paginado(result)
  }
  if (type == "Attack ↑") {
    result = data.sort((x, y) => y.attack - x.attack);
    return paginado(result)
  }
}
export function filter_type(type, data) {
  let result = []
  if (type == "Pokemons") {
    result = data.filter(e => typeof e.id !== "string")
    return paginado(result)
  } else if (type == "Pokemons Creados") {
    result = data.filter(e => typeof e.id === "string")
    return paginado(result)
  } else if (type) {
    if (!data[0].error) {
  
      result = data.filter(e => e.types.includes(type))
      return paginado(result)
    }
  }
}
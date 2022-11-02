
function valides(form_data, type, input_data) {
  let set_Valid_Input = {
    name: "",
    type:"",
  }
  let Exprecion_regular = new RegExp(/[a-zA-Z]+/)
  let Exprecion_regular2 = new RegExp(/\W+/)
  
  let valid_simbolos = Exprecion_regular2.test(form_data)
  if ( (form_data&&form_data.length>8) && type === "name") {
    set_Valid_Input.name = "El nombre no debe tener mas de 8 letras";
    set_Valid_Input.type = "name";
    return set_Valid_Input   
  }
  if (valid_simbolos && type === "name") {
  
    set_Valid_Input.name = "El campo name no permite simbolos";
    set_Valid_Input.type = "name";
    return set_Valid_Input
  }
  if (type == "name" && !form_data) {
    set_Valid_Input.name = "El campo de name no  debe estar vació";
    set_Valid_Input.type = "name";

    return set_Valid_Input
  } else if (Exprecion_regular.exec(form_data) && Exprecion_regular.exec(form_data).input) {
    let error = Exprecion_regular.exec(form_data).input.at(-1)
    error = +error

    if (error || error === 0) {
      set_Valid_Input.name = "El campo name no permite Número";
      set_Valid_Input.type = "name";

      return set_Valid_Input
    }
  } else if (!Exprecion_regular2.exec(form_data) && type == "name") {   
    set_Valid_Input.name = "El campo name no permite Números";
    set_Valid_Input.type = "name";
    return set_Valid_Input
  }

  if (form_data > 300) {
    set_Valid_Input.name = type +" no pude superar los 300";
    set_Valid_Input.type = type;
    return set_Valid_Input
  }

  if ( ( type === "height" || type === "weight" ) && form_data<=0 ) {
    set_Valid_Input.name = type +" no tiene que ser menos a 1 ";
    set_Valid_Input.type = type;
    return set_Valid_Input
  }
  
  if ( (  type === "special_attack" || type === "special_defense" ) &&
          (input_data.special_defence < input_data.defense || 
          input_data.special_attack < input_data.attack  ) ){

    set_Valid_Input.name = type +" no tiene que ser menos que los attack o defense base ";
    set_Valid_Input.type = type;
    return set_Valid_Input
  }
  

  return ""
}

export default valides
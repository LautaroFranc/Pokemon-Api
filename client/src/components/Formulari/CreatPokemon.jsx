import React, { useRef, useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getType } from '../../actions';

import { Div_contener_Form, Div_img, Form, P_typeSelect ,Div_submit} from "./Styled_Create";
import valides_form from './validacionFromu'
import Huevo from '../../img/Huevo.png'

let validInput = {}


export default function Create_pokemos() {

  let state = useSelector(s => s.Types)
  
  const [Valides, setValides] = useState({error:""});

  const Dispatch = useDispatch()

  const [Message_post , Set_Message_post] = useState({error:"", message:""})
  
  const [form_pokemon, set_form_pokemon] = React.useState(
    {
      // name,attack,hp,defense,height,speed,weight,type
      name: "",
      weight: "",
      height: "",
      hp: "",
      type: [],
      attack: "",
      defense: "",
      special_defense: "",
      special_attack: "",
      speed: "",
    }
  );
  useEffect(() => {
    Dispatch(getType())

  }, [])
  function handleChange(event) {
     let valid =  valides_form(event.target.value, event.target.name, form_pokemon);
     setValides(valid)
     Set_Message_post({error:"", message:""})

    if (event.target.name === "type" && event.target.value) {
              let type = []
              type = form_pokemon.type.filter(e => e == event.target.value);
              if (type.length > 0) {
                return
              }else if( form_pokemon.type.length>=3 ){
                  setValides({error:" No puedes poner mas de 3 tipos. "})
                  return
              }else{
                set_form_pokemon(pv =>
                  (
                    {...pv,[event.target.name]: [...pv.type, ...[event.target.value]]}
                  ));
              }
    } else{
            set_form_pokemon(pv =>
            ({
              ...pv,
              [event.target.name]: event.target.value
            }));
    }

  }

  async function handleSubmit(event) {
    event.preventDefault();
    if(Valides.name){
      Set_Message_post({error:Valides.name})
      return 
    }
    if (form_pokemon.type.length === 0) {
      set_form_pokemon(pv =>
      ({
        ...pv,
        type: ["unknown"]
      }
      ));
    }

      const petic = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form_pokemon)
      }
      const response = await fetch('https://backendpokemon.vercel.app/auth/pokemons', petic);
      const respuesta = await response.json();
    
      if (respuesta.message) {
        Set_Message_post({message:respuesta.message})

      } else {
        Set_Message_post({error:respuesta.error})

      }

    
  }
  
  function Remove_type(type) {
    type = type.target.innerHTML.replace("x ", "")
    type = form_pokemon.type.filter(e => e !== type)
    
    set_form_pokemon(pv => ({ ...pv, type: type }))
  }

  return (
    <Div_contener_Form>
      <Div_img type_background={form_pokemon.type}>
        <img src={Huevo} alt="" />
      </Div_img>
      <Form onSubmit={(e) => handleSubmit(e)} valids={Valides} type_background={form_pokemon.type}>

        <div id={Valides.error?"error":"success"}><p>⚠️{Valides.error}</p></div>
        <div id={Valides.name?"error":"success"}><p>⚠️{Valides.name}</p></div>

        <div>
          {/* //////select/////// */}
          <div id="div-input">
            <div id="name-item">
              <label>Types</label>
            </div>
            <div id="input-item">
              <select name="type" onChange={(e) => handleChange(e)}>
                <option value="" >--Select Type--</option>
                {state?.map(e => {
                  return (
                    <option key={e.name} value={e.name} >{e.name}</option>
                  )
                })}
              </select>
            </div>
          </div>
          <div id="type_div">
            <div id="type_selecionado" onClick={Remove_type}>
              {form_pokemon.type?.map(e => <P_typeSelect type={e} key={e} >x {e}</P_typeSelect>)}
            </div>
          </div>


          {/* //////nombre/////// */}

          <div id="div-input">
            <div id="name-item">
              <label>Name</label>
            </div>
            <div id="input-item">
              <input
                type="text"
                id="name"
                autoComplete="off"
                placeholder="Name"
                name="name"
                value={form_pokemon.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          {/* //////hp/////// */}
          <div id="div-input">
            <div id="name-item">
              <label>Hp</label>
            </div>
            <div id="input-item">
              <input
                type="Number"
                min="0" max="300"
                autoComplete="off"
                name="hp"
                placeholder="100 years"
                value={form_pokemon.hp}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          {/* //////altura/////// */}

          <div id="div-input">
            <div id="name-item">
              <label>Height</label>
            </div>
            <div id="input-item">
              <input
                type="number"
                id="height"
                min="0" max="300"
                autoComplete="off"
                placeholder="height"
                name="height"
                value={form_pokemon.height}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          {/* //////peso/////// */}
          <div id="div-input">
            <div id="name-item">
              <label>weight</label>
            </div>
            <div id="input-item">
              <input
                type="Number"
                min="0" max="300"
                autoComplete="off"
                name="weight"
                placeholder="weight"
                value={form_pokemon.weight}
                onChange={(e) => handleChange(e)}
              />
            </div>

          </div>
          {/* //////atack/////// */}

          <div id="div-input">
            <div id="name-item">
              <label>attack</label>
            </div>
            <div id="input-item">
              <input
                type="Number"
                min="0" max="300"
                autoComplete="off"
                name="attack"
                placeholder="attack"
                value={form_pokemon.attack}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          {/* //////Defense/////// */}

          <div id="div-input">
            <div id="name-item">
              <label>Defense</label>
            </div>
            <div id="input-item">
              <input
                type="Number"
                min="0" max="300"
                autoComplete="off"
                name="defense"
                placeholder="Defense"
                value={form_pokemon.defense}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          {/* //////s-atack/////// */}

          <div id="div-input">
            <div id="name-item">
              <label>Special-attack</label>
            </div>
            <div id="input-item">
              <input
                type="Number"
                min="0" max="300"
                autoComplete="off"
                name="special_attack"
                placeholder="special_attack"
                value={form_pokemon.special_attack}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          {/* //////S-defense/////// */}

          <div id="div-input">
            <div id="name-item">
              <label>Special-Defense</label>
            </div>
            <div id="input-item">
              <input
                type="Number"
                min="0" max="300"
                autoComplete="off"
                name="special_defense"
                placeholder="Special-defense"
                value={form_pokemon.special_defense}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          {/* //////hp/////// */}
          <div id="div-input">
            <div id="name-item">
              <label>Speed</label>
            </div>
            <div id="input-item">
              <input
                type="Number"
                min="0" max="300"
                autoComplete="off"
                name="speed"
                placeholder="Speed"
                value={form_pokemon.speed}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div id="div-button">
            <button type="submit">New Pokeoms</button>
          </div>
        </div>
      </Form>
      <Div_submit props={Message_post} >
        <span>{"✅"+Message_post.message||"⚠️"+Message_post.error}</span>
      </Div_submit>
    </Div_contener_Form>

  )

}

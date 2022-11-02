import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { DivContener, Hrstyle, DivSigno, LiType } from "./Styled_filter";
import { getType, filtros_oredenamientos, Limpiar_filter } from '../../actions';
import "./selectFilter.css"
import pokeBall from "../../img/PokeBall2.png"
import { oredenamiento_type, filter_type, AllPaginado } from "./filtro_Paginado"


export default function Filtro() {
  const getTypes = useSelector(s => s.Types);
  let Pokemon_Store = useSelector(s => s.pokemons);
  let Store_Filtro = useSelector(s => s.filtros);
  let store_Search = useSelector(s => s.search_pokemons);

  const [types_Select, Set_types_Select] = useState([])

  const Dispatch = useDispatch()
  const [Select, setSelect] = useState({ on: false, off: false });

  useEffect(() => {
    Dispatch(getType())

  }, [])
  useEffect(() => {
    Set_types_Select([])

  },[store_Search])
  const selectType = (e) => {
    if (e.target.id === "Active") {
      setSelect(pv => ({ ...pv, off: false }))
      setSelect(pv => ({ ...pv, on: false }))
    } else {
      setSelect(pv => ({ ...pv, off: true }))
      setSelect(pv => ({ ...pv, on: true }))
    }
  }

  function Onordenaminetos(e) {
    if(store_Search){
      return
    }
    if (Store_Filtro) {

      Store_Filtro = Store_Filtro.map(e => {
        return e.pokemnsp.map(p => p)
      })

      let result = oredenamiento_type(e.target.innerHTML, Store_Filtro.flat());
      
      Dispatch(filtros_oredenamientos(result));
      
    }else{
      let valid = Object.hasOwn(Pokemon_Store[0], "id")
      if (valid) {
        let result = oredenamiento_type(e.target.innerHTML, Pokemon_Store);
        Dispatch(filtros_oredenamientos(result));
      } else {
        let valid = Object.hasOwn(Pokemon_Store[0].pokemnsp[0], "id")
        
  
        if (valid) {
          Pokemon_Store = Pokemon_Store.map(e => {
            return e.pokemnsp.map(p => p)
          })
  
          let result = oredenamiento_type(e.target.innerHTML, Pokemon_Store.flat());
          Dispatch(filtros_oredenamientos(result));
        }
      }
    }
  }

  function OnFiltros(e) {
      if(store_Search){

        return
      }
      if (e === "remove") {
        let result = AllPaginado(Pokemon_Store);
        Dispatch(filtros_oredenamientos(result));
        Set_types_Select([])
      } else {

        let type = e.target.innerHTML.replace("<p>", "").replace("</p>", "")
        let result = filter_type(type, Pokemon_Store);
        Dispatch(filtros_oredenamientos(result));
        let no_repit = types_Select.find(t => t === type);
        if (!no_repit) {
          Set_types_Select([type])
        }
      }
  }
  function Reset_filtro() {
    Dispatch(Limpiar_filter());
    Set_types_Select([])
  }

  //   - [ ] Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
  // - [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por ataque
  return (
    <DivContener>
      <div onClick={Reset_filtro} id="reiniciar"><p>reiniciar filtro </p> </div>
      <Hrstyle />

      <div className="Select-contener">
        <div className={Select.off ? "Select-item Active" : "Select-item"}>
          <div className="Select-img">
            <img id={Select.on ? "Active" : "not"} onClick={e => selectType(e)} src={pokeBall} />
            <span className={Select.on ? "text-Act" : "text-none"} onClick={e => selectType(e)} >Types Pokemons</span>
            {getTypes?.map((t, i) => {
              return (
                <LiType onClick={e => OnFiltros(e)} key={i} i={i}>
                  <DivSigno type={t.name} pokemos={store_Search}>
                    <p>{t.name}</p>
                  </DivSigno>
                </LiType>
              )
            })}
          </div>
        </div>
      </div>
      <div onClick={e => OnFiltros("remove")} className="type_selecionado">{types_Select && types_Select.map(e => <p>✕ {e}</p>)}</div>
      <nav>
        <ul id="ulContener">
          <Hrstyle />
          <li>
            <button onClick={e => OnFiltros(e)}>Pokemons</button>
            <button onClick={e => OnFiltros(e)}>Pokemons Creados</button>
          </li>
          <Hrstyle />
          <li>
            <button id="Ordenamiento" onClick={e => Onordenaminetos(e)}>A-z</button>
            <button id="Ordenamiento" onClick={e => Onordenaminetos(e)}>Z-a</button>
            <button id="Ordenamiento" onClick={e => Onordenaminetos(e)}>Attack ↓</button>
            <button id="Ordenamiento" onClick={e => Onordenaminetos(e)}>Attack ↑</button>
          </li>
        </ul>
      </nav>

    </DivContener>
  );
}
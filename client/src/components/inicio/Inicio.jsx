import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import LoadingComponent from "../load/LoadingComponent";
import { DivContener, DivPokemos, DivcardPoke, DivButton, Div_item,Div_error} from "./Styled_inicio";
import { useSelector, useDispatch } from "react-redux";
import { getPokemos, searchPokemos, removeDetali } from "../../actions";
import { AllPaginado } from "./filtro_Paginado";
export default function Home() {
  const Search = useRef()
  const Store_Filtro = useSelector(s => s.filtros);
  const store_Pokemons = useSelector(s => s.pokemons);
  const store_Search = useSelector(s => s.search_pokemons);
  const Dispatch = useDispatch()
  const [pokemos, setPokemos] = useState(false)
  const [index, setindex] = useState(0)
  const[ Get_Pokeoms_Page, Set_Get_Pokeoms_Page ] = useState(false)


  useEffect(() => {
    if (!Store_Filtro) {

      Dispatch(removeDetali())
      Dispatch(getPokemos()) 
    }
  },[])

  useEffect(() => {

      if (Store_Filtro) {
        Set_Get_Pokeoms_Page( AllPaginado(Store_Filtro) )
        
      }else if(store_Search){
        Set_Get_Pokeoms_Page( AllPaginado([store_Search]) ) 
        
        setPokemos(false)

      }else{
        Set_Get_Pokeoms_Page( AllPaginado(store_Pokemons) ) 
      

      }
  },[store_Pokemons, store_Search, Store_Filtro])
  
  useEffect(() => {
    if (pokemos!=="") {
      setPokemos(Get_Pokeoms_Page && Get_Pokeoms_Page[index])
      
    }
  }, [Get_Pokeoms_Page, index])


  const pagePokemon = (e) => {
    let final_pagina;

    if (Store_Filtro) {
      final_pagina = Store_Filtro.at(-1).numPaginado

    } else {
      final_pagina = Get_Pokeoms_Page.at(-1).numPaginado
    }

    if (e.target.id === "next" && final_pagina > index + 1) {
      setindex(index + 1);
    } else if (e.target.id === "back" && index > 0) {
      setindex(index - 1);
    }
    return
  }

  const OnSearch = (e) => {
    e.preventDefault();
    Dispatch(searchPokemos(Search.current.value.toLowerCase()))
    setindex(0);
    setPokemos("")
    return
  }

  return (
    <DivContener>
      {pokemos && pokemos.pokemnsp.length > 0 ?
        <>
          <DivButton num={index}>
            <button id="back" onClick={e => pagePokemon(e)}> ◁ </button>
            {!Store_Filtro ? Get_Pokeoms_Page && Get_Pokeoms_Page.map((n, i) => {
              return <Div_item key={i} id={"nump-" + i}></Div_item>
            }) : Store_Filtro && Store_Filtro.map((n, i) => {
              return <Div_item key={i} id={"nump-" + i}></Div_item>
            })}
            <button id="next" onClick={e => pagePokemon(e)}>▷</button>
            <div id="Search">
              <form onSubmit={(e) => OnSearch(e)} >
                <input type="text" ref={Search} name="search" placeholder="search" />
              </form>
              <button id="submit" type="submit" onClick={OnSearch}>Buscar</button>
            </div>
          </DivButton>
          <DivPokemos>
            {pokemos && pokemos.pokemnsp.map(e => {
              if (e.error) {
                return (<Div_error>{e.error}</Div_error>);
              }
              return (
                <DivcardPoke _id={e.id} type={e.types} key={e.id}>
                  <Link to={`/Detail/${e.id}`}>
                    <img id="img-item" src={e.img} />
                  </Link>
                  <div id="Text_Contener">
                    <Link to={`/Detail/${e.id}`}>
                      <p>{e.name}</p>
                    </Link>
                    {e.types.map(t => <span key ={t} id="Text_type">{t}</span>)}
                  </div>
                </DivcardPoke>
              )
            })}
          </DivPokemos>
        </>
        :
        <LoadingComponent component="inico" />}
    </DivContener>
  )
}
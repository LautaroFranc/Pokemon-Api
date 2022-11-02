import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getDetails } from '../../actions';
import LoadingComponent from "../load/LoadingComponent";
import { P_Type_text, Div_Contener_Detail, Div_Contener_Estadisticat, Div_Contener_Text_img, Div_Estaditicas_item, Div_Menu } from "./Styled_Detail";
export default function Detail(props) {
  const Dispatch = useDispatch()

  const [Menu, set_Menu] = useState(false)
  const state = useSelector((state) => state.detailsPokemons)
  React.useEffect(() => {
    let id = props.match.params.id

    Dispatch(getDetails(id))
  }, [])


  return (
    <>
      {state ?
        <Div_Contener_Detail color_background={state.types}>
          <Div_Contener_Text_img color_background={state.types}>
            <div id="Id_Pokemon-item">
              <p>#0{state && state.id}</p>
            </div>
            <div id="name-item">
              <p> {state && state.name}</p>
            </div>
            <div id="type-item">

              {state.types?.map(e => <P_Type_text color={e} id={e} key={e}>{e}</P_Type_text>)}

            </div>
          </Div_Contener_Text_img>
          
          <Div_Contener_Estadisticat  _id={state.id} color_background={state.types}>
            <div id="img-item">
              <img src={state && state.img} />
            </div>
            <Div_Menu>
              <span onClick={() => set_Menu(true)} id={Menu? "activo" :"notActive"}>About</span>
              <span onClick={() => set_Menu(false)} id={!Menu? "activo" :"notActive"}>Estadísticas</span>
            </Div_Menu>

            {
              !Menu ?
                state && state.Estadísticas.map(e => {
                  return (
                    <Div_Estaditicas_item num={e.base_stat} key={e.name}>
                      <div id="name-item">
                        <p>{e.name}:</p>
                      </div>
                      <div id="value">
                        <p>{e.base_stat}</p>
                      </div>
                      <input type="range" defaultValue={e.base_stat} min="0" max="110" />
                    </Div_Estaditicas_item>
                  )
                })
                : <>
                  <div id="Div-item">
                    <div id="about-item">
                      <p>weight:</p>
                    </div>
                    <div id="value">
                      <p>{state && state.peso}</p>
                    </div>
                  </div>
                  <div id="Div-item">
                    <div id="about-item">
                      <p>Height: </p>
                    </div>
                    <div id="value">
                      <p>{state && state.Altura}</p>
                    </div>
                  </div>
                </>
            }
          </Div_Contener_Estadisticat>
        </Div_Contener_Detail>

        : <LoadingComponent />}
    </>

  )
}


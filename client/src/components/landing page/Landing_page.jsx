import React from "react";
import { Link } from 'react-router-dom';
import { DivImg1, Div_Text, DivContener } from "./styled-Landing";
import pikachu_img from "../../img/pikachu.png"
export default function Landing_page() {

  return (
    <DivContener>
      <DivImg1>
        <img src={pikachu_img} alt="pikapika" />
      </DivImg1>
      <Div_Text>
        <div id="decrip-text">
          <p>Esta web fue creada con la funcionalidad de replicar la <span id="model_">pokedex.</span> </p>
        </div>
        <div id="boton">
          <Link to="/Home">
            <button type="button">iniciar</button>
          </Link>
        </div>
      </Div_Text>
    </DivContener>
  )
}
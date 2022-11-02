import React from "react";

import styled from "styled-components";
import { Route, useLocation } from "react-router-dom";
import Home from "./components/inicio/Inicio";
import Detail_Pokemos from "./components/Detail/Detail_Pokemos";
import CreatPokemons from "./components/Formulari/CreatPokemon"
import Filter from "./components/inicio/Filter";
import Nav from "./components/Nav/NavBar";
import Landing_page from "./components/landing page/Landing_page";
const AppStyle = styled.main`
  display:flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  width:100%;
`;
function App() {
  const {pathname} = useLocation()
  
  return (
    <React.Fragment>
      <Route exact path="/" component={Landing_page} />
      {pathname!=="/"&&<Nav/>}
      <AppStyle>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Home" component={Filter} />
        <Route exact path="/CreatPokemon" component={CreatPokemons} />
      </AppStyle>
      <Route exact path="/Detail/:id" component={Detail_Pokemos} />
    </React.Fragment>
  );
}

export default App;

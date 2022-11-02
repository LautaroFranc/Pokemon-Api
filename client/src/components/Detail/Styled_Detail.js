import styled, { css } from "styled-components";
import { pokeBall, type, huevo_type } from "../../img/typeSigno"

const Div_Contener_Detail = styled.div`
  display: flex;
  flex-direction:row-reverse;
  justify-content: center;
  background-image: url(${pokeBall});
  background-color:${p => type[p.color_background[0]] + "dd"};
  background-blend-mode:soft-light;
  background-size:80%;
  background-repeat:no-repeat;
  background-position:160%; 
  text-transform: capitalize;
  height: 100vh;

`;
const Div_Contener_Text_img = styled.div`
    background: ${({ color_background }) => {
  
    let theme_type = color_background;
    if (theme_type.length > 1) {
      

      return `linear-gradient(180deg,${type[theme_type[1]] + "92"} 10%, #fff2 50%,${type[theme_type[0]]} 100%)`

    } else {


      return `linear-gradient(180deg,#fff6 10%,${type[theme_type[0]]} 100%)`
    }
  }};
    backdrop-filter: blur(5px);
    border-radius: 10px;
    width: 70%;
    height:84vh;
    margin:20px 0;
    color: #fff;
  
    #Id_Pokemon-item{
      font-family: 'Aldrich', sans-serif;
      padding: 20px 20px;
      font-size: 2rem;
    }
    #name-item{
      font-size: 5rem;
      padding: 30px 40px;
      font-family: 'Akshar', sans-serif;
    }
    #type-item{
      display:flex;
      padding:0 40px;
      font-family: 'Aldrich', sans-serif;
      font-size: 1rem;
      
      p{
        padding:2px 20px;
        border-radius: 5px;
        margin: 10px 2px;
      }
    }
`;
const P_Type_text = styled.p`
  background-color:${p => type[p.color] + "95"}
`;
const Div_Contener_Estadisticat = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction:column;
    position: absolute;
    border-radius:10px;
    right: 110px;
    top: 50%;
    width: 50%;
    min-height:350px;
    padding:30px 20px; 
    #Div-item{
      margin: 2px 0;
      display: flex;
      align-items: center;
      font-family: 'Aldrich', sans-serif;
      
      #about-item{ 
        margin-top:10px ;
        width: 120px;
      }
      #value{
        display: flex;
        min-width: 50px;
        margin-left: 50px;
      }
    }
    #img-item{
      display: flex;
      position: absolute;
      justify-content: center;
      align-items:center;
      flex-direction: column;
      min-width: 100%;
      overflow: hidden;
      bottom:300px;
      filter: drop-shadow(2px 5px 5px ${p => type[p.color_background[0]] + "40"});
      img{
        ${({ _id, color_background }) => {
          if (typeof _id === "string") {
             return `filter:${huevo_type[color_background[0]]}`
          }
         }};
        width:${({ _id }) => typeof _id === "string" ? "30%" : "50%"};
      
      }
    }
    
`;

const Div_Estaditicas_item = styled.div`
      margin: 1px 0;
      display: flex;
      align-items: center;
      font-family: 'Aldrich', sans-serif;

      #name-item{
        margin-top:10px ;
        width: 220px;
  
      }
      #value{
        text-align: end;
        display: flex;
        min-width: 50px;
        margin-left: 50px;
      }

      input[type="range"]{
        appearance: none;
        border-radius:50px;
        outline: 1px solid #fff2;
        box-shadow: 0 0 3px #444 inset;
        width: 100%;
        height: 8px;
        overflow: hidden;
      }
      input::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 0px;
        height: 0px;
        background:transparent;
        box-shadow: -407px 0 0 400px ${p => {
    if (p.num > 50) {
      return "#08ff58"
    } else {
      return "#fa0800"
    }
  }};
      }

      input::-moz-range-thumb {
        -webkit-appearance: none;
        width: 0px;
        height: 0px;
        background:darkolivegreen;
        box-shadow: -407px 0 0 400px blue;
      }

     
`;
const Div_Menu = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  bottom: 20px;
  margin-top: 52px;
  span{
    cursor: pointer;
    width: 20%;
    text-align: center;
    padding:5px 0px;
    font-family: 'Alumni Sans', sans-serif;
    font-size:1.5rem;
  }
  #activo{
    border-bottom: 2px solid #079d00;

  }
`;
export { P_Type_text, Div_Menu, Div_Contener_Detail, Div_Contener_Estadisticat, Div_Contener_Text_img, Div_Estaditicas_item }
import styled from "styled-components";
import { pokeBall, type, huevo_type } from "../../img/typeSigno"

const DivContener = styled.div`
  width: 100%;
  background-color:#f4f4f4;

`;

const DivPokemos = styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: auto;
  height: 90vh;
  background-color:#f4f4f4;
  &::-webkit-scrollbar{
    background-color: transparent;
    width: 8px
  }
  &::-webkit-scrollbar-thumb{
   background-color: #3bab64;
  }
`;
const DivcardPoke = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    z-index: 2;
    margin: 90px 0px 0px 35px;
    border-radius: 20px;
    width:20%;
    align-items: center;
    background-color: ${p => type[p.type[0]]};
    background-image: url(${pokeBall});
    background-repeat: no-repeat;
    background-size: 190px;
    background-position:100px 50px;
    background-blend-mode:soft-light;
    height: 190px;
    #Text_Contener{
      position: relative;
      width: 100%;
      padding: 10px 10px;
      bottom: 50px;
      z-index: 2;
      color:#fff;
      font-family: 'Akshar', sans-serif;
      font-size:1.2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      flex-direction: row;
      align-items: end;

      #Text_type{
        border: 1px solid ;
        background-color: #fff3;
        margin: 4px;
        padding:0px 10px;
        border-radius: 5px;
      }
      a{
        text-decoration: none;
        color: #fff;
      }
      p{
        margin: 5px;
        text-transform: capitalize;
        letter-spacing: -1px;
        position: absolute;
        bottom: 100px;
      }
    }
    #img-item{
      left: 78px;
      filter: drop-shadow(5px 2px 2px #0005) ${({ _id, type }) => {
          if (typeof _id === "string") {
             return `${huevo_type[type[0]]}`
          }
         }};
        position: relative;
        bottom: 40px;
        width:${({ _id }) => typeof _id === "string" ? "55%" : "80%"};
        z-index: 1;
      }  
  `;

const DivButton = styled.div`
    box-shadow: 5px 10px 7px rgba(0, 0, 0,0.4);
    display: flex; 
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
    #back ,#next {
        cursor: pointer;
        width: 50px;
        height: 50px;
        border: none;
        font-size: 1.7rem;
        background-color:transparent;
     }
     ${p => `#nump-${p.num}`}{
        background-color:#d9d9d9;
    } 

    #Search{
      display: flex;
      justify-content: flex-end;
      position: relative;
      width: 30%;
      left: 24%;
      input{
        height: 40px;
        width: 100%;
        padding:0 10px;
        border: none;
        outline: none;
        border-radius:4px;
        &:focus{
          border: none;
          outline: none;
        }
      }
      #submit{
        margin:0 10px;
        cursor: pointer;  
        padding:10px 20px;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        background-color:#009e8a;
        color:#fff;
        &:active{
          background-color:#8ac700;
        }
     }
  
    }
`;

const Div_item = styled.div`
    width: 10px;
    height:10px;
    background-color:#fff;
    margin: 20px 5px;
    border-radius: 100px;
`;

const Div_error = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 51pt;
    
`;
export { DivContener, DivPokemos, DivcardPoke, DivButton, Div_item ,Div_error}
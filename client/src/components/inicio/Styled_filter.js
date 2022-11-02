import styled from "styled-components";
import { iconos, positiontype } from "../../img/typeSigno"

const Hrstyle = styled.hr`
  opacity: .2;
  margin: 2rem 0;
  border: 0;
  border-top: 1px solid;
`;

const DivContener = styled.div`
  font-size: 1.1em;
  background: #ffff;
  background: linear-gradient(80deg, #b3fcb3 10%,#fff 70%) ;
  width: 500px;
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  border-left: 6px solid #3bab64;
  #reiniciar{
    display: flex;
    justify-content: center;
    position:relative;
    top: 20px;
    margin: 10px;
    cursor: pointer;
    p{
    border-radius: 50px;
    font-size: 18px;
    font-family: 'Allerta Stencil', sans-serif;
    padding: 0.5rem 1.5rem;
    color:#fff;
    background: linear-gradient(40deg, #03ff68 10%,#00b898 120%);
    }
  }
  nav{
    display: flex;
    width: 100%;
    margin: 60px 0;
    #ulContener{
      margin: 0 10px;
      li{
        font-size: 1.2rem;
        font-family: 'Alumni Sans', sans-serif;
        list-style: none;
        #Ordenamiento{
          font-size: 18px;
          font-family: 'Allerta Stencil', sans-serif;
          padding: 0.5rem 1.5rem;
        }
        button{
          font-weight:500;
          font-size: 18px;
          font-family: 'Aldrich', sans-serif;
          cursor: pointer;
          padding: 0.5rem;
          color:#ffff;
          background: linear-gradient(40deg, #03ff68 10%,#00b898 120%);
          border: none;
          border-radius: 50px;
          margin: 10px 5px;
        }
      }
    }
  }
`;
const LiType = styled.li`
      --i:${p => p.i};
      &:hover{
        z-index: 50;
        position: absolute;
        left: -20px;
        transform: scale(10,5);
      }
`;
const DivTiposPoke = styled.div`
  #typePokemon{
  
     margin: 1px -1px;
    }
`

const DivSigno = styled.div`
    cursor: pointer;

    width: 30px;
    height: 30px;
    border-radius: 50px;
    background: url(${iconos}); 
    background-repeat: no-repeat;
    background-size: 361px;
    background-position:${(p) => positiontype[p.type]};
    ${({pokemos, type})=>{
      if (pokemos && pokemos.error) {
        return "filter: grayscale(100%);"
      }
      if (pokemos && !pokemos.types.includes(type)) {
        return "filter: grayscale(100%);"
      }
      } };
    transition: transform 0.2s;
    p{
     display: none;

    }
      &:hover{
        border:1px solid #3bab64;
        transform: scale(1.5);
        ${({pokemos, type})=>{
           if (pokemos && pokemos.error) {
               return "transform : none;"
            }
            if (pokemos && !pokemos.types.includes(type)) {
              return "transform : none;"
            }
          }};


        p{
          transform:rotate(calc(360deg /-20 * var(--i)));
          font-family: 'Alumni Sans', sans-serif;
          background-color: #1bab64;
        
          ${({pokemos, type})=>{
            if (pokemos && pokemos.error) {
               return "background-color: #444;"
            }
            if (pokemos&& !pokemos.types.includes(type)) {
              return "background-color: #444;"
            }
          }};

          color: #fff;
          border-radius: 50px;
          font-size: 1rem;
          display: inline-block;
          position: relative;
          min-width: 50px;
          margin:-50px;
          text-align:center;
        }
      }
`;
//50

export { DivContener, Hrstyle, DivTiposPoke, DivSigno, LiType }
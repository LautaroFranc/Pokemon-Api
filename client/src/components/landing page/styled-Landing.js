import styled from "styled-components";
import { pokeBall } from "../../img/typeSigno";
const DivContener = styled.div`
  height: 100vh;
  background: rgb(255,192,0);
  background: linear-gradient(98deg, rgba(255,192,0,1) 26%, rgba(255,102,0,1) 93%);
  display: flex;
  flex-direction: row-reverse;
`;
const DivImg1 = styled.div` 
  background: #fff;
  border-radius:10px 0% 0% 100%;
  position: relative;
  background-clip:text;
  filter: drop-shadow(0px 1px 20px rgb(255,192,0));
  img{
    filter: drop-shadow(20px 6px 10px #4444);
  }
`;

const Div_Text = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  flex-direction: column;
  #decrip-text{
    margin: 140px 10% 50px;
    font-family: "sohne-var","Helvetica Neue","Arial",sans-serif;
    font-size:  3.8em;
    font-weight: bold;
    letter-spacing: -1.5px;
    width: 60%;

    p{
      background-clip:text;
      background: linear-gradient( 120deg,#fff 30%,#fff91f 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
        #model_{
          background-clip:text;
          background: linear-gradient( 120deg,#000 50%, #fff91f 52% );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          
        }
    }
    
  }
  
  #boton{
    margin: 0px 10%;
    button{
    font-family: 'Alumni Sans', sans-serif;
    font-size:24pt;
    background-color: #fff91f;
    background-image:url(${pokeBall});
    background-repeat: no-repeat;
    background-size:70px;
    background-position:-20px -30px;
    background-blend-mode:color-burn;
    border: none;
    padding: 10px 50px;
    cursor: pointer;
    color:#000;
    box-shadow: -0 10px 8px  #fc8700; 
  }
  button:active{
    box-shadow: 0 0px 0px  #fc8700; 

  }
}
`;
export {DivImg1,DivContener,Div_Text}


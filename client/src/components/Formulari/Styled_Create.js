import styled, { css, keyframes } from "styled-components";
import { type, huevo_type, pokeBall } from "../../img/typeSigno";
const Div_contener_Form = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;

`;

const Div_img = styled.div`
  background-color: aliceblue;
  background: ${({ type_background }) => `radial-gradient(circle farthest-corner at center center, aliceblue 10%, ${type[type_background[0]]} 100%)`};
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s;
  img{
  width:30%;
  transition: all 1s;
  filter:${({ type_background }) => huevo_type[type_background[0]]};
  transition: all 1s;
}
`;
const error_messge_Animation = keyframes`
  0%{
    font-size:2px;
  
  }
  100%{
    font-size:18pt;
  }
`;

const error_valides_input = css`
    position: relative;
    outline: 1px red;
    animation: input_error 0.1s 2 ;
    @keyframes input_error {
    0%{
        left: -10px;
        outline: 1px solid red;
    }
    50%{
      left: 20px;

    }
    100%{
        left: 5px;
        outline: 1px solid red;
    }
  };
`;

const Form = styled.form`
background-color:#fdd;
background-color: ${({ type_background }) => `${type[type_background[0]]}`};
background-image: url(${pokeBall});
background-repeat: no-repeat;
background-size: 100%;
background-position: 100px;
background-blend-mode:color-burn;
font-family: 'Alumni Sans', sans-serif;
font-size: 17pt;
width: 100%;
display: flex;
transition: all 1s;
#success{
  display: none;
}
#error{
    display: inline-block;
    position: absolute;
    left: 77%;
    top: 56%;
    border-radius: 5px;
    background: #d6002f;
    min-height: 52px;
    overflow: hidden;
    font-size:18pt;
    animation: ${error_messge_Animation} 0.4s 1;
    p{
    color: #fff;
    text-align: center;
    padding: 10px;
    }
  }
  #div-input{
    margin: 20px;
    top: 20px;
    position: relative;
    left:-133px;
    display: flex;
    min-width:150%;
    align-items: center;
    #name-item{
      background-color: #fff;
      background: ${({ type_background }) => `${type[type_background[0]]}55`};
      color: ${({ type_background }) => type_background.length > 0 ? type[type_background[0]]?.includes("f") || type[type_background[0]]?.includes("4") || type[type_background[0]]?.includes("000") ? "#000" : "#fff" : "#000"};
      box-shadow: 0 4px 2px  ${({ type_background }) => `${type[type_background[1]]}66`};
      display: flex;
      border-radius: 5px  0 0 5px;
      justify-content:center;
      align-items: center;
      height: 40px;
      min-width: 30%;
    }
    #input-item{
      background-color: #fff;
      background: ${({ type_background }) => `${type[type_background[0]]}`};
      box-shadow: 2px -1px 10px  ${({ type_background }) => `${type[type_background[1]]}89`} inset;
      border-radius: 0px  5px 5px 0px; 
      position: relative;
      top: 5px;
      height: 40px;
      min-width: 100%;
      display: flex;
      justify-content:center;
      align-items: center;
      border-bottom:1px solid ${({ type_background }) => type_background.length > 0 ? `${type[type_background[1]]}92` : `${type[type_background[0]]}`}; 
      input,select{
        border:none;
        background: #fff;
        box-shadow: 1px 1px 5px  ${({ type_background }) => `${type[type_background[0]]}89`} inset;
        border-radius:5px; 
        height: 30px;
        min-width:90%;
        transition: all 1s;

      }
      input[value]{
        padding: 5px;

      }
      input::placeholder{
        color: ${({ type_background }) => type_background.length > 0 ? `${type[type_background[1]]}92` : "#00044"};
        
        padding: 5px;
      }
      input:focus,select:focus{
        outline:none;
      }
      select{
        padding: 2px;
        ${({ valids }) => valids.error && error_valides_input };
      }
      input[name=${({ valids }) => valids.type}]{
        ${({ valids }) => valids.name && error_valides_input };
        position: none;
      }
    }
  }
  #type_div{
    width:30%;
    position: absolute;
    left: 0;
    top: 0;
    margin: 75px 0px;
      #type_selecionado{
        margin: 7px 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        p{
          cursor: pointer;
          color: #fff;
          border-radius:5px;
          padding: 2px 10px;
          margin:10px 4px;
        }
      }
    }
  #div-button{
    position: relative;
    top: -70px;
    left: -191%;
    button{
      font-family: 'Alumni Sans', sans-serif;
      color: ${({ type_background }) => type[type_background[0]]?.includes("f") ? "#000" : "#fff"};

      background-color: ${({ type_background }) => type[type_background[0]] || "#8ac700"};
      background:${({ type_background }) => ` linear-gradient(52deg,${type[type_background[0]]} 40%,${type[type_background[1]]}),100%`} ;
      cursor: pointer;
      border: none;
      border-radius:5px;
      padding: 18px 38px;
      font-size:18pt;
      transition: all 0.2s;
    }
    button:active{
      padding: 15px 35px;
    }
  }
`;
const P_typeSelect = styled.p`
  background: ${p => type[p.type] + "58"};
`;

const Div_submit = styled.div`
  ${({ props }) =>{
  
    if (props.error) {
    
      return  css`
      display: flex;
      background: red;
      `
    }else if(props.message){
      return  css`
      display: flex;
      background: #8ac700;
      `
    }else{
      return "display : none"
    }

 } };

    justify-content:center;
    align-items: center;
    color: #fff;
    position: absolute;
    left: 77%;
    top: 56%;
    width: 22%;
    border-radius: 5px;
    min-height: 52px;
    overflow: hidden;
    font-size:18pt;
    animation: ${error_messge_Animation} 0.4s 1;
`;

export { P_typeSelect, Div_contener_Form, Div_img, Form,Div_submit }
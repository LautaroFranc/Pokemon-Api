import styled from "styled-components";


const Hrstyle = styled.hr`
  opacity: .5;
  margin: 1rem 0;
  border: 0;
  border-top: 1px solid;
`;
const HeaderStyles = styled.header`
font-family: 'Alumni Sans', sans-serif;
  font-size: 1.5rem;
  color:#000;
  background:transparent;
  width: 100%;
  height: 70px;
  display:flex;
  flex-direction: row;
  border-left: 6px solid #3bab64;
  box-shadow: 2px 2px 2px #d1d1d1;
  a{
  	color:#000;
    text-decoration: none;
  }
  nav{
      width: 100%;
    ul{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: end;
      margin-left: 100px;
      height:70px;
      li{
        margin-left: 10px;
        list-style: none;
        width: 20%
      }
    }
  }
`;
const UserDiv = styled.div`
    display: flex;
    background-color: #fefff5;
    box-shadow: 0px 0px 2px #00bc58 inset;
    margin: 5px 10px;
    border-radius: 100%;
    width: 70px;
    overflow: hidden;
    min-height: 10px;
    img{
      width:160%
    }

`;

const ActionLi = styled.div`
    margin-left: 10px;
    padding:1.2rem 0;
    width: 60%;
    text-align: center;
    color:${p => {
    if (!p.state) {
      return "#d1d1d1";
    }
  }
  } ;
    cursor: pointer;
    border-bottom:${p => {
    if (p.state) {
      return " 2px solid #074D4B";
    }
  }
  }
`;

const SelecDiv = styled.div`
    padding:0.2rem ;
    border-radius:4px;
    width: 100px;
    background-color:
      ${p => {
    if (p.state) {
      return "#343f46"
    }
  }};
     
      &:hover{
      background-color:#074D4B;

      }
`;

export { HeaderStyles, Hrstyle, ActionLi, SelecDiv, UserDiv }
import styled from "styled-components";
const DivLoad = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  flex-direction: column;
  position: absolute;
  left: 50%;
  p::after{
    content: "";
    animation: Loading 1s infinite;
    position: absolute;
    z-index: 555;
  }
  @keyframes Loading {
    0%{
      content:""
    }
    40%{
      content:"."
    }
    80%{
      content:".."
    }
    100%{
      content:"..."
    }
  }

`;


const gifLoad="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif";


export default function LoadingComponent(){
  return( 
  <DivLoad > 
    <img src={gifLoad} alt="🔍" /> 
    <p>Loading</p>
  </DivLoad>)
} 
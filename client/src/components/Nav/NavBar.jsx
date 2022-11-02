import {useEffect,useState ,useRef} from 'react';
import { NavLink,Link } from 'react-router-dom';
import {useDispatch } from "react-redux";
import {HeaderStyles,Hrstyle,ActionLi,UserDiv} from "./Styled_Nav";
import perfil from "../../img/pokemon.png"
//areglar la animacion brusca al cerrar el menu
//areglar el conflicto con los botones al logeare
//llamar a la api y poner la cantidad Y divir en 2  
export default function NavBar() {
	const Dispatch = useDispatch()
	const [Active,setActive] = useState({
		Home:"true",
		Creat:""
	});
	useEffect(()=>{
		
	},[])
	const linkActive=(e)=>{
		//seteamos el color li
		let id= e.target.id
		setActive({
			Home:"",
			Creat:"",
		});
		setActive(pv=>({...pv,[id]:""+id}))
	}
		return (
			<HeaderStyles>
				<UserDiv>
					<NavLink exact to="/Home">
          	<img src={perfil} />
					</NavLink>
        </UserDiv>
				<nav>
					<ul>
							<li id="Home" onClick={ e => linkActive(e)}>
								<NavLink exact to="/Home">
									<ActionLi id="Home" state={Active.Home}>
										<span id="Home" >Pokemons</span> 
									</ActionLi>
								</NavLink>
							</li>
            	<li id="Creat" onClick={e=> linkActive(e)}>
								<NavLink to="/CreatPokemon">
									<ActionLi id="Creat" state={Active.Creat}>
										<span id="Creat">Created pokemons</span>
									</ActionLi>
								</NavLink>
							</li>
					</ul>
				</nav>
			</HeaderStyles>
		);
}
import { TypeActions } from "../actions/index"
const initialState = {
    pokemons: [],
    filtros: null,
    Types: [],
    search_pokemons: null,
    detailsPokemons: null
};

function rootReducer(state = initialState, { type, payload }) {

    switch (type) {
        case TypeActions.GET_POKEMONS: {
            if (payload.Error == "response is not iterable" || payload.error) {
                payload = [payload]
            }
            return {
                ...state,
                pokemons: payload
            }
        }
        case TypeActions.GET_DETALS: {
            return {
                ...state,
                detailsPokemons: payload
            }
        }
        case TypeActions.GET_TYPES: {
        
            if(payload.error){
                return{
                    ...state,
                    pokemons: []      
                }
            }
            return {
                ...state,
                Types: payload
            }
        }
        case TypeActions.SEARCH_POKEMONS: {
            state= {
                ...state,
                filtros: null
            }
        
            if(payload.error){
                return{
                    ...state,
                    search_pokemons: payload
                }
            }
            return {
                ...state,
                search_pokemons: payload
            }
        }
        case TypeActions.FILTRADO: {
            return {
                ...state,
                filtros: payload
            }
        }

        case "REMOVE_DETALLE": {
            return {
                ...state,
                detailsPokemons: null
            }
        }
        case  TypeActions.LIMPIAR_FILTER: {
            state={

                ...state,
                search_pokemons: null
            }
            return {
                ...state,
                filtros: null
            }
        }
        default: return state;
    }

}

export default rootReducer;

export const TypeActions = {
    GET_POKEMONS: "GET_POKEMONS",
    GET_DETALS: "GET_DETALS",
    GET_TYPES: "GET_TYPES",
    SEARCH_POKEMONS: "SEARCH_POKEMONS",
    FILTRADO: "FILTRADO",
    LIMPIAR_FILTER: "LIMPIAR_FILTER",
}

export function getPokemos() {
    return function (dispatch) {
        fetch(`https://backendpokemon.vercel.app/pokemons`)
            .then(r => r.json())
            .then(json => dispatch({ type: TypeActions.GET_POKEMONS, payload: json }))
    }
}

export function getDetails(id) {
    return async function (dispatch) {
        const r = await fetch(`https://backendpokemon.vercel.app/auth/pokemons/${id}`);
        const json = await r.json();
        dispatch({ type: TypeActions.GET_DETALS, payload: json });
    }

}
export function getType() {
    return async function (dispatch) {
        try {
            const r = await fetch(`https://backendpokemon.vercel.app/auth/types`);
            const json = await r.json();
            dispatch({ type: TypeActions.GET_TYPES, payload: json });
        } catch (error) {
            console.log(error);
        }
      
    }
}
export function searchPokemos(name) {
    return async function (dispatch) {
        const r = await fetch(`https://backendpokemon.vercel.app/auth/pokemons/?name=${name}`);
        const json = await r.json();
        dispatch({ type: TypeActions.SEARCH_POKEMONS, payload: json });
    }
}
export function filtros_oredenamientos(payload) {
    return {
        type: TypeActions.FILTRADO,
        payload
    }

}


export function removeDetali() {
    return {
        type: "REMOVE_DETALLE",
    }
}

export function Limpiar_filter() {
    return {
        type: TypeActions.LIMPIAR_FILTER,
    }
}



import axios from "axios"
import { 
    FILLEDHERO,
    REJECTHERO,
    SEARCHHERO,
    OPENAPILINK,
    SEARCHHEROTERM,
    SELECTEDHERO,
    OPENAPILINKAPI
} from './index'

export function getHeroes() {
    return function (dispatch) {
        dispatch({type: SEARCHHERO})
        axios.get(`${OPENAPILINK+OPENAPILINKAPI}/heroStats`)
            .then((response) => {
                dispatch({ type: FILLEDHERO, payload: response.data })
            })
            .catch((err) => {
                dispatch({ type: REJECTHERO, payload: err})
            })
    }
}
export function searchHeroes (heroes = []) {
    return { 
        type: SEARCHHEROTERM, 
        payload: heroes
    }
}

export function selectHeroes(hero=[]){
    return {
        type: SELECTEDHERO,
        payload: hero
    }
}

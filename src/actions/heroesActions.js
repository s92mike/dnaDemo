import axios from "axios"
import { 
    FILLEDHERO,
    REJECTHERO,
    SEARCHHERO,
    OPENAPILINK,
    SEARCHHEROTERM 
} from './index'

export function getHeroes() {
	return function (dispatch) {
		dispatch({type: SEARCHHERO});
		axios.get(`${OPENAPILINK}/heroes`)
			.then((response) => {
				dispatch({ type: FILLEDHERO, payload: response.data })
			})
			.catch((err) => {
				dispatch({ type: REJECTHERO, payload: err})
			})
	}
}
export function searchHeroes (terms='', heroes = []) {
	console.log(terms, heroes)
	return function (dispatch) {
		
		//temp.filter(word => word == terms )
		const temp = heroes.map(hero => hero.localized_name)
		dispatch({ type: SEARCHHEROTERM, payload: 'test' })
	}
}
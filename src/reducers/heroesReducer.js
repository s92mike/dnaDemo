import { 
    FILLEDHERO,
    REJECTHERO,
    SEARCHHERO,
    SEARCHHEROTERM,
    SELECTEDHERO
} from '../actions'

export default function render(state={
    heroes: [],
    fetched: false,
    fetching: false,
    error: null,
    hero: {}
}, action) {
    switch (action.type) {
        case SEARCHHERO:
            return {...state, fetching: true}
            break
        case REJECTHERO:
            return {...state, fetching: false, error: action.payload}
            break
        case FILLEDHERO:
            return { 
                ...state, 
                fetching: false, 
                fetched: true,
                heroes: action.payload 
            }
            break
        case SEARCHHEROTERM:
            return {...state, heroes: action.payload}
        case SELECTEDHERO:
            return {...state, hero: action.payload}
    }
    return state
}
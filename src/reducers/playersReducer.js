import {
    GETPLAYERS,
    REJECTEDPLAYERS,
    FILLEDPLAYERS
} from './'
export default function render(state={
    players: [],
    fetched: false,
    fetching: false,
    error: null,
    term: ''
}, action) {
    switch (action.type) {
        case GETPLAYERS:
            return {...state, fetching: true}
            break
        case REJECTEDPLAYERS:
            return {...state, fetching: false, error: action.payload}
            break
        case FILLEDPLAYERS:
            return { 
                ...state, 
                fetching: false, 
                fetched: true,
                players: action.payload               
            }
            break
    }
    return state
}
import { 
    FILLED_HERO,
    REJECT_HERO,
    GET_HERO,
    SEARCH_HERO_TERM,
    SELECTED_HERO,
    GET_PLAYERS,
    REJECTEDPLAYERS,
    FILLED_PLAYERS,
    GET_TEAMS,
    FILLED_TEAMS,
    REJECTEDTEAMS,
    SEARCH_PLAYER_TERM,
    FILLED_SEARCH_PLAYER_TERM,
    REJECTED_SEARCH_PLAYER_TERM,
    GET_ALL_INITIALIZED_DATA,
    FILLED_INITIALIZED_DATA,
    REJECTED_INITIALIZED_DATA,
    SET_FETCHING,
    UPDATE_AXIOS_SOURCE,
    GET_PLAYER_BY_ID,
    REJECTED_PLAYER_BY_ID,
    FILLED_PLAYER_BY_ID
} from '../actions'

export default (state={
    heroes: [],
    players: [],
    teams: [],
    fetching: false,
    error: null,
    axiosSource: null
}, action) => {
    switch (action.type) {
        case SEARCH_HERO_TERM:
            return {...state, heroes: action.payload}            
        case SELECTED_HERO:
            return {...state, hero: action.payload}            
        case GET_HERO:
            return {...state, fetching: true}            
        case REJECT_HERO:
            return {...state, fetching: false, error: action.payload}            
        case FILLED_HERO:
            return { 
                ...state, 
                fetching: false, 
                heroes: action.payload 
            }            
        case GET_PLAYERS:
            return {...state, fetching: true}            
        case REJECTEDPLAYERS:
            return {...state, fetching: false, error: action.payload}            
        case FILLED_PLAYERS:
            return { 
                ...state, 
                fetching: false, 
                players: action.payload               
            }            
        case GET_TEAMS:
            return {...state, fetching: true}            
        case REJECTEDTEAMS:
            return {...state, fetching: false, error: action.payload}
        case FILLED_TEAMS:
            return { 
                ...state, 
                fetching: false, 
                teams: action.payload               
            }
        case SEARCH_PLAYER_TERM:
            return {...state, fetching: true}
        case REJECTED_SEARCH_PLAYER_TERM:
            return {...state, error: action.payload}
        case FILLED_SEARCH_PLAYER_TERM:
            return { 
                ...state, 
                fetching: false,               
            }
        case GET_ALL_INITIALIZED_DATA:
            return {...state, fetching: true}
        case REJECTED_INITIALIZED_DATA:
            return {...state, fetching: false, error: action.payload}
        case FILLED_INITIALIZED_DATA:
            return { 
                ...state, 
                fetching: false, 
                players: action.payload.players,
                heroes: action.payload.heroes,
                teams: action.payload.teams,
                axiosSource: action.payload.axiosSource             
            }
        case GET_PLAYER_BY_ID:
            return {...state, fetching: true}
        case REJECTED_PLAYER_BY_ID:
            return {...state, fetching: false, error: action.payload}
        case FILLED_PLAYER_BY_ID:
            return { 
                ...state, 
                fetching: false           
            }
        case SET_FETCHING:
            return {...state, fetching: false}
        case UPDATE_AXIOS_SOURCE:
            return {...state, axiosSource: action.payload}
    }
    return state
}
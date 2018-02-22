import { 
    FILLEDHERO,
    REJECTHERO,
    GETHERO,
    SEARCHHEROTERM,
    SELECTEDHERO,
    GETPLAYERS,
    REJECTEDPLAYERS,
    FILLEDPLAYERS,
    GETTEAMS,
    FILLEDTEAMS,
    REJECTEDTEAMS,
    SEARCHPLAYERTERM,
    FILLEDSEARCHPLAYERTERM,
    REJECTEDSEARCHPLAYERTERM,
    GETALLINITIALIZEDDATA,
    FILLEDINITIALIZEDDATA,
    REJECTEDINITIALIZEDDATA,
    SETFETCHING,
    UPDATEAXIOSSOURCE,
    GETPLAYERBYID,
    REJECTEDPLAYERBYID,
    FILLEDPLAYERBYID
} from '../actions'

export default function render(state={
    heroes: [],
    players: [],
    teams: [],
    fetching: false,
    error: null,
    axiosSource: null,
    axiosCancelToken: null
}, action) {
    switch (action.type) {
        case SEARCHHEROTERM:
            return {...state, heroes: action.payload}
            break
        case SELECTEDHERO:
            return {...state, hero: action.payload}
            break
        case GETHERO:
            return {...state, fetching: true}
            break
        case REJECTHERO:
            return {...state, fetching: false, error: action.payload}
            break
        case FILLEDHERO:
            return { 
                ...state, 
                fetching: false, 
                heroes: action.payload 
            }
            break
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
                players: action.payload               
            }
            break
        case GETTEAMS:
            return {...state, fetching: true}
            break
        case REJECTEDTEAMS:
            return {...state, fetching: false, error: action.payload}
            break
        case FILLEDTEAMS:
            return { 
                ...state, 
                fetching: false, 
                teams: action.payload               
            }
            break
        case SEARCHPLAYERTERM:
            return {...state, fetching: true}
            break
        case REJECTEDSEARCHPLAYERTERM:
            return {...state, error: action.payload}
            break
        case FILLEDSEARCHPLAYERTERM:
            return { 
                ...state, 
                fetching: false,               
            }
            break 
        case GETALLINITIALIZEDDATA:
            return {...state, fetching: true}
            break
        case REJECTEDINITIALIZEDDATA:
            return {...state, fetching: false, error: action.payload}
            break
        case FILLEDINITIALIZEDDATA:
            return { 
                ...state, 
                fetching: false, 
                players: action.payload.players,
                heroes: action.payload.heroes,
                teams: action.payload.teams,
                axiosSource: action.payload.axiosSource             
            }
            break
        case GETPLAYERBYID:
            return {...state, fetching: true}
            break
        case REJECTEDPLAYERBYID:
            return {...state, fetching: false, error: action.payload}
            break
        case FILLEDPLAYERBYID:
            return { 
                ...state, 
                fetching: false           
            }
            break
        case SETFETCHING:
            return {...state, fetching: false}
            break
        case UPDATEAXIOSSOURCE:
            return {...state, axiosSource: action.payload}
    }
    return state
}
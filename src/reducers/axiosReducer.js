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

export default (state={
    heroes: [],
    players: [],
    teams: [],
    fetching: false,
    error: null,
    axiosSource: null
}, action) => {
    switch (action.type) {
        case SEARCHHEROTERM:
            return {...state, heroes: action.payload}            
        case SELECTEDHERO:
            return {...state, hero: action.payload}            
        case GETHERO:
            return {...state, fetching: true}            
        case REJECTHERO:
            return {...state, fetching: false, error: action.payload}            
        case FILLEDHERO:
            return { 
                ...state, 
                fetching: false, 
                heroes: action.payload 
            }            
        case GETPLAYERS:
            return {...state, fetching: true}            
        case REJECTEDPLAYERS:
            return {...state, fetching: false, error: action.payload}            
        case FILLEDPLAYERS:
            return { 
                ...state, 
                fetching: false, 
                players: action.payload               
            }            
        case GETTEAMS:
            return {...state, fetching: true}            
        case REJECTEDTEAMS:
            return {...state, fetching: false, error: action.payload}
        case FILLEDTEAMS:
            return { 
                ...state, 
                fetching: false, 
                teams: action.payload               
            }
        case SEARCHPLAYERTERM:
            return {...state, fetching: true}
        case REJECTEDSEARCHPLAYERTERM:
            return {...state, error: action.payload}
        case FILLEDSEARCHPLAYERTERM:
            return { 
                ...state, 
                fetching: false,               
            }
        case GETALLINITIALIZEDDATA:
            return {...state, fetching: true}
        case REJECTEDINITIALIZEDDATA:
            return {...state, fetching: false, error: action.payload}
        case FILLEDINITIALIZEDDATA:
            return { 
                ...state, 
                fetching: false, 
                players: action.payload.players,
                heroes: action.payload.heroes,
                teams: action.payload.teams,
                axiosSource: action.payload.axiosSource             
            }
        case GETPLAYERBYID:
            return {...state, fetching: true}
        case REJECTEDPLAYERBYID:
            return {...state, fetching: false, error: action.payload}
        case FILLEDPLAYERBYID:
            return { 
                ...state, 
                fetching: false           
            }
        case SETFETCHING:
            return {...state, fetching: false}
        case UPDATEAXIOSSOURCE:
            return {...state, axiosSource: action.payload}
    }
    return state
}
import { 
    NEXTPAGE,
    PREVPAGE,
    PAGEMAX
} from '../actions'
export default function render(state={
    status: "Heroes", //1-heroes, 2-items, 3-players
    pageListStatus: 0,
    maxListStatus: PAGEMAX,
    maximumListArr: null
}, action) {
    const { type, payload } = action
    switch (type) {
        case NEXTPAGE:
            return {...state, pageListStatus: payload.first+PAGEMAX, maxListStatus: payload.offset+PAGEMAX}
            break
        case PREVPAGE:
            return {...state, pageListStatus: payload.first-PAGEMAX, maxListStatus: payload.offset-PAGEMAX}
            break            
    }
    return state
}
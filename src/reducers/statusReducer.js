import { 
    NEXTPAGE,
    PREVPAGE,
    PAGEMAX,
    GETCURRENTPAGE,
    SERCHITEMSUPDATE,
    UPDATETERMS,
    SERCHITEMTERMS
} from '../actions'
export default function render(state={
    status: "Heroes", //1-heroes, 2-items, 3-players
    pageListStatus: 0,
    maxListStatus: PAGEMAX,
    maximumListArr: null,
    terms: '',
    searchItems: []
}, action) {
    const { type, payload } = action
    switch (type) {
        case NEXTPAGE:
            return {...state, pageListStatus: payload.first+PAGEMAX, maxListStatus: payload.offset+PAGEMAX}
            break
        case PREVPAGE:
            return {...state, pageListStatus: payload.first-PAGEMAX, maxListStatus: payload.offset-PAGEMAX}
            break     
        case GETCURRENTPAGE:
            return {...state, pageListStatus: payload.first, maxListStatus: payload.offset}
            break
        case SERCHITEMSUPDATE:
            return {...state, searchItems: payload}
            break
        case UPDATETERMS:
            return {...state, terms: payload}
            break
        case SERCHITEMTERMS:
            return {...state, 
                terms: payload.terms, 
                searchItems: payload.searchItems,
                pageListStatus: 0,
                maxListStatus: payload.maxListStatus
            }
            break
    }
    return state
}
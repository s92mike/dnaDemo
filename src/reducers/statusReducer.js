import { 
    NEXTPAGE,
    PREVPAGE,
    PAGEMAX,
    GETCURRENTPAGE,
    SEARCHITEMSUPDATE,
    UPDATETERMS,
    SEARCHITEMTERMS,
    SETCATTYPE
} from '../actions'
export default function render(state={
    category: "Heroes",
    pageRangeFrom: 0,
    pageRangeTo: PAGEMAX,
    terms: '',
    searchItems: [],
    item: {}
}, action) {
    const { type, payload } = action
    switch (type) {
        case UPDATETERMS:
            return {...state, terms: payload}
            break
        case SEARCHITEMSUPDATE:
            return {...state, searchItems: payload}
            break
        case GETCURRENTPAGE:
            return {...state, pageRangeFrom: payload.first, pageRangeTo: payload.offset}
            break
        case NEXTPAGE:
            return {...state, pageRangeFrom: payload.first+PAGEMAX, pageRangeTo: payload.offset+PAGEMAX}
            break
        case PREVPAGE:
            return {...state, pageRangeFrom: payload.first-PAGEMAX, pageRangeTo: payload.offset-PAGEMAX}
            break     
        case SEARCHITEMTERMS:
            return {
                ...state, 
                terms: payload.terms, 
                searchItems: payload.searchItems,
                pageRangeFrom: 0,
                pageRangeTo: payload.maxListStatus
            }
            break
        case SETCATTYPE:
            return {
                ...state, 
                category: payload,
                terms: '',
                pageRangeFrom: 0,
                pageRangeTo: PAGEMAX
            } 
            break            
    }
    return state
}
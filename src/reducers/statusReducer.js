import { 
    NEXTPAGE,
    PREVPAGE,
    PAGEMAX,
    GETCURRENTPAGE,
    SEARCHITEMSUPDATE,
    UPDATETERMS,
    SEARCHITEMTERMS,
    SETCATTYPE,
    SETITEM,
    SETSELECTEDITEMS,
    FILLEDSEARCHPLAYERTERMSTATUS,
    FILLEDPLAYERBYIDSTATUS,
    UPDATEITEMSEARCH
} from '../actions'
export default (state={
    category: "Heroes",
    pageRangeFrom: 0,
    pageRangeTo: PAGEMAX,
    terms: '',
    searchItems: [],
    item: {}
}, action) => {
    const { type, payload } = action
    switch (type) {
        case SETITEM:
            return {...state, item: payload}
            break         
        case UPDATETERMS:
            return {...state, terms: payload}
            break
        case SEARCHITEMSUPDATE:
            return {...state, searchItems: payload}
            break
        case FILLEDSEARCHPLAYERTERMSTATUS:
            return {...state, searchItems: payload}
        case GETCURRENTPAGE:
            return {...state, pageRangeFrom: payload.first, pageRangeTo: payload.offset}
            break
        case NEXTPAGE:
            return {...state, pageRangeFrom: payload.first+PAGEMAX, pageRangeTo: payload.offset+PAGEMAX}
            break
        case PREVPAGE:
            return {...state, pageRangeFrom: payload.first-PAGEMAX, pageRangeTo: payload.offset-PAGEMAX}
            break     
        case SETSELECTEDITEMS:
            return {...state, item: payload[0], searchItems: payload}
        case FILLEDPLAYERBYIDSTATUS:
            return {...state, item: action.payload}
        case UPDATEITEMSEARCH:
            return {...state, searchItems: [], item: {}}
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
                category: payload.category,
                terms: '',
                item: payload.searchItems[0],
                pageRangeFrom: 0,
                pageRangeTo: PAGEMAX,
                searchItems: payload.searchItems
            } 
            break      
    }
    return state
}
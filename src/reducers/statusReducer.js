import { 
    NEXT_PAGE,
    PREV_PAGE,
    PAGEMAX,
    GETCURRENTPAGE,
    SEARCH_ITEMS_UPDATE,
    UPDATE_TERMS,
    SEARCH_ITEM_TERMS,
    SET_CAT_TYPE,
    SET_ITEM,
    SET_SELECTED_ITEMS,
    FILLED_SEARCH_PLAYER_TERM_STATUS,
    FILLED_PLAYER_BY_ID_STATUS,
    UPDATE_ITEM_SEARCH
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
        case SET_ITEM:
            return {...state, item: payload}
                     
        case UPDATE_TERMS:
            return {...state, terms: payload}
            
        case SEARCH_ITEMS_UPDATE:
            return {...state, searchItems: payload}
            
        case FILLED_SEARCH_PLAYER_TERM_STATUS:
            return {...state, searchItems: payload}
        case GETCURRENTPAGE:
            return {...state, pageRangeFrom: payload.first, pageRangeTo: payload.offset}
            
        case NEXT_PAGE:
            return {...state, pageRangeFrom: payload.first+PAGEMAX, pageRangeTo: payload.offset+PAGEMAX}
            
        case PREV_PAGE:
            return {...state, pageRangeFrom: payload.first-PAGEMAX, pageRangeTo: payload.offset-PAGEMAX}
                 
        case SET_SELECTED_ITEMS:
            return {...state, item: payload[0], searchItems: payload}
        case FILLED_PLAYER_BY_ID_STATUS:
            return {...state, item: action.payload}
        case UPDATE_ITEM_SEARCH:
            return {...state, searchItems: [], item: {}}
        case SEARCH_ITEM_TERMS:
            return {
                ...state, 
                terms: payload.terms, 
                searchItems: payload.searchItems,
                pageRangeFrom: 0,
                pageRangeTo: payload.maxListStatus
            }
            
        case SET_CAT_TYPE:
            return {
                ...state, 
                category: payload.category,
                terms: '',
                item: payload.searchItems[0],
                pageRangeFrom: 0,
                pageRangeTo: PAGEMAX,
                searchItems: payload.searchItems
            } 
                  
    }
    return state
}
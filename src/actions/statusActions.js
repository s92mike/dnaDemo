import { 
    NEXT_PAGE,
    PREV_PAGE,
    SEARCH_ITEMS_UPDATE,
    UPDATE_TERMS,
    SEARCH_ITEM_TERMS,
    PAGEMAX,
    SET_CAT_TYPE,
    SET_ITEM
} from './index'

export function nextPageList(firstPage=0, offPage=PAGEMAX){
    return {
        type: NEXT_PAGE,
        payload: {
            first: firstPage,
            offset: offPage
        }
    }
}

export function prevPageList(firstPage=0, offPage=PAGEMAX){
    return {
        type: PREV_PAGE,
        payload: {
            first: firstPage,
            offset: offPage
        }
    }
}

export function updateSearchItems(items=[]) {
    return {
        type: SEARCH_ITEMS_UPDATE,
        payload: items
    }
}

export function setTerms(terms='') {
    return { 
        type: UPDATE_TERMS, 
        payload: terms
    }
}

export function searchItemsTerms(terms="", items=[]) {
    return { 
        type: SEARCH_ITEM_TERMS, 
        payload: {
            terms: terms,
            searchItems: items,
            maxListStatus: PAGEMAX
        }
    }
}

export function setCategoryAndItems(type="", items=[]) {
    return {
        type: SET_CAT_TYPE,
        payload: {
            category: type,
            searchItems: items
        }
    }
}

export function setStatusItem(item=[]) {
    return {
        type: SET_ITEM,
        payload: item
    }
}
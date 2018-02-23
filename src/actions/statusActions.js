import { 
    NEXTPAGE,
    PREVPAGE,
    SEARCHITEMSUPDATE,
    UPDATETERMS,
    SEARCHITEMTERMS,
    PAGEMAX,
    SETCATTYPE,
    SETITEM
} from './index'

export function nextPageList(firstPage=0, offPage=PAGEMAX){
    return {
        type: NEXTPAGE,
        payload: {
            first: firstPage,
            offset: offPage
        }
    }
}

export function prevPageList(firstPage=0, offPage=PAGEMAX){
    return {
        type: PREVPAGE,
        payload: {
            first: firstPage,
            offset: offPage
        }
    }
}

export function updateSearchItems(items=[]) {
    return {
        type: SEARCHITEMSUPDATE,
        payload: items
    }
}

export function setTerms(terms='') {
    return { 
        type: UPDATETERMS, 
        payload: terms
    }
}

export function searchItemsTerms(terms="", items=[]) {
    return { 
        type: SEARCHITEMTERMS, 
        payload: {
            terms: terms,
            searchItems: items,
            maxListStatus: PAGEMAX
        }
    }
}

export function setCategoryAndItems(type="", items=[]) {
    return {
        type: SETCATTYPE,
        payload: {
            category: type,
            searchItems: items
        }
    }
}

export function setStatusItem(item=[]) {
    return {
        type: SETITEM,
        payload: item
    }
}
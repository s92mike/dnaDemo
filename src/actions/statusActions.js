import { 
    NEXTPAGE,
    PREVPAGE,
    GETCURRENTPAGE,
    SEARCHITEMSUPDATE,
    UPDATETERMS,
    SEARCHITEMTERMS,
    PAGEMAX,
    SETCATTYPE
} from './index'

export function nextPageList(firstPage, nextPage){
    return {
        type: NEXTPAGE,
        payload: {
            first: firstPage,
            offset: nextPage
        }
    }
}

export function prevPageList(firstPage, nextPage){
    return {
        type: PREVPAGE,
        payload: {
            first: firstPage,
            offset: nextPage
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

export function searchItemsTerms(terms, items=[]) {
    return { 
        type: SEARCHITEMTERMS, 
        payload: {
            terms: terms,
            searchItems: items,
            maxListStatus: PAGEMAX
        }
    }
}

export function setCategoryType(type) {
    return {
        type: SETCATTYPE,
        payload: type
    }
}
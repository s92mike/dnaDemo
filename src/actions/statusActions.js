import { 
    NEXTPAGE,
    PREVPAGE,
    GETCURRENTPAGE,
    SERCHITEMSUPDATE,
    UPDATETERMS,
    SERCHITEMTERMS,
    PAGEMAX
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

export function updateSearchItems(items) {
    return {
        type: SERCHITEMSUPDATE,
        payload: items
    }
}

export function setTerms(terms) {
    return { 
        type: UPDATETERMS, 
        payload: terms
    }
}

export function searchItemsTerms(terms, items = []) {
    return { 
        type: SERCHITEMTERMS, 
        payload: {
            terms: terms,
            searchItems: items,
            maxListStatus: PAGEMAX
        }
    }
}
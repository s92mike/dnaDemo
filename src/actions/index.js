export const PAGEMAX = 6
export const SELECTORS = ["Heroes", "Items", "Players"]

export const SEARCHHERO = "FETCH_HERO"
export const REJECTHERO = "FETCH_HERO_REJECTED"
export const FILLEDHERO = "FETCH_HERO_FULFILLED"
export const CLICKUSER = "CLICK_FB_USER"
export const SEARCHHEROTERM = "SEARCH_HERO"
export const SELECTEDHERO = "SELECTED_HERO"

export const NEXTPAGE = "NEXT_PAGE"
export const PREVPAGE = "PREV_PAGE"
export const SERCHITEMSUPDATE = "UPDATE_SEARCH_ITEMS"
export const UPDATETERMS = "UPDATE_TERMS"
export const SERCHITEMTERMS = "SEARCH_ITEMS"

export const STEAMWEBAPIKEY = "3A7C93E54E7D1BE7F159B9B89EE16AA5"
export const OPENDOTAPLAYERID = "76561198071108778"
export const OPENAPILINK = "https://api.opendota.com"
export const OPENAPILINKAPI = "/api"
export const ACTIVEFIRST = "ACTIVEFIRST"
export const ACTIVELAST = "ACTIVELAST"

export const searchItemsByTerms = (terms, items) => {
    return items.filter(item=>item.localized_name.toLowerCase().match("^" + terms.toLowerCase()))
}
export const checkDisabled = (conditions='',offPage='', maxItems='') => {
    switch(conditions){
        case ACTIVEFIRST:
            return !offPage?" disabled":""
            break
        case ACTIVELAST: 
            return offPage>=maxItems?" disabled":""
            break
    }
    return ""
}
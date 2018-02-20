export const PAGEMAX = 6
export const SELECTORS = ["Heroes", "Players", "Teams"]
export const CATEGORY1 = "Heroes"
export const CATEGORY2 = "Players"
export const CATEGORY3 = "Teams"

export const GETHERO = "FETCH_HERO"
export const REJECTHERO = "FETCH_HERO_REJECTED"
export const FILLEDHERO = "FETCH_HERO_FULFILLED"
export const CLICKUSER = "CLICK_FB_USER"
export const SEARCHHEROTERM = "SEARCH_HERO"
export const SELECTEDHERO = "SELECTED_HERO"

export const GETPLAYERS = "GET_PLAYERS"
export const REJECTPLAYERS = "FETCH_PLAYERS_REJECTED"
export const FILLEDPLAYERS = "FETCH_PLAYERS_FULFILLED"

export const NEXTPAGE = "NEXT_PAGE"
export const PREVPAGE = "PREV_PAGE"
export const SEARCHITEMSUPDATE = "UPDATE_SEARCH_ITEMS"
export const UPDATETERMS = "UPDATE_TERMS"
export const SEARCHITEMTERMS = "SEARCH_ITEMS"
export const SETCATTYPE = "SET_CATEGORY_TYPE"

export const STEAMWEBAPIKEY = "3A7C93E54E7D1BE7F159B9B89EE16AA5"
export const OPENDOTAPLAYERID = "76561198071108778"
export const OPENAPILINK = "https://api.opendota.com"
export const OPENAPILINKAPI = "/api"
export const OPENAPILINKTEAM = "/teams"
export const OPENAPILINKTEAMTL = "/2163"
export const OPENAPILINKPLAYERS = "/players"
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
export const selectItemsArray = (categories, heroes = [], players = [], teams = []) => {
    switch(categories) {
        case CATEGORY1:
            return {items: heroes}
            break
        case CATEGORY2:
            return {items: players}
            break
        case CATEGORY3:
            return {items: teams}
            break
    }
    return {
        items: []
    }
}

            // switch(type) {
            //     case CATEGORY1:
            //         dispatch(setTermHeroes(terms))
            //         break   
            //     case CATEGORY2:
            //         dispatch(setTermPlayers(terms))
            //         break 
            //     case CATEGORY3:
            //         dispatch(setTermTeams(terms))
            //         break                                                  
            // }
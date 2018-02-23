import React from 'react'

export const PAGEMAX = 6
export const GAMEPLAYERROLES = ['No Position','Carry','Mid','Offlane', 'Roaming Support', 'Support']
export const SELECTORS = ["Heroes", "Teams", "Players"]
export const CATEGORY1 = "Heroes"
export const CATEGORY2 = "Players"
export const CATEGORY3 = "Teams"

export const CLICKUSER = "CLICK_FB_USER"
export const SEARCHHEROTERM = "SEARCH_HERO"
export const SELECTEDHERO = "SELECTED_HERO"

export const GETHERO = "FETCH_HEROES"
export const REJECTHERO = "FETCH_HEROES_REJECTED"
export const FILLEDHERO = "FETCH_HEROES_FULFILLED"
export const GETPLAYERS = "GET_PLAYERS"
export const REJECTPLAYERS = "FETCH_PLAYERS_REJECTED"
export const FILLEDPLAYERS = "FETCH_PLAYERS_FULFILLED"
export const GETTEAMS = "FETCH_TEAMS"
export const REJECTTEAMS = "FETCH_TEAMS_REJECTED"
export const FILLEDTEAMS = "FETCH_TEAMS_FULFILLED"
export const SEARCHPLAYERTERM = "FETCH_SEARCH_PLAYER"
export const FILLEDSEARCHPLAYERTERM = "FETCH_SEARCH_PLAYER_FILLED"
export const REJECTEDSEARCHPLAYERTERM = "FETCH_SEARCH_PLAYER_REJECTED"
export const GETALLINITIALIZEDDATA = "GET_INITIALIZED_DATA"
export const FILLEDINITIALIZEDDATA = "FILLED_INITIALIZED_DATA"
export const REJECTEDINITIALIZEDDATA = "REJECTED_INITIALIZED_DATA"
export const SETFETCHING = "SET_FETCHING"
export const UPDATEAXIOSSOURCE = "UPDATE_AXIOS_SOURCE"
export const FILLEDSEARCHPLAYERTERMSTATUS = "FILLED_SEARCH_PLAYER_TERM_TO_STATUS"
export const GETPLAYERBYID = "FETCH_PLAYER_BY_ID"
export const REJECTEDPLAYERBYID = "FETCH_PLAYER_BY_ID_REJECTED"
export const FILLEDPLAYERBYID = "FETCH_PLAYER_BY_ID_FILLED"

export const NEXTPAGE = "NEXT_PAGE"
export const PREVPAGE = "PREV_PAGE"
export const SEARCHITEMSUPDATE = "UPDATE_SEARCH_ITEMS"
export const UPDATETERMS = "UPDATE_STATUS_TERMS"
export const SEARCHITEMTERMS = "SEARCH_STATUS_ITEMS"
export const SETCATTYPE = "SET_STATUS_CATEGORY_TYPE"
export const SETITEM = "SET_STATUS_ITEM"
export const SETSELECTEDITEMS = "SET_SELECTED_ITEMS"
export const FILLEDPLAYERBYIDSTATUS = "FETCH_PLAYER_BY_ID_STATUS_FILLED"
export const UPDATEITEMSEARCH = "UPDATE_ITEM_SEARCH"

export const STEAMWEBAPIKEY = "3A7C93E54E7D1BE7F159B9B89EE16AA5"
export const OPENDOTAPLAYERID = "76561198071108778"
export const OPENAPILINK = "https://api.opendota.com"
export const OPENAPILINKAPI = "/api"
export const OPENAPILINKTEAM = "/teams"
export const OPENAPILINKTEAMTL = "/2163"
export const OPENAPILINKPLAYERS = "/players"
export const ACTIVEFIRST = "ACTIVEFIRST"
export const ACTIVELAST = "ACTIVELAST"
export const DOTAICON = "/dota_icon.png"

export const searchItemsByTerms = (terms, items) => {
    return items.filter(item=>item.display_name.toLowerCase().match("^" + terms.toLowerCase()))
}
export const preDefinedMessage = (category=CATEGORY1) => {
    switch(category) {
        case CATEGORY1:
            return {
                first: 'Denied!!!',
                second: 'You Got Nothing'
            }
            break
        case CATEGORY2:
            return {
                first: 'Search again...',
                second: 'Or wait...'
            }
            break
        case CATEGORY3:
            return {
                first: 'Try again!!!!',
                second: 'You Still Got Nothing...'
            }
            break                        
        default:
            return {first: 'preDefinedMessage!!!!', second: 'No category selected!!!!'}
            break
    }
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
export const selectItemsArray = (categories=CATEGORY1, heroes = [], players = [], teams = []) => {
    switch(categories) {
        case CATEGORY1:
            return {
                items: heroes.map(hero=>Object.assign(hero, {
                    display_id: hero.id, 
                    display_name: hero.localized_name, 
                    display_icon: `${OPENAPILINK+hero.icon}`,
                    display_img: `${OPENAPILINK+hero.img}`,
                    display_line: [
                        `Primary Attribute: ${String(hero.primary_attr).toUpperCase()}`,
                        `Attack Type: ${hero.attack_type}`,
                        `Roles: ${Array(hero.roles).join(", ")}`
                    ]
                })),
                maximum: heroes.length
            }
            break
        case CATEGORY2:
            return {
                items: players.filter(player=>player.steamid!==null).map(player=>Object.assign(player,{
                    display_id: player.account_id,
                    display_name: player.personaname,
                    display_icon: player.avatar==undefined?player.avatarfull:player.avatar,
                    display_img: player.avatarfull,
                    display_line:[
                        `Account ID: ${player.display_id}`,
                        `Steam ID: ${player.steamid}`,
                        `Professional Name: ${player.name}`,
                        <div><a href={player.profileurl} target='_blank'>Profile link</a></div>
                    ]                    
                })),
                maximum: players.length
            }
            break
        case CATEGORY3:
            return {
                items: teams.map(team=>Object.assign(team, {
                    display_id: team.team_id, 
                    display_name: team.name, 
                    display_icon: team.logo_url===null?DOTAICON:team.logo_url,
                    display_img: team.logo_url===null?DOTAICON:team.logo_url,
                    display_line: [
                        `Team ID: ${team.team_id}`,
                        `Wins: ${team.wins}`,
                        `Losses: ${team.losses}`
                    ]
                })),
                maximum: teams.length
            }
            break
        default:
            return {
                items: [],
                maximum: 0
            }
    }
}

export const updatePlayerArray = (player={}, newplayer={}) => {
    return {
        ...player,
        display_icon: newplayer.profile.avatar==undefined?newplayer.profile.avatarfull:newplayer.profile.avatar,
        display_img: newplayer.profile.avatarfull,
        display_line:[
            `Account ID: ${player.display_id}`,
            `Steam ID: ${newplayer.profile.steamid}`,
            `MMR ESTIMATE: ${newplayer.mmr_estimate.estimate!==undefined?newplayer.mmr_estimate.estimate:'Unable to Estimate'}`,
            `Professional Name: ${(newplayer.profile.name==null)?'':newplayer.profile.name}`,
            <div><a href={newplayer.profile.profileurl} target='_blank'>Profile link</a></div>
        ]                    
    }
}

export const checkObjectEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false
    }
    return true
}

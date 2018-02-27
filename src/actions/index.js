import React from 'react'

export const PAGEMAX = 6
export const GAME_PLAYER_ROLES = ['No Position','Carry','Mid','Offlane', 'Roaming Support', 'Support']
export const SELECTORS = ["Heroes", "Teams", "Players"]
export const CATEGORY1 = "Heroes"
export const CATEGORY2 = "Players"
export const CATEGORY3 = "Teams"

export const CLICK_USER = "CLICK_FB_USER"
export const SEARCH_HERO_TERM = "SEARCH_HERO"
export const SELECTED_HERO = "SELECTED_HERO"

export const GET_HERO = "FETCH_HEROES"
export const REJECT_HERO = "FETCH_HEROES_REJECTED"
export const FILLED_HERO = "FETCH_HEROES_FULFILLED"
export const GET_PLAYERS = "GET_PLAYERS"
export const REJECT_PLAYERS = "FETCH_PLAYERS_REJECTED"
export const FILLED_PLAYERS = "FETCH_PLAYERS_FULFILLED"
export const GET_TEAMS = "FETCH_TEAMS"
export const REJECT_TEAMS = "FETCH_TEAMS_REJECTED"
export const FILLED_TEAMS = "FETCH_TEAMS_FULFILLED"
export const SEARCH_PLAYER_TERM = "FETCH_SEARCH_PLAYER"
export const FILLED_SEARCH_PLAYER_TERM = "FETCH_SEARCH_PLAYER_FILLED"
export const REJECTED_SEARCH_PLAYER_TERM = "FETCH_SEARCH_PLAYER_REJECTED"
export const GET_ALL_INITIALIZED_DATA = "GET_INITIALIZED_DATA"
export const FILLED_INITIALIZED_DATA = "FILLED_INITIALIZED_DATA"
export const REJECTED_INITIALIZED_DATA = "REJECTED_INITIALIZED_DATA"
export const SET_FETCHING = "SET_FETCHING"
export const UPDATE_AXIOS_SOURCE = "UPDATE_AXIOS_SOURCE"
export const FILLED_SEARCH_PLAYER_TERM_STATUS = "FILLED_SEARCH_PLAYER_TERM_TO_STATUS"
export const GET_PLAYER_BY_ID = "FETCH_PLAYER_BY_ID"
export const REJECTED_PLAYER_BY_ID = "FETCH_PLAYER_BY_ID_REJECTED"
export const FILLED_PLAYER_BY_ID = "FETCH_PLAYER_BY_ID_FILLED"

export const NEXT_PAGE = "NEXT_PAGE"
export const PREV_PAGE = "PREV_PAGE"
export const SEARCH_ITEMS_UPDATE = "UPDATE_SEARCH_ITEMS"
export const UPDATE_TERMS = "UPDATE_STATUS_TERMS"
export const SEARCH_ITEM_TERMS = "SEARCH_STATUS_ITEMS"
export const SET_CAT_TYPE = "SET_STATUS_CATEGORY_TYPE"
export const SET_ITEM = "SET_STATUS_ITEM"
export const SET_SELECTED_ITEMS = "SET_SELECTED_ITEMS"
export const FILLED_PLAYER_BY_ID_STATUS = "FETCH_PLAYER_BY_ID_STATUS_FILLED"
export const UPDATE_ITEM_SEARCH = "UPDATE_ITEM_SEARCH"

export const STEAM_WEB_API_KEY = "3A7C93E54E7D1BE7F159B9B89EE16AA5"
export const OPEN_DOTA_PLAYER_ID = "76561198071108778"
export const OPEN_DOTA_API_LINK = "https://api.opendota.com"
export const OPEN_DOTA_API_LINK_API = "/api"
export const OPEN_DOTA_API_LINK_TEAM = "/teams"
export const OPEN_DOTA_API_LINK_TEAM_TL = "/2163"
export const OPEN_DOTA_API_LINK_PLAYERS = "/players"
export const ACTIVE_FIRST = "ACTIVE_FIRST"
export const ACTIVE_LAST = "ACTIVE_LAST"
export const DOTA_ICON = "/dota_icon.png"

export const searchItemsByTerms = (terms, items) => {
    return items.filter(item=>item.display_name.toLowerCase().match("[^.]*" + terms.toLowerCase()+"[^.]*"))
}
export const preDefinedMessage = (category=CATEGORY1) => {
    switch(category) {
        case CATEGORY1:
            return {
                first: 'Denied!!!',
                second: 'You Got Nothing'
            }
            
        case CATEGORY2:
            return {
                first: 'Search again...',
                second: 'Or wait...'
            }
            
        case CATEGORY3:
            return {
                first: 'Try again!!!!',
                second: 'You Still Got Nothing...'
            }
                                    
        default:
            return {first: 'preDefinedMessage!!!!', second: 'No category selected!!!!'}
            
    }
}
export const checkDisabled = (conditions='',offPage='', maxItems='') => {
    switch(conditions){
        case ACTIVE_FIRST:
            return !offPage?" disabled":""
            
        case ACTIVE_LAST: 
            return offPage>=maxItems?" disabled":""
            
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
                    display_icon: `${OPEN_DOTA_API_LINK+hero.icon}`,
                    display_img: `${OPEN_DOTA_API_LINK+hero.img}`,
                    display_line: [
                        `Primary Attribute: ${String(hero.primary_attr).toUpperCase()}`,
                        `Attack Type: ${hero.attack_type}`,
                        `Roles: ${Array(hero.roles).join(", ")}`
                    ]
                })),
                maximum: heroes.length
            }
            
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
            
        case CATEGORY3:
            return {
                items: teams.map(team=>Object.assign(team, {
                    display_id: team.team_id, 
                    display_name: team.name, 
                    display_icon: team.logo_url===null?DOTA_ICON:team.logo_url,
                    display_img: team.logo_url===null?DOTA_ICON:team.logo_url,
                    display_line: [
                        `Team ID: ${team.team_id}`,
                        `Wins: ${team.wins}`,
                        `Losses: ${team.losses}`
                    ]
                })),
                maximum: teams.length
            }
            
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

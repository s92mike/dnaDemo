import axios from "axios"
import { 
    updatePlayerArray,
    FILLED_HERO,
    REJECT_HERO,
    GET_HERO,
    OPEN_DOTA_API_LINK,
    SEARCH_HERO_TERM,
    SELECTED_HERO,
    OPEN_DOTA_API_LINK_API,
    OPEN_DOTA_API_LINK_TEAM_TL,
    OPEN_DOTA_API_LINK_TEAM,
    OPEN_DOTA_API_LINK_PLAYERS,
    REJECTEDPLAYERS,
    FILLED_PLAYERS,
    GET_PLAYERS,
    GET_TEAMS,
    FILLED_TEAMS,
    REJECTEDTEAMS,
    SEARCH_PLAYER_TERM,
    FILLED_SEARCH_PLAYER_TERM,
    REJECTED_SEARCH_PLAYER_TERM,
    GET_ALL_INITIALIZED_DATA,
    FILLED_INITIALIZED_DATA,
    REJECTED_INITIALIZED_DATA,
    SET_SELECTED_ITEMS,
    SEARCH_ITEMS_UPDATE,
    SET_ITEM,
    UPDATE_TERMS,
    SET_FETCHING,
    UPDATE_AXIOS_SOURCE,
    FILLED_SEARCH_PLAYER_TERM_STATUS,
    SETOTHERPLAYERDATAAXIOS,
    GET_PLAYER_BY_ID,
    REJECTED_PLAYER_BY_ID,
    FILLED_PLAYER_BY_ID,
    FILLED_PLAYER_BY_ID_STATUS,
    UPDATE_ITEM_SEARCH,
    CATEGORY1,
    CATEGORY2,
    CATEGORY3,
    selectItemsArray
} from './index'

import {
    heroesData,
    teamsData,
    playersData
} from '../../defaultData'
/** demo function to limit axios call before the live demo*/
const CancelTokenAxios = axios.CancelToken
const sourceAxios = CancelTokenAxios.source();

export function getAllInitialDataNoAxios(category) {
    return function(dispatch){ //thunk middleware
        dispatch({
            type: FILLED_INITIALIZED_DATA, 
            payload: { 
                heroes: heroesData, 
                players: playersData, 
                teams: teamsData,
                axiosSource: sourceAxios
            }
        })
        
        
        dispatch({
            type: SET_SELECTED_ITEMS,
            payload: selectItemsArray(category, heroesData, playersData, teamsData).items
        })
    }
}

export function getAllInitialData(category) {
    return function (dispatch) {
        dispatch({type: GET_ALL_INITIALIZED_DATA})
        const heroes = () => { return axios.get(`${OPEN_DOTA_API_LINK+OPEN_DOTA_API_LINK_API}/heroStats`) }
        const players = () => { return axios.get(`${OPEN_DOTA_API_LINK+OPEN_DOTA_API_LINK_API}/proPlayers`) }
        const teams = () => { return axios.get(`${OPEN_DOTA_API_LINK+OPEN_DOTA_API_LINK_API}/teams`) }
        axios.all([heroes(), players(), teams()])
        .then(axios.spread(function (heroes, players, teams) {
            dispatch({
                type: FILLED_INITIALIZED_DATA, 
                payload: { 
                    heroes: heroes.data, 
                    players: players.data, 
                    teams: teams.data,
                    axiosSource: sourceAxios
                }
            })
            dispatch({
                type: SET_SELECTED_ITEMS,
                payload: selectItemsArray(category, heroes.data, players.data, teams.data).items
            })          
        }))
        .catch((err) => {
            dispatch({type: REJECTED_INITIALIZED_DATA, payload: err})
        })        
    }
}

export function getHeroes() {
    return function (dispatch) {
        dispatch({type: GET_HERO})
        axios.get(`${OPEN_DOTA_API_LINK+OPEN_DOTA_API_LINK_API}/heroStats`)
            .then((response) => {
                dispatch({type: FILLED_HERO, payload: response.data})
            })
            .catch((err) => {
                dispatch({type: REJECT_HERO, payload: err})
            })
    }
}

export function getPlayers() {
    return function (dispatch) {
        dispatch({type: GET_PLAYERS})
        axios.get(`${OPEN_DOTA_API_LINK+OPEN_DOTA_API_LINK_API}/proPlayers`)
        .then((response) => {
            dispatch({type: FILLED_PLAYERS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: REJECTEDPLAYERS, payload: err})
        })
    }
}

export function searchPlayer(term, source) {   
    return function (dispatch) {
        dispatch({type: UPDATE_ITEM_SEARCH})
        dispatch({type: UPDATE_AXIOS_SOURCE, payload: source})
        dispatch({type: SEARCH_PLAYER_TERM})    
        axios.get(`${OPEN_DOTA_API_LINK+OPEN_DOTA_API_LINK_API}/search?q=${term}`,{
            cancelToken: source.token
        })
        .then((response)=>{
            dispatch({type: FILLED_SEARCH_PLAYER_TERM})
            dispatch({type: FILLED_SEARCH_PLAYER_TERM_STATUS, payload: response.data})
        })
        .catch((err)=>{
            dispatch({type: REJECTED_SEARCH_PLAYER_TERM, payload: err})
        })
    }
}

export function getTeams() {
    return function (dispatch) {
        dispatch({type: GET_TEAMS})
        axios.get(`${OPEN_DOTA_API_LINK+OPEN_DOTA_API_LINK_API}/teams`)
        .then((response) => {
            dispatch({type: FILLED_TEAMS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: REJECTEDTEAMS, payload: err})
        })
    }
}

export function setStatusItemByAccount(player) {
    return function (dispatch) {
        dispatch({type: GET_PLAYER_BY_ID})
        axios.get(`${OPEN_DOTA_API_LINK+OPEN_DOTA_API_LINK_API}/players/${player.display_id}`)
        .then((response) => {
            const newArray = updatePlayerArray(player, response.data)
            dispatch({type: FILLED_PLAYER_BY_ID})
            dispatch({type: FILLED_PLAYER_BY_ID_STATUS, payload: newArray})
        })
        .catch((err) => {
            dispatch({type: REJECTED_PLAYER_BY_ID, payload: err})
        })
    }
}
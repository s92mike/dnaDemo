import axios from "axios"
import { 
    updatePlayerArray,
    FILLEDHERO,
    REJECTHERO,
    GETHERO,
    OPENAPILINK,
    SEARCHHEROTERM,
    SELECTEDHERO,
    OPENAPILINKAPI,
    OPENAPILINKTEAMTL,
    OPENAPILINKTEAM,
    OPENAPILINKPLAYERS,
    REJECTEDPLAYERS,
    FILLEDPLAYERS,
    GETPLAYERS,
    GETTEAMS,
    FILLEDTEAMS,
    REJECTEDTEAMS,
    SEARCHPLAYERTERM,
    FILLEDSEARCHPLAYERTERM,
    REJECTEDSEARCHPLAYERTERM,
    GETALLINITIALIZEDDATA,
    FILLEDINITIALIZEDDATA,
    REJECTEDINITIALIZEDDATA,
    SETSELECTEDITEMS,
    SEARCHITEMSUPDATE,
    SETITEM,
    UPDATETERMS,
    SETFETCHING,
    UPDATEAXIOSSOURCE,
    FILLEDSEARCHPLAYERTERMSTATUS,
    SETOTHERPLAYERDATAAXIOS,
    GETPLAYERBYID,
    REJECTEDPLAYERBYID,
    FILLEDPLAYERBYID,
    FILLEDPLAYERBYIDSTATUS,
    UPDATEITEMSEARCH
} from './index'

import {
    heroesData,
    teamsData,
    playersData
} from '../../defaultData'
/** demo function to limit axios call before the live demo*/
const CancelTokenAxios = axios.CancelToken
const sourceAxios = CancelTokenAxios.source();

export function getAllInitialDataNoAxios() {
    return function(dispatch){
        dispatch({
            type: FILLEDINITIALIZEDDATA, 
            payload: { 
                heroes: heroesData, 
                players: playersData, 
                teams: teamsData,
                axiosSource: sourceAxios
            }
        })
        dispatch({
            type: SETSELECTEDITEMS,
            payload: heroesData
        })
    }
}

export function getAllInitialData() {
    return function (dispatch) {
        dispatch({type: GETALLINITIALIZEDDATA})
        const heroes = () => { return axios.get(`${OPENAPILINK+OPENAPILINKAPI}/heroStats`) }
        const players = () => { return axios.get(`${OPENAPILINK+OPENAPILINKAPI}/proPlayers`) }
        const teams = () => { return axios.get(`${OPENAPILINK+OPENAPILINKAPI}/teams`) }
        axios.all([heroes(), players(), teams()])
        .then(axios.spread(function (heroes, players, teams) {
            dispatch({
                type: FILLEDINITIALIZEDDATA, 
                payload: { 
                    heroes: heroes.data, 
                    players: players.data, 
                    teams: teams.data,
                    axiosSource: sourceAxios
                }
            })
            dispatch({
                type: SETSELECTEDITEMS,
                payload: heroes.data
            })          
        }))
        .catch((err) => {
            dispatch({type: REJECTEDINITIALIZEDDATA, payload: err})
        })        
    }
}

export function getHeroes() {
    return function (dispatch) {
        dispatch({type: GETHERO})
        axios.get(`${OPENAPILINK+OPENAPILINKAPI}/heroStats`)
            .then((response) => {
                dispatch({type: FILLEDHERO, payload: response.data})
            })
            .catch((err) => {
                dispatch({type: REJECTHERO, payload: err})
            })
    }
}

export function getPlayers() {
    return function (dispatch) {
        dispatch({type: GETPLAYERS})
        axios.get(`${OPENAPILINK+OPENAPILINKAPI}/proPlayers`)
        .then((response) => {
            dispatch({type: FILLEDPLAYERS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: REJECTEDPLAYERS, payload: err})
        })
    }
}

export function searchPlayer(term, source) {   
    return function (dispatch) {
        dispatch({type: UPDATEITEMSEARCH})
        dispatch({type: UPDATEAXIOSSOURCE, payload: source})
        dispatch({type: SEARCHPLAYERTERM})    
        axios.get(`${OPENAPILINK+OPENAPILINKAPI}/search?q=${term}`,{
            cancelToken: source.token
        })
        .then((response)=>{
            dispatch({type: FILLEDSEARCHPLAYERTERM})
            dispatch({type: FILLEDSEARCHPLAYERTERMSTATUS, payload: response.data})
        })
        .catch((err)=>{
            dispatch({type: REJECTEDSEARCHPLAYERTERM, payload: err})
        })
    }
}

export function getTeams() {
    return function (dispatch) {
        dispatch({type: GETTEAMS})
        axios.get(`${OPENAPILINK+OPENAPILINKAPI}/teams`)
        .then((response) => {
            dispatch({type: FILLEDTEAMS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: REJECTEDTEAMS, payload: err})
        })
    }
}

export function setStatusItemByAccount(player) {
    return function (dispatch) {
        dispatch({type: GETPLAYERBYID})
        axios.get(`${OPENAPILINK+OPENAPILINKAPI}/players/${player.display_id}`)
        .then((response) => {
            const newArray = updatePlayerArray(player, response.data)
            dispatch({type: FILLEDPLAYERBYID})
            dispatch({type: FILLEDPLAYERBYIDSTATUS, payload: newArray})
        })
        .catch((err) => {
            dispatch({type: REJECTEDPLAYERBYID, payload: err})
        })
    }
}
import axios from 'axios'

import {
    GETPLAYERS,
    OPENAPILINK,
    OPENAPILINKAPI,
    OPENAPILINKTEAM,
    OPENAPILINKTEAMTL,
    OPENAPILINKPLAYERS,
    REJECTEDPLAYERS,
    FILLEDPLAYERS
} from './'
export function getPlayers() {
    return function (dispatch) {
        dispatch({type: GETPLAYERS})
        axios.get(`${OPENAPILINK+OPENAPILINKAPI+OPENAPILINKTEAM+OPENAPILINKTEAMTL+OPENAPILINKPLAYERS}`)
        .then((response) => {
            dispatch({type: FILLEDPLAYERS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: REJECTEDPLAYERS, payload: err})
        })
    }
}
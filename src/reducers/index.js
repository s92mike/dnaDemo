import { combineReducers } from 'redux'
import heroesReducer from './heroesReducer'
import playersReducer from './playersReducer'
import statusReducer from './statusReducer'

export default combineReducers({
    heroR: heroesReducer,
    statusR: statusReducer,
    playerR: playersReducer
})
import { combineReducers } from 'redux'
import heroesReducer from './heroesReducer'
import userReducer from './userReducer'
import statusReducer from './statusReducer'

export default combineReducers({
    heroR: heroesReducer,
    statusR: statusReducer
})
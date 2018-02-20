import { combineReducers } from 'redux'
import heroesReducer from './heroesReducer'
import statusReducer from './statusReducer'

export default combineReducers({
    heroR: heroesReducer,
    statusR: statusReducer
})
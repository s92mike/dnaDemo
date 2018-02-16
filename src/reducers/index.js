import { combineReducers } from 'redux'
import heroesReducer from './heroesReducer'
import userReducer from './userReducer'

export default combineReducers({
	heroesReducer,
	userReducer
})
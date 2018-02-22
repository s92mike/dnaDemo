import { combineReducers } from 'redux'
import axiosReducer from './axiosReducer'
import statusReducer from './statusReducer'

export default combineReducers({
    axiosR: axiosReducer,
    statusR: statusReducer
})
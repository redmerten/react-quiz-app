/**
 */

//index.js allows app to import all reducers (data) at once

import {combineReducers} from 'redux'  //action creators immediately return action+payload
// import authReducer from './authReducer'
import quizReducer from './quizReducer'
import finalReducer from './finalReducer'

//this is imported by main index.js
//auth piece of state is manufactured by the auth reducer
export default combineReducers({
  quiz: quizReducer,
  final: finalReducer
})
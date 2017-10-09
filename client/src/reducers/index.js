/**
 * Created by CameronMerten on 9/28/17.
 */

//index.js allows app to import all reducers (data) at once

import {combineReducers} from 'redux'
import authReducer from './authReducer'


//this is imported by main index.js
//auth piece of state is manufactured by the auth reducer
export default combineReducers({
  auth: authReducer
})
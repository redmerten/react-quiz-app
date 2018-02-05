/**
 * Created by CameronMerten on 9/28/17.
 */

//index.js allows app to import all reducers (data) at once

import {combineReducers} from 'redux'  //action creators immediately return action+payload
// import authReducer from './authReducer'

import apiOneReducer from './apiOneReducer'
import apiTwoReducer from './apiTwoReducer'
import apiThreeReducer from './apiThreeReducer'
import stocksHistoricalReducer from './stocksHistoricalReducer'
import stocksCurrentReducer from './stocksCurrentReducer'
import stocksNewsReducer from './stocksNewsReducer'


//this is imported by main index.js
export default combineReducers({
  // auth: authReducer,
  dataApiOne: apiOneReducer,
  dataApiTwo: apiTwoReducer,
  dataApiThree: apiThreeReducer,
  stockHistorical: stocksHistoricalReducer,
  stockCurrent: stocksCurrentReducer,
  stockNews: stocksNewsReducer

})
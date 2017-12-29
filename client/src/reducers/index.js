/**
 * Created by CameronMerten on 9/28/17.
 */

//index.js allows app to import all reducers (data) at once

import {combineReducers} from 'redux'  //action creators immediately return action+payload
// import authReducer from './authReducer'

import blogReducer from './blogReducer'
import serviceChartReducer from './serviceChartReducer'
import selectedBlogReducer from './selectedBlogReducer'


//this is imported by main index.js
//auth piece of state is manufactured by the auth reducer
export default combineReducers({
  // auth: authReducer,
  // products: productReducer,
  // images: imageReducer,
  // detail: prodDetailReducer
  blog: blogReducer,
  serviceChart: serviceChartReducer,
  selectedBlog: selectedBlogReducer
})
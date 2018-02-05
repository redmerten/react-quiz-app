/**
 * Created by AndreaMerten on 2/3/18.
 */
import {FETCH_STOCKS_NEWS} from '../actions/types'

export default function (state = {}, action){
  //console.log('news',action.type)
  switch(action.type) {
    case FETCH_STOCKS_NEWS:
      console.log('in news')
      return action.payload || false //if payload or empty string (which is falsey)
    default:
      return state
  }
}
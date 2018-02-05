/**
 * Created by AndreaMerten on 2/2/18.
 */
import {FETCH_STOCKS_CURRENT} from '../actions/types'

export default function (state = {}, action){
  //console.log('current',action.type)

  switch(action.type) {
    case FETCH_STOCKS_CURRENT:
      return action.payload || false //if payload or empty string (which is falsey)
    default:
      return state
  }
}
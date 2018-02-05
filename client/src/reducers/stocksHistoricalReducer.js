/**
 * Created by AndreaMerten on 2/2/18.
 */
import {FETCH_STOCKS_HISTORICAL} from '../actions/types'

export default function (state = {}, action){
  switch(action.type) {
    case FETCH_STOCKS_HISTORICAL:
      return action.payload || false //if payload or empty string (which is falsey)
    default:
      return state
  }
}
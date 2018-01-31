/**
 * Created by AndreaMerten on 1/30/18.
 */
import {FETCH_FROM_API_3} from '../actions/types'

//this will decide whether the user is logged in

//imported by reducers/index
//action is sent to this reducer which will return new state causing rerender
//3 cases on login: don't know, yes, no.  Null is default and init state while waiting to find out
//api returns an empty string if not logged in
export default function (state = {}, action){
  //console.log('action from authReducer', action)
  switch(action.type) {
    case FETCH_FROM_API_3:
      return action.payload || false //if payload or empty string (which is falsey)
    default:
      return state
  }
}
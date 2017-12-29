/**
 * Created by AndreaMerten on 12/12/17.
 */
import {FETCH_SERVICECHART} from '../actions/types'

//this will decide whether the user is logged in

//imported by reducers/index
//action is sent to this reducer which will return new state causing rerender
//
export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_SERVICECHART:
      return action.payload
    default:
      return state
  }
}

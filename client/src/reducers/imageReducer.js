/**
 * Created by CameronMerten on 10/18/17.
 */

import {FETCH_IMAGE} from '../actions/types'

//this will decide whether the user is logged in

//imported by reducers/index
//action is sent to this reducer which will return new state causing rerender
//
export default function (state = [], action) {
  //console.log('from image reducer', action)
  switch (action.type) {
    case FETCH_IMAGE:
      return action.payload
    default:
      return state
  }
}

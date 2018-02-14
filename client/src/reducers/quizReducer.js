/**
 * Created by AndreaMerten on 12/9/17.
 */
import {FETCH_QUIZ} from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_QUIZ:
      return action.payload
    default:
      return state
  }
}

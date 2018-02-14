/**
 * Created by AndreaMerten on 2/13/18.
 */
import {SUBMIT_QUIZ} from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case SUBMIT_QUIZ:
      return action.payload
    default:
      return state
  }
}
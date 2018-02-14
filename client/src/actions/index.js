/**
 * Created by AndreaMerten on 10/2/17.
 */



import {FETCH_QUIZ} from './types'
import {SUBMIT_QUIZ} from './types'

import axios from 'axios'


export const  fetchQuiz = () => async dispatch => {
  const res = await axios.get('/assessment')
  dispatch({ type: FETCH_QUIZ, payload: res.data})
}

export const submitQuiz = (final) => async dispatch => {
  const res = await axios.get('/assessment',
    {params: {final}})
  dispatch({ type: SUBMIT_QUIZ, payload: res.data})
}

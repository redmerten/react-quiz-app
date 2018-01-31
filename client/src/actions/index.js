/**
 * Created by AndreaMerten on 10/2/17.
 */



import {FETCH_FROM_API_1} from './types'
import {FETCH_FROM_API_2} from './types'
import {FETCH_FROM_API_3} from './types'
import axios from 'axios'


export const  fetchFromAPI_1 = () => async dispatch => {
  const res = await axios.get('/api/one')
  dispatch({ type: FETCH_FROM_API_1, payload: res.data})
}

export const  fetchFromAPI_2= () => async dispatch => {
  const res = await axios.get('/api/two')
  dispatch({ type: FETCH_FROM_API_2, payload: res.data})
}

export const fetchFromAPI_3 = (id) => async dispatch => {
  const res = await axios.get('/api/three',
    {params: {id}})
  dispatch({ type: FETCH_FROM_API_3, payload: res.data})
}

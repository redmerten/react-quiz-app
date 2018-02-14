import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware} from 'redux' //redux directly sends action to store
import reduxThunk from 'redux-thunk'  //thunk allows action passed to dispatch function first

import 'normalize.css'

import App from './components/App'
import reducers from './reducers'
const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,

  document.querySelector('#root'))



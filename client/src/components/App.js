import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux' //allows react component to call action creator
import CherryCreamSoda from 'typeface-cherry-cream-soda'
import * as actions from '../actions'
//app will show all components

import Navbar from './Navbar'
import Quiz from './Quiz'


class  App extends Component {

  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar/>
            <Route exact path="/" component={Quiz}/>
          </div>
        </BrowserRouter>
      </div>
  )
  }
}

//this is imported by main index.js

export default connect(null, actions)(App)
//export default App


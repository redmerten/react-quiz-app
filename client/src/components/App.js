import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux' //allows react component to call action creator
import * as actions from '../actions'
//app will show all components
import '@blueprintjs/core/dist/blueprint.css'

import Navbar from './Navbar'
import Landing from './Landing'
import Footer from './Footer'
import USA from './USA-Map'
import Stocks from './Stocks'


class  App extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <div >
            <Navbar/>
            <Route exact path="/" component={Landing}/>
            <Route path="/usa" component={USA}/>
            <Route path="/stocks" component={Stocks}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)

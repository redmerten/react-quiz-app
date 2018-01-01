import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux' //allows react component to call action creator
import * as actions from '../actions'
//app will show all components
import '@blueprintjs/core/dist/blueprint.css'


import Header from './Header'
import Landing from './Landing'
import Services from './Services'
import Footer from './Footer'
import Gear from './Gear'
import BlogDetail from './BlogDetail'


class  App extends Component {

    render () {
      return (
        <div>
          <BrowserRouter>
            <div >
              <Header/>
              {/*<Route path="/serviceChart" component={Services}/>*/}
              <Route exact path="/" component={Landing}/>
              <Route path='/gear' component={Gear}/>
              <Route exact path="/detail/:blogid" component={BlogDetail}/>
              <Route exact path="/detail" component={Landing}/>
              <Footer/>
            </div>
          </BrowserRouter>
        </div>
      )
    }
}

//this is imported by main index.js

export default connect(null, actions)(App)

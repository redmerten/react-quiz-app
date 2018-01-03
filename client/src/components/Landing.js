/**
 * Created by CameronMerten on 10/1/17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import '@blueprintjs/core/dist/blueprint.css'
import PrimaryRow from './PrimaryRow'
import IntroRow from './IntroRow'
import LatestNews from './LatestNews'
import Bikes from './Bikes'
import GearRow from './GearRow'
import ServiceRow from './ServiceRow'


class Landing extends Component {

  render(){
    console.log('state from landing', this.props)
    return (
      <div style={{'padding':'0px'}}>
        <PrimaryRow/>
        <IntroRow/>
        <Bikes/>
        <ServiceRow/>
        <GearRow/>
        <LatestNews/>
      </div>
    )}
}

const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps)(Landing)

/**
 * Created by AndreaMerten on 12/28/17.
 */

import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import Media from 'react-media'


import wideShopSign from '../images/bikeShopPics/wideshopsign.JPG'


const viewStyle = {
  height:'80vh',
  width:'100vw'
}

const fontStyle ={
  fontFamily:'Courier',
  fontVariant: 'small-caps',
}

const lightBlue='#52A0F5'
const orange = '#BB6558'
const darkBlue = '#0073C4'
const blueBlk='#1A3256'

const renderLgScreen=()=>{
  return(
  <div style={{
    'height':'90vh',
    'display':'flex',
    //'paddingTop':'40px'
  }}>
    <img src={wideShopSign} alt=""
         style={{
           'flexGrow':'1',
           'height':'100%'}}/>
    <div style={{'position':'absolute',  'top':'18%', 'right':'8%' }}>
      <ScrollAnimation animateIn='zoomIn' offset={0}>
        <h1 style={{...fontStyle, 'color':blueBlk, 'fontSize':'3em'}}>Ready to Ride?</h1>
      </ScrollAnimation>
    </div>
  </div>
  )
}
const renderSmlScreen=()=>{
  return(
    <div style={{
      'display':'flex',
      'justifyContent':'center',
      'alignItems':'stretch',
      //'width':'100vw',
      'height':'375px',
      'paddingTop':'40px'
    }}>
      <img src={wideShopSign} alt=""
           style={{
             'width':'100%',
             'height' :'auto'
           }}/>
      <div style={{'position':'absolute',  'top':'12%', 'right':'8%' }}>
        <ScrollAnimation animateIn='zoomIn' offset={0}>
          <h1 style={{...fontStyle, 'color':blueBlk, 'fontSize':'1em'}}>Ready to Ride?</h1>
        </ScrollAnimation>
      </div>
    </div>
  )
}


const primaryRow = () =>{
  return(
    <div>
      <Media query= '(max-width: 812px)'>
        {matches => {
          console.log('matches', matches)
          return(
            matches ? (
              renderSmlScreen()
            ):(
              renderLgScreen()
            )
          )
        }
        }
      </Media>

    </div>

  )
}

export default primaryRow
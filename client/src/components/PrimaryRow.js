/**
 * Created by AndreaMerten on 12/28/17.
 */

import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

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

const primaryRow = () =>{
  return(

      <div style={{'gridColumn':'span 6', 'height':'90vh'}}>
        <img src={wideShopSign} alt="" style={{'width':'100vw', 'height':'90vh'}}/>
        <div style={{'position':'absolute',  'top':'17%', 'right':'.5vw' }}>
          <ScrollAnimation animateIn='zoomIn' >
            <h1 style={{...fontStyle, 'color':blueBlk, 'fontSize':'4em'}}>Ready to Ride?</h1>
          </ScrollAnimation>
        </div>
      </div>
  )
}

export default primaryRow
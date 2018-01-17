/**
 * Created by AndreaMerten on 12/28/17.
 */

import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import Media from 'react-media'


import wideShopSign from '../images/bikeShopPics/wideshopsign.JPG'


// const viewStyle = {
//   height:'80vh',
//   width:'100vw'
// }
const lightBlue='#52A0F5'
const orange = '#BB6558'
const darkBlue = '#0073C4'
const blueBlk='#1A3256'


const fontStyle ={
  //fontFamily:'Helvetica Neue, Helvetica, Arial, sans-serif',
  fontFamily:'Oldtown',
  fontVariant: 'small-caps',
  color: blueBlk
}

const styles={
  lgScreen:{
    div:{
      height:'90vh',
      display:'flex',
    },
    img:{
      flexGrow:'1',
      width:'100%',
      height:'90vh',
      overflow:'hidden'
    },
    animatedWordsDiv:{
      position:'absolute',
      top:'90px',
      right:'10%'
      //top:'18%',
      //right:'8%'
    },

    wordsDiv:{
      //'display':'flex', 'flexDirection':'column', 'justifyContent':'center', 'alignItems':'center'
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    },
    pStyle:{
      ...fontStyle,
      color:blueBlk,
      fontSize:'200%'
    }

  },
  smlScreen:{

  }
}

const renderLgScreen=(style)=>{
  return(
  <div style={style.div}>
    <img src={wideShopSign} alt=""
         style={style.img}/>
    <div style={style.animatedWordsDiv}>
      <ScrollAnimation animateIn='zoomIn' offset={0}>
        <div style={style.wordsDiv}>
        <p style={style.pStyle}>Ready</p>
        <p style={style.pStyle}>to</p>
        <p style={style.pStyle}>Ride?</p>
        </div>
      </ScrollAnimation>
    </div>
  </div>
  )
}
const renderSmlScreen=()=>{
  return(
    <div style={{
      'display':'flex',
      'justifyContent':'stretch',
      'alignItems':'stretch',
      //'height':'90%',
      'paddingTop':'40px',

    }}>
      <img src={wideShopSign} alt=""
           style={{
             'width':'100%',
             'height' :'375px',
             //'height':'375px',
             //'overflow':'hidden'
           }}/>
      <div style={{'position':'absolute',  'top':'85px', 'right':'5%' }}>
        <ScrollAnimation animateIn='zoomIn' offset={0}>
          <div style={{'display':'flex', 'flexDirection':'column', 'justifyContent':'center', 'alignItems':'center'}}>
            <p style={{...fontStyle, 'color':blueBlk, 'fontSize':'120%'}}>Ready</p>
            <p style={{...fontStyle, 'color':blueBlk, 'fontSize':'120%'}}>to</p>
            <p style={{...fontStyle, 'color':blueBlk, 'fontSize':'120%'}}>Ride?</p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}


const primaryRow = () =>{
  return(
    <div style={{'backgroundColor':lightBlue}}>
      <Media query= '(max-width: 812px)'>
        {matches => {
          console.log('matches', matches)
          return(
            matches ? (
              renderSmlScreen(styles.smlScreen)
            ):(
              renderLgScreen(styles.lgScreen)
            )
          )
        }
        }
      </Media>

    </div>

  )
}

export default primaryRow
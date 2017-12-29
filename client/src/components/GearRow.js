/**
 * Created by AndreaMerten on 12/28/17.
 */


import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import sqgear1 from '../images/bikeShopPics/sqgear1.JPG'
import sqgear2 from '../images/bikeShopPics/sqgear2.JPG'
import sqgear3 from '../images/bikeShopPics/sqgear3.JPG'

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

const GearRow = ()=>{
  const gearpics=[sqgear1, sqgear2, sqgear3]
  return(
    <div style={{...viewStyle,'backgroundColor': orange}}>
      <div style={{
        'display':'flex',
        'justifyContent':'center',
        'height':'10vh'
      }}>
        <p style={{...fontStyle, 'fontSize':'3em', 'color': blueBlk, 'margin':'auto','alignSelf':'flex-end'}}>
          We have gear and parts for every need
        </p>
      </div>
      <div style={{'display':'flex', 'justifyContent':'space-evenly', 'maxHeight':'65vh'}}>
        {gearpics.map((p,i)=>{

          const style={
            margin:'2%',
            maxHeight:'70vh'
          }
          return(
            <div key={i} style={style}>
              <ScrollAnimation animateIn='zoomIn' >
                <img src={p} alt="" style={{ 'borderRadius':'50%', 'maxHeight':'55vh'}}/>
              </ScrollAnimation>
            </div>
          )
        })}
      </div>

    </div>
  )





}

export default GearRow
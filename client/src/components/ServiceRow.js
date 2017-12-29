/**
 * Created by AndreaMerten on 12/28/17.
 */

import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import services1 from '../images/bikeShopPics/services1.JPG'
import services2 from '../images/bikeShopPics/services2.JPG'
import services3 from '../images/bikeShopPics/services3.JPG'

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

const ServiceRow = ()=>{
  const gearpics=[services2, services3, services1]
  const servicetypes=['Repairs', 'Custom Builds', 'Accessory Installation']
  return(
    <div style={{...viewStyle,'backgroundColor': lightBlue}}>
      <div style={{
        'display':'flex',
        'justifyContent':'center',
        'height':'15vh'
      }}>
        <p style={{...fontStyle, 'fontSize':'3em', 'color': blueBlk, 'margin':'auto','alignSelf':'flex-end'}}>
          Our master technicians can help with any service
        </p>
      </div>
      <div style={{'display':'flex', 'justifyContent':'space-evenly', 'maxHeight':'65vh',
          'marginTop': '2%'
      }}>
        {gearpics.map((p,i)=>{
          const style={
            margin:'2%',
            maxHeight:'65vh'
          }
          return(
            <div key={i} style={{'display':'flex', 'flexDirection':'column', 'alignItems':'center'}}>
              <ScrollAnimation animateIn='flipInY'>
                <img src={p} alt="" style={{ 'maxWidth':'60vh'}}/>
              </ScrollAnimation>
              <p style={{...fontStyle, 'fontSize':'2.5em', 'marginTop':'2%'}}>{servicetypes[i]}</p>
            </div>
          )
        })}
      </div>

    </div>
  )





}

export default ServiceRow
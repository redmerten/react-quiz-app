/**
 * Created by AndreaMerten on 12/28/17.
 */
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import storefront1 from '../images/bikeShopPics/storefront1.JPG'
import services1 from '../images/bikeShopPics/services1.JPG'
import bikes1 from '../images/bikeShopPics/bikes1.JPG'
import gear1 from '../images/bikeShopPics/gear1.JPG'

const viewStyle = {
  height:'80vh',
  width:'100vw',
  display: 'grid',
  gridTemplateColumns: 'repeat(6,1fr)'
}

const fontStyle ={
  fontFamily:'Courier',
  fontVariant: 'small-caps',
  color: blueBlk
}

const lightBlue='#52A0F5'
const orange = '#BB6558'
const darkBlue = '#0073C4'
const blueBlk='#1A3256'

const renderIntro=()=>{
  const pArr=[
    'Woodside Bike Shop sells bikes and accessories for all ages, ability levels and budgets.',
    'We carry mountain bikes, BMX bikes, cruisers, road bikes, fixies, electric bikes, and even unicycle.',
    'In addition, we offer full service repairs, custom builds, and can special order.'
  ]
  const better=[
    'Wide Selection of Bikes',
    'True Local Knowledge',
    'Expert Repair Services'
  ]
  const pics=[bikes1, services1, gear1]
  return(
    <div style={{'gridColumn':'4/7'}}>
      <div style={{'display':'flex',
        'flexDirection':'column',
        'justifyContent':'space-evenly',
        'margin':'0% 10% 0% 15%',
        'height': '80vh'
      }}>

        {better.map((e,i)=> {
          return(
            <div key={i} style={{'display':'flex',
              'flexDirection':'row',
              'justifyContent':'space-between',
              'alignItems':'center'
            }}>
              <ScrollAnimation key={i}
                               animateIn='zoomIn'
              >
                <p style={{...fontStyle, 'fontSize':'2em'}}>{e}</p>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="slideInRight"
              >
                <img src={pics[i]} alt=""
                     style={{'maxHeight':'20vh', 'borderRadius':'50%'}}
                />
              </ScrollAnimation>
            </div>
          )})}
      </div>
    </div>
  )
}


const introRow = () =>{
  return(
    <div style={{'backgroundColor':darkBlue, ...viewStyle}}>
      <div style={{'gridColumn':'1/4', }}>
        <img src={storefront1} alt=""
             style={{'maxHeight':'80vh'}}/>
      </div>
      {renderIntro()}
    </div>
  )
}

export default introRow
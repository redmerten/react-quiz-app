/**
 * Created by AndreaMerten on 12/28/17.
 */
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import Media from 'react-media'


import storefront1 from '../images/bikeShopPics/storefront1.JPG'
import services3 from '../images/bikeShopPics/services3.JPG'
import bikes1 from '../images/bikeShopPics/bikes1.JPG'
import gear1 from '../images/bikeShopPics/gear1.JPG'

const lightBlue='#52A0F5'
const orange = '#BB6558'
const darkBlue = '#0073C4'
const blueBlk='#1A3256'

const styles= {
  lgViewStyle: {
    height: '80vh',
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(6,1fr)'
  },
  lgIntroView:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    margin:'0% 8% 0% 12%',
    height: '80vh'
  },
  smlIntroView:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    height: '375px',
  }
}

const fontStyle ={
  fontFamily:'Courier',
  fontVariant: 'small-caps',
  color: blueBlk
}



const renderIntro=()=>{
  const better=[
    'Wide Selection of Bikes',
    'True Local Knowledge',
    'Expert Repair Services'
  ]
  const pics=[bikes1, services3, gear1]
  return(
      <div style={styles.lgIntroView}>
        {better.map((e,i)=> {
          return(
            <div key={i}
                 style={{
                    'display':'flex',
                    'flexDirection':'row',
                    'justifyContent':'space-between',
                    'alignItems':'center'
            }}>
              <ScrollAnimation key={i}
                               animateIn='zoomIn'
              >
                <p style={{...fontStyle, 'fontSize':'2.25em'}}>{e}</p>
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

  )
}

const renderLgScreen=(style)=>{
  return(
    <div style={{'backgroundColor':lightBlue, ...styles.lgViewStyle}}>
      <div style={{'gridColumn':'1/4', }}>
        <img src={storefront1} alt=""
             style={{'maxHeight':'80vh'}}/>
      </div>
      <div style={{'gridColumn':'4/7'}}>
        {renderIntro(style)}
      </div>
    </div>
  )
}

const renderSmlScreen=(style)=>{
  return(

    renderIntro(style)
  )
}

const introRow = () =>{
  return(
    <div style={{'backgroundColor':lightBlue}} >
      <Media query= '(max-width: 812px)'>
        {matches => {
          console.log('matches', matches)
          return(
            matches ? (
              renderSmlScreen(styles.smlIntroView)
            ):(
              renderLgScreen(styles.lgIntroView)
            )
          )
        }
        }
      </Media>

    </div>
  )
}

export default introRow
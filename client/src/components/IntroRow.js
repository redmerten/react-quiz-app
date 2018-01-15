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
    div:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-evenly',
      margin:'0% 8% 0% 12%',
      height: '80vh',
    },
    fontSize:'2em',
    pic: {
      maxHeight:'20vh',
      borderRadius:'50%'
    },
    justifyContent:'space-between'
  },

  smlIntroView:{
    div:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      margin:'0% 2% 0% 2%',
      //height: '375px',
    },
    fontSize:'1em',
    pic: {
      maxHeight:'15vh',
      borderRadius:'50%'
    },
    justifyContent:'center',
    sideMargins:{
      margin: '5% 5% 5% 5%'
    }

  }
}

const fontStyle ={
  fontFamily:'Oldtown',
  fontVariant: 'small-caps',
  color: blueBlk
}

const lgIntroStyle={
  fontSize:'2em'
}

const renderIntro=(style)=>{
  const better=[
    'Wide Selection of Bikes',
    'True Local Knowledge',
    'Expert Repair Services'
  ]
  const pics=[bikes1, services3, gear1]
  return(
      <div style={style.div}>
        {better.map((e,i)=> {
          return(
            <div key={i}
                 style={{
                    'display':'flex',
                    'flexDirection':'row',
                   //...style.justifyContent,
                    'justifyContent':'space-between',
                    'alignItems':'center',
                   ...style.sideMargins
            }}>
              <ScrollAnimation key={i}
                               animateIn='zoomIn'
              >
                <p style={{...fontStyle, 'fontSize':style.fontSize}}>{e}</p>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="slideInRight"
              >
                <img src={pics[i]} alt=""
                     style={style.pic}
                />
              </ScrollAnimation>
            </div>
          )})}
      </div>

  )
}

const renderLgScreen=()=>{
  return(
    <div style={{'backgroundColor':lightBlue, ...styles.lgViewStyle}}>
      <div style={{'gridColumn':'1/4', }}>
        <img src={storefront1} alt=""
             style={{'maxHeight':'80vh'}}/>
      </div>
      <div style={{'gridColumn':'4/7'}}>
        {renderIntro(styles.lgIntroView)}
      </div>
    </div>
  )
}

const renderSmlScreen=()=>{
  return(
    renderIntro(styles.smlIntroView)
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

export default introRow
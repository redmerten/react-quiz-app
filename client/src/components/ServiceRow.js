/**
 * Created by AndreaMerten on 12/28/17.
 */

import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import Media from 'react-media'


import services1 from '../images/bikeShopPics/services1.JPG'
import services2 from '../images/bikeShopPics/services2.JPG'
import services3 from '../images/bikeShopPics/services3.JPG'


const fontStyle ={
  fontFamily:'Courier',
  fontVariant: 'small-caps',
}

const lightBlue='#52A0F5'
const orange = '#BB6558'
const darkBlue = '#0073C4'
const blueBlk='#1A3256'

const styles = {
  lgViewStyle:{
    mainDiv:{
      height:'80vh',
      width:'100vw',
    },
    headingDiv:{
      display:'flex',
      justifyContent:'center',
      height:'15vh',
      alignItems:'center',

    },
    headingP:{
      'fontSize':'2.5em',
      'color': blueBlk,
    },
    headingPart2:{
      marginLeft:'.5em'
    },
    imgsDivStyle:{
      display:'flex',
      justifyContent:'space-evenly',
      maxHeight:'65vh',
      marginTop: '2%',
      marginBottom:'5%%'
    },
    imgServDiv:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      maxWidth:'30vw'
    },
    imgStyle:{
      maxWidth:'100%',
      maxHeight:'55vh',
      borderRadius: '10%'
    },
    imgP:{
      fontSize:'2em',
      marginTop:'2%'
    }

  },

  smlViewStyle:{
    mainDiv:{
      //height:'80vh',
      //width:'100%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    },
    headingDiv:{
      width:'80%',
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'center',
      height:'75px',
      alignItems:'center',
      marginTop:'3%'
    },
    headingP:{
      'fontSize':'1.5em',
      'color': blueBlk,
      //'margin':'auto',
      'alignSelf':'center'
    },
    imgsDivStyle:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      //maxHeight:'65vh',
      marginTop: '2%'
    },
    imgServDiv:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      maxWidth:'80%'
    },
    imgStyle:{
      maxWidth:'100%',
      maxHeight:'300px',
      borderRadius: '10%'
    },
    imgP:{
      fontSize:'1.5em',
      marginTop:'2%',
      marginBottom:'10%'
    }

  },
}

const renderServiceRow=(style)=>{
  const gearpics=[services2, services3, services1]
  const servicetypes=['Repairs', 'Preventative Maintenance', 'Custom Builds']
  const heading = [`Our Master Technicians `, 'can help with any service']
  return(
  <div style={style.mainDiv}>
    <div style={style.headingDiv}>
      <p style={{...fontStyle, ...style.headingP }}
      >
        {heading[0]}
      </p>
      <p style={{...fontStyle, ...style.headingP, ...style.headingPart2}}
      >
         {heading[1]}
      </p>

    </div>
    <div style={style.imgsDivStyle}>
      {gearpics.map((p,i)=>{
        return(
          <div key={i} style={style.imgServDiv}>
            <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
              <img src={p} alt="" style={style.imgStyle}/>
            </ScrollAnimation>
            <p style={{...fontStyle, ...style.imgP }}>{servicetypes[i]}</p>
          </div>
        )
      })}
    </div>
  </div>
  )
}

const ServiceRow = ()=>{
  return(
    <div style={{'backgroundColor':lightBlue}} >
      <Media query= '(max-width: 812px)'>
        {matches => {
          console.log('matches', matches)
          return(
            matches ? (
              renderServiceRow(styles.smlViewStyle)
            ):(
              renderServiceRow(styles.lgViewStyle)
            )
          )
        }
        }
      </Media>
    </div>
  )
}

export default ServiceRow
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
import tech1 from '../images/bikeShopPics/jonTech1.JPG'
import tech2 from '../images/bikeShopPics/jonTech2.JPG'

const lightBlue='#52A0F5'
const orange = '#BB6558'
const darkBlue = '#0073C4'
const blueBlk='#1A3256'

const fontStyle ={
  fontFamily:'Helvetica Neue, Helvetica, Arial, sans-serif',
  //fontVariant: 'small-caps',
  color: blueBlk
}

const styles = {
  lgViewStyle:{
    mainDiv:{
      height:'80vh',
      width:'100%',
    },
    headingDiv:{
      display:'flex',
      justifyContent:'center',
      height:'15vh',
      alignItems:'center',

    },
    headingP:{
      fontSize:'200%',
      color: blueBlk,
      margin: '0% 5%'
    },
    headingPart2:{
      marginLeft:'120%'
    },
    imgsDivStyle:{
      display:'flex',
      justifyContent:'space-evenly',
      maxHeight:'65vh',
      marginTop: '2%',
      marginBottom:'5%'
    },
    imgServDiv:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      maxWidth:'40vw',

    },
    imgStyle:{
      //maxWidth:'100%',
      // maxHeight:'55vh',
      // borderRadius: '10%'
      maxWidth:'100%',
      //maxHeight:'26vh',
      borderRadius: '10%'
    },
    imgP:{
      fontSize:'175%',
      margin:'2% 10% 0% 10%'
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
      margin:'3% '
    },
    headingP:{
      fontSize:'1.5em',
      color: blueBlk,
      //'margin':'auto',
      alignSelf:'center'
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
  //const gearpics=[services2, services3, services1]
  const gearpics=[tech2, tech1, ]
  const servicetypes=['Maintenance & Repairs','Custom Builds']
  const heading = [`Jonathon Kieninger, our Lead Technician, Can Help with Any Service`]
  return(
  <div style={style.mainDiv}>
    <div style={style.headingDiv}>
      <p style={{...fontStyle, ...style.headingP }}
      >
        {heading[0]}
      </p>
      {/*<p style={{...fontStyle, ...style.headingP, ...style.headingPart2}}*/}
      {/*>*/}
         {/*{heading[1]}*/}
      {/*</p>*/}

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
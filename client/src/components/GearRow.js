/**
 * Created by AndreaMerten on 12/28/17.
 */


import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import Media from 'react-media'

import sqgear1 from '../images/bikeShopPics/sqgear1.JPG'
import sqgear2 from '../images/bikeShopPics/sqgear2.JPG'
import sqgear3 from '../images/bikeShopPics/sqgear3.JPG'

const viewStyle = {
  height:'80vh',
  width:'100vw'
}
const lightBlue='#52A0F5'
const orange = '#BB6558'
const darkBlue = '#0073C4'
const blueBlk='#1A3256'

const fontStyle ={
  fontFamily:'Helvetica Neue, Helvetica, Arial, sans-serif',
  color: blueBlk
  //fontVariant: 'small-caps',
}

const styles = {
  lgViewStyle:{
    mainDiv:{
      height:'80vh',
      width:'100vw',
      //marginBottom: '10%',
      //backgroundColor:orange
      paddingBottom: '25%'
    },
    headingDiv:{
      display:'flex',
      justifyContent:'center',
      height:'15vh',
      alignItems:'center'
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
      margin: '0% 0% 0% 0%'
    },
    imgServDiv:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      maxWidth:'30vw',
      marginBottom: '5%'
    },
    imgStyle:{
      maxWidth:'100%',
      maxHeight:'50vh',
      borderRadius: '50%'
    },
    imgP:{
      fontSize:'2em',
      marginTop:'2%',
      marginBottom:'10%'

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
      'fontSize':'1.75em',
      'color': blueBlk,
      'margin':'0% 8%',
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
      maxHeight:'280px',
      borderRadius: '50%'
    },
    imgP:{
      fontSize:'1.5em',
      marginTop:'2%',
      marginBottom:'10%'
    }

  },
}


const renderGearRow = (style)=> {
  const gearpics = [sqgear1, sqgear2, sqgear3]
  const heading = ['We Have Gear and Parts for Every Need']
  const gearTypes = ['Parts', 'Gear', 'Accessories']

  return (
    <div style={style.mainDiv}>
      <div style={style.headingDiv}>
        {/*<ScrollAnimation animateIn='pulse' initiallyVisible={true}>*/}

        <p style={{...fontStyle, ...style.headingP}}
        >
          {heading[0]}
        </p>
        {/*<p style={{...fontStyle, ...style.headingP, ...style.headingPart2}}*/}
        {/*>*/}
          {/*{heading[1]}*/}
        {/*</p>*/}
        {/*</ScrollAnimation>*/}

      </div>
      <div style={style.imgsDivStyle}>
        {gearpics.map((p, i) => {
          return (
            <div key={i} style={style.imgServDiv}>
              <ScrollAnimation animateIn='pulse' initiallyVisible={true}>
                <img src={p} alt="" style={style.imgStyle}/>
              </ScrollAnimation>
              <p style={{...fontStyle, ...style.imgP}}>{gearTypes[i]}</p>
            </div>
          )
        })}
      </div>
    </div>
  )

}


  // return(
  //   <div style={{...viewStyle,'backgroundColor': orange}}>
  //     <div style={{
  //       'display':'flex',
  //       'justifyContent':'center',
  //       'height':'10vh'
  //     }}>
  //       <p style={{...fontStyle, 'fontSize':'2.5em', 'color': blueBlk, 'margin':'auto','alignSelf':'flex-end'}}>
  //         We have gear and parts for every need
  //       </p>
  //     </div>
  //     <div style={{'display':'flex', 'justifyContent':'space-evenly', 'maxHeight':'65vh'}}>
  //       {gearpics.map((p,i)=>{
  //
  //         const style={
  //           margin:'2%',
  //           maxHeight:'70vh'
  //         }
  //         return(
  //           <div key={i} style={style}>
  //             <ScrollAnimation animateIn='fadeIn' >
  //               <img src={p} alt="" style={{ 'borderRadius':'50%', 'maxHeight':'55vh'}}/>
  //             </ScrollAnimation>
  //           </div>
  //         )
  //       })}
  //     </div>
  //
  //   </div>
  // )
//}

const GearRow = ()=>{
  return(
    <div style={{'backgroundColor':orange}} >
      <Media query= '(max-width: 812px)'>
        {matches => {
          console.log('matches', matches)
          return(
            matches ? (
              renderGearRow(styles.smlViewStyle)
            ):(
              renderGearRow(styles.lgViewStyle)
            )
          )
        }
        }
      </Media>
    </div>
  )
}

export default GearRow
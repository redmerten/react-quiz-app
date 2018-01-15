/**
 * Created by AndreaMerten on 12/12/17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import Media from 'react-media'
import {fetchServiceChart} from '../actions/index'
import tech1 from '../images/bikeShopPics/jonTech1.JPG'
import tech2 from '../images/bikeShopPics/jonTech2.JPG'

const lightBlue='#52A0F5'
const orange = '#BB6558'
const darkBlue = '#0073C4'
const blueBlk='#1A3256'

const styles ={
  fontStyle:{
    fontFamily:'Oldtown',
    fontVariant: 'small-caps',
    color: blueBlk
  },

  lgView:{
    mainDiv:{
      padding: '80px 60px 50px 80px'
    },
    master:{
      marginLeft:'10%',
      marginBottom:'5%'
    },
    masterSize:{
      fontSize:'3em'
    },
    masterNext:{
      fontSize:'2.5em'
    },
    topDiv:{
      display:'flex',
      justifyContent:'space-between',
      //alignItems:'center',
      margin:'0% 20% 5% 10%'
    },
    titlePriceDiv:{
      display:'flex',
      //marginBottom:'20px',
      flexDirection:'row'
    },
    price:{
      marginLeft:'20px'
    },
    tuneups:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-evenly'
    },
    aTuneup:{
      display: 'flex',
      flexDirection:'column',
      marginBottom:'20px'
    },
    imgDiv:{
      //marginTop:'10px',
      width:'50%',
    },
    img:{
      maxWidth:'100%'
    },
    table:{
      display:'grid',
      gridTemplateColumns:'3fr 5fr 5fr',
      gridColumnGap:'5%',
      justifyItems:'start',
      width:'90%',
      margin:'0% 10%'
    },
    serviceCol:{
      gridColumn:'1/2'
    },
    pCol:{
      gridColumn:'2/3'
    },
    tableImgDiv:{
      gridColumn:'3/4',
      //width:'20%'
    },
    tableImg:{
      maxWidth:'100%',
      gridColumn:'3/4',
    }
  },

  smlView:{
    mainDiv:{
      paddingTop: '80px'
    },
    master:{
      margin:'0% 8% 5% 5%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      //alignItems:'center',
    },
    masterSize:{
      fontSize:'2em'
    },
    masterNext:{
      fontSize:'1.5em'
    },
    topDiv:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems: 'center',
      margin:'0% 2% 5% 2%'
    },
    titlePriceDiv:{
      display:'flex',
      //marginBottom:'20px',
    },
    price:{
      marginLeft:'20px'
    },
    tuneups:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-evenly'
    },
    aTuneup:{
      display: 'flex',
      flexDirection:'column',
      marginBottom:'20px'
    },
    imgDiv:{
      width:'100%',
    },
    img:{
      maxWidth:'100%'
    },
    table:{
      display:'grid',
      gridTemplateColumns:'1fr 1fr',
      gridColumnGap:'5%',
      justifyItems:'start',
      width:'90%',
      margin:'0% 5%'
    },
    serviceCol:{
      gridColumn:'1/2'
    },
    pCol:{
      gridColumn:'2/3'
    },
    tableImgDiv:{
      gridColumn:'3/4',
      //width:'20%'
    },
    tableImg:{
      maxWidth:'100%',
      gridColumn:'3/4',
    }
  },
}


const tuneUps =[
  {title:"Basic Tune Up",
  price: '$85',
  includes: [
      'Cleaning of frame/fork and wheels',
      'Adjustment of headset, bottom bracket, and hub bearings',
      'Inspection of components for wear',
      'Degreasing and lubing of chain/cables',
      'Checking of all fixing bolts',
      'On road testing of adjustments'
    ]
  },
  {title: "Premium Tune Up",
    price: '$185',
    includes: [
      'Includes everything from Basic Tune Up, plus:',
      'Complete replacement of cables and housing',
      'Front/Rear disc brake bleed',
      'Wheels fully checked/adjusted for lateral and radial true',
      'In depth cleaning of drivetrain components',
      'Headset and bottom bracket bearing overhaul'
    ]
  }
]

    class Services extends Component {
      componentDidMount(){
        this.props.fetchServiceChart()
      }

      renderChartHeader(style){
        return(
          <div>
            <div style={style.table} >
              <h4 style={style.serviceCol}>Service Menu</h4>
              <h4 style={style.pCol}>Price</h4>
            </div>
          </div>
        )
      }

      renderServiceChart(style){
        return (
          <div style={{'maxHeight':'400px', 'overflow':'auto'}}>
            {this.props.serviceChart.map((s,i) => {
              return (
                <div key={i} style={style.table}>
                    <p style={style.serviceCol}>{s.Service}</p>
                    <p style={style.pCol}>{s.Price}</p>
                </div>
              )
            })
            }
          </div>
        )
      }

      renderServices(style){
        console.log('serviceChart', this.props.serviceChart)
        return(
          <div style={style.mainDiv}>
            <div style={style.master}>
              <p style={{...styles.fontStyle, ...style.masterSize}}>Master Technician</p>
              <p style={{...styles.fontStyle, ...style.masterNext}}>
                Woodside Bike Shop's Service Center is Led by Jonathan Kieninger
              </p>
            </div>
            <div style={style.topDiv}>
              <div style={style.tuneups}>
                {tuneUps.map((t, i)=>{
                  return(
                    <div key={i} style={style.aTuneup}>

                      <div style={style.titlePriceDiv}>
                        <h5>{t.title}</h5>
                        <h5 style={style.price}>{t.price}</h5>
                      </div>
                      {t.includes.map((t,i)=>{
                        return(
                          <p key={i}>{t}</p>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
              <div style={style.imgDiv}>
                <img src={tech2} style={style.img}/>
              </div>
            </div>
            <div>
              {Array.isArray(this.props.serviceChart) ? this.renderChartHeader(style) : <div/>}
              {Array.isArray(this.props.serviceChart) ? this.renderServiceChart(style) : <div/>}
            </div>
          </div>
        )

      }

      render(){
        return(
          <div >
            <Media query= '(max-width: 812px)'>
              {matches => {
                console.log('matches', matches)
                return(
                  matches ? (
                    this.renderServices(styles.smlView)
                  ):(
                    this.renderServices(styles.lgView)
                  )
                )
              }
              }
            </Media>
          </div>
        )
      }





}


const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps, {fetchServiceChart})(Services)
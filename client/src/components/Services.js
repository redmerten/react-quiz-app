/**
 * Created by AndreaMerten on 12/12/17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchServiceChart} from '../actions/index'
import tech1 from '../images/bikeShopPics/jonTech1.JPG'
import tech2 from '../images/bikeShopPics/jonTech2.JPG'

const lightBlue='#52A0F5'
const orange = '#BB6558'
const darkBlue = '#0073C4'
const blueBlk='#1A3256'

const tableStyle = {
  display:'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  gridTemplateRows: 'auto',
  gridGap: '20px',
  padding:"5px",
  marginLeft:'40px',
  marginRight:'390px',
  fontSize:'1.2em',
  }

const headerStyle = {
  display:'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  gridTemplateRows: 'auto',
  gridGap: '20px',
  padding:"5px",
  marginLeft:'20px',
  marginRight:'400px',
  fontSize:'1.25em',
  fontWeight: 'bold',
  backgroundColor: lightBlue,
  color: 'white'
}

const  gridHeader1Style={
  gridColumn:'1/4',
  marginLeft:'20px'
}

const  gridCol1Style={
  gridColumn:'1/4',
}

const  gridCol2Style={
  gridColumn:'4/5',
  marginLeft: "60px",
  //marginLeft:'20px',
  marginRight:'400px',
  }


const styles ={
  lgView:{
    topDiv:{
      display:'flex',
      justifyContent:'space-evenly'
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
      flexDirection:'column'
    },
    aTuneup:{
      display: 'flex',
      flexDirection:'column',
      marginBottom:'40px'
    },
    imgDiv:{
      width:'40%',
    },
    img:{
      maxWidth:'100%'
    }
  },

  smView:{

  }
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

      renderChartHeader(){
        return(
          <div>
            <div style={headerStyle} >
              <div style={gridHeader1Style}>Service Type and Price Range</div>
              <div style={gridCol2Style}>Charge</div>
              {/*<div style={gridCol3Style}>$65</div>*/}
              {/*<div style={gridCol4Style}>$99</div>*/}
              {/*<div style={gridHeader5Style}>$199</div>*/}
            </div>
          </div>
        )
      }

      renderServiceChart(){
        return (
          <div style={{'maxHeight':'400px', 'overflow':'auto'}}>
            {this.props.serviceChart.map((s, i) => {
              return (
                <div style={tableStyle}>
                  <div style={gridCol1Style}>{s.Type}</div>
                  <div style={gridCol2Style}>{s.Charge}</div>
                  {/*<div style={gridCol3Style}>{s.$65}</div>*/}
                  {/*<div style={gridCol4Style}>{s.$99}</div>*/}
                  {/*<div style={gridCol5Style}>{s.$199}</div>*/}
                </div>
              )
            })
            }
          </div>
        )
      }


      render(){
        console.log('serviceChart', this.props.serviceChart)
        return(
          <div style={{'padding':'80px 60px 50px 80px'}}>
            <div style={styles.lgView.topDiv}>
              <div style={styles.lgView.tuneups}>
                {tuneUps.map((t, i)=>{
                  return(
                    <div style={styles.lgView.aTuneup}>

                      <div style={styles.lgView.titlePriceDiv}>
                        <h5>{t.title}</h5>
                        <h5 style={styles.lgView.price}>{t.price}</h5>
                      </div>
                      {t.includes.map((t,i)=>{
                        return(
                          <p>{t}</p>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
              <div style={styles.lgView.imgDiv}>
                <img src={tech1} style={styles.lgView.img}/>
              </div>
            </div>
            <div>
              {Array.isArray(this.props.serviceChart) ? this.renderChartHeader() : <div/>}
              {Array.isArray(this.props.serviceChart) ? this.renderServiceChart() : <div/>}
            </div>
          </div>
        )
      }

}


const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps, {fetchServiceChart})(Services)
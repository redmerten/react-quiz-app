/**
 * Created by AndreaMerten on 12/12/17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchServiceChart} from '../actions/index'

const tableStyle = {
  display:'grid',
  gridTemplateColumns: 'repeat(8,1fr)',
  gridTemplateRows: 'auto',
  //gridAutoRows: '1fr',
  gridGap: '20px',
  padding:"5px",
  marginLeft:'40px',
  marginRight:'390px',
  fontSize:'1.2em'

  }
const headerStyle = {
  display:'grid',
  gridTemplateColumns: 'repeat(8,1fr)',
  gridTemplateRows: 'auto',
  //gridAutoRows: '1fr',
  gridGap: '20px',
  padding:"5px",
  marginLeft:'20px',
  marginRight:'400px',
  fontSize:'1.25em',
  fontWeight: 'bold',
  backgroundColor: 'lightGrey'
}

const  gridHeader1Style={
  gridColumn:'1/4',
  marginLeft:'20px'
}

const  gridCol1Style={
  gridColumn:'1/4',
}

const  gridCol2Style={
  gridColumn:'4/6',
  marginLeft: "60px"
  }

const  gridCol3Style= {
  gridColumn: '6/7',
  textAlign: 'center'
}
const  gridCol4Style= {
  gridColumn: '7/8',
  textAlign: 'center'
}
const  gridCol5Style= {
  gridColumn: '8/9',
  textAlign: 'center',
  marginLeft:'20px'
}

const  gridHeader5Style= {
  gridColumn: '8/9',
  textAlign: 'center',
  //justifySelf:'end',
  paddingRight:'0px'
}


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
          <div style={gridCol3Style}>$65</div>
          <div style={gridCol4Style}>$99</div>
          <div style={gridHeader5Style}>$199</div>
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
              <div style={gridCol3Style}>{s.$65}</div>
              <div style={gridCol4Style}>{s.$99}</div>
              <div style={gridCol5Style}>{s.$199}</div>
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
      <div style={{'padding':'80px 60px 0px 80px'}}>
        {Array.isArray(this.props.serviceChart) ? this.renderChartHeader() : <div/>}
        {Array.isArray(this.props.serviceChart) ? this.renderServiceChart() : <div/>}
      </div>
    )
  }
}


const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps, {fetchServiceChart})(Services)
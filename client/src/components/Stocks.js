/**
 * Created by AndreaMerten on 2/2/18.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  VictoryChart,
  VictoryAxis,
  VictoryCandlestick,
  VictoryTheme,
  VictoryTooltip,
  VictoryBar,
  VictoryLabel

} from 'victory'
import {fetchStocksHistorical, fetchStocksCurrent, fetchStocksNews} from '../actions/index'


class Stocks extends Component {

  state={
    opening:'',
    high:'',
    low:'',
    current:''
  }

  componentDidMount(){
    this.props.fetchStocksCurrent(['DATA'])
    const today = new Date()
    let day=today.getDate()
    let month=today.getMonth()+1
    let year = today.getFullYear()
    const to=`${year}-${month}-${day}`
    let fromMonth
    if (month<4){
      fromMonth = 12+month-4
      year-=1
    }
    else fromMonth = month-4
    const from = `${year}-${fromMonth}-01`
    this.props.fetchStocksHistorical('DATA', from, to)
    this.props.fetchStocksNews('DATA')
  }

  renderStockInfo=()=>{
    if (Array.isArray(this.props.stockCurrent)) {
      const {symbol, name, c, l, cp} = this.props.stockCurrent[0]
      return(
        <div style={styles.stockInfoDiv}>
          <h2>My Current Favorite Stock Is {name}</h2>
          <h3>{symbol}</h3>
          <h5>Current Price: {l} </h5>
          <h5>Change: {c} {cp}%</h5>
        </div>
        )
    }
    else return <p/>
  }

   renderCandleStick=()=>{
     const history = this.props.stockHistorical.map(s=>{
       let {open,high, low, close, date}=s
       let x= new Date(date.slice(0,4), date.slice(5,7)-1, date.slice(8,10))
       //const { x, y } = { x: 11, y: 8 }         //={open,high,low, close}
       return {x:x, open:open, high:high, low:low, close:close, label:`$${close.toFixed(2)}`}
     })
     let currentData
     if (Array.isArray(this.props.stockCurrent)) {
       const {l, hi, lo, op} = this.props.stockCurrent[0]
        currentData= {
         x: new Date(),
         close:parseFloat(l),
         high:parseFloat(hi),
         low:parseFloat(lo),
         open:parseFloat(op),
         label:parseFloat(l)
       }
     }
     //{x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0}
    // {date: "2017-09-01T07:00:00.000Z", open: 72.63, high: 73.12, low: 72.2, close: 72.66, …}
     if (currentData)
       history.push(currentData)

     return (
       <div style={styles.chartDiv}>
         <VictoryChart
         theme={VictoryTheme.material}
         domainPadding={{ x: 5 }}
         scale={{ x: "time" }}
         height={300}
         width={1200}
         >
           <VictoryLabel text="Price"
                         x={20} y={30}
                         textAnchor="middle"
           />
           <VictoryAxis
             tickFormat={(t) => `${t.getMonth() === 0 ? 1 : t.getMonth()+1}/${t.getDate()}`}
           />
           <VictoryAxis
             dependentAxis
             tickFormat={(p) => `$${p}`}
           />
           <VictoryCandlestick
             candleColors={{ positive: "Lime", negative: "OrangeRed" }}
             data={history}
             labelComponent={
               <VictoryTooltip
                 flyoutStyle={{
                   stroke: (d) => d.open < d.close ? "Lime" : "OrangeRed",
                   fill:'White',
                   //label:(d) => d.open < d.close ? "Lime" : "OrangeRed",
                 }}
              />
             }
             style={{
               data: {
                  fillOpacity: 1, stroke: "LightGrey", strokeWidth: .5
               },
               labels: {
                 fontSize: 15, fill: "black"
               }
             }}
           />
         </VictoryChart>
       </div>
     )
   }

   renderVolume=()=>{
     const volumeData = this.props.stockHistorical.map(v=>{
       let {volume, date, open, close}=v
       let x= new Date(date.slice(0,4), date.slice(5,7)-1, date.slice(8,10))
       //const { x, y } = { x: 11, y: 8 }         //={open,high,low, close}
       return {date:x, volume:volume, open:open, close:close, label:`${(volume/1000000).toFixed(1)}m`}

     })
     let currentData
     if (Array.isArray(this.props.stockCurrent)) {
       const {l, op, vo} = this.props.stockCurrent[0]
       currentData= {
         date: new Date(),
         volume:parseFloat(vo)*1000000,
         open:parseFloat(op),
         close:parseFloat(l),
         label:`${parseFloat(vo.slice(0,vo.length-1))}m`
       }
       volumeData.push(currentData)
     }
     return (
       <div style={styles.chartDiv}>
         <VictoryChart
           theme={VictoryTheme.material}
           domainPadding={{ x: 5 }}
           scale={{ x: "time" }}
           height={200}
           width={1200}
         >
           <VictoryLabel text="Volume"
             x={20} y={30}
             textAnchor="middle"
           />
           <VictoryAxis
             tickFormat={(t) => `${t.getMonth() === 0 ? 1 : t.getMonth()+1}/${t.getDate()}`}
           />
           <VictoryAxis
             dependentAxis
             tickFormat={(v) => `${v/1000000}m`}
             //label="Volume"
           />
           <VictoryBar
             data={volumeData}
             x="date"
             y="volume"
             labelComponent={
               <VictoryTooltip
                 flyoutStyle={{
                   stroke: "LightGrey",
                   fill:'White',
                   label:"black",
                 }}
               />
             }
             style={{
               data: { fill: (d)=>d.open < d.close ? "Lime" : "OrangeRed" },
               labels: {
                 fontSize: 15, fill: "black"
               }
             }}
           />
         </VictoryChart>
       </div>
     )
   }

  render () {
    console.log('state from stocks', this.props)
    return (
      <div style={styles.div}>

        {this.renderStockInfo()}
        {Array.isArray(this.props.stockHistorical) ?
          <div>
            {this.renderCandleStick()}
            {this.renderVolume()}
          </div>
            :
          <div/>
        }
      </div>
    )
  }
}

const stock=
  {
    symbol: 'DATA',
    exchange: 'NYSE',
    t: 'DATA',
    name: 'Tableau Software Inc',
    c: '+8.23', //change from prev close
    l: '85.32', //current list
    cp: '10.68', //change percent?
    ccol: 'chg',
    op: '86.11', //open price
    hi: '87.00',
    lo: '81.12',
    vo: '4.38M',
    avvo: '653,486.00',
    hi52: '87.00',
    lo52: '47.30',
  }

const mapStateToProps = (state) =>{
return state
}

export default connect(mapStateToProps,
  {fetchStocksHistorical, fetchStocksCurrent, fetchStocksNews})(Stocks)


const styles={
  div:{
    paddingTop:'70px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  h2:{
    margin:'5%'
  },
  stockInfoDiv:{
    marginTop:'2%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  chartDiv:{
    width:'80vw',
  }
}
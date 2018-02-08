/**
 * Created by AndreaMerten on 2/5/18.
 */
import React, { Component } from 'react'
import './styles.css'
import WorldMap from './d3components/WorldMap'
import BarChart from './d3components/D3BarChart'
import StreamGraph from './d3components/StreamGraph'
//import Brush from './Brush'
//import StatLine from './StatLine'
import worlddata from '../client-side-data/World'
import { range } from 'd3-array'
import { scaleThreshold } from 'd3-scale'
import { geoCentroid } from 'd3-geo'

const appdata = worlddata.features
  .filter(d => geoCentroid(d)[0] < -20)

appdata
  .forEach((d,i) => {
    const offset = Math.random()
    d.launchday = i
    d.data = range(30).map((p,q) => q < i ? 0 : Math.random() * 2 + offset)
  })

const colorScale = scaleThreshold().domain([5,10,20,30]).range(["#75739F", "#5EAFC6", "#41A368", "#93C464"])

class D3Examples extends Component {
  constructor(props){
    super(props)
    this.onResize = this.onResize.bind(this)
    this.onHover = this.onHover.bind(this)
    this.onBrush = this.onBrush.bind(this)
    this.state = { screenWidth: 1500, screenHeight: 2000, hover: "none", brushExtent: [0,40] }
  }

  onResize() {
    this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight - 120 })
  }

  onHover(d) {
    this.setState({ hover: d.id })
  }

  onBrush(d) {
    this.setState({ brushExtent: d })
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize, false)
    this.onResize()
  }

  render() {
    const filteredAppdata = appdata
      .filter((d,i) => d.launchday >= this.state.brushExtent[0] && d.launchday <= this.state.brushExtent[1])
    return (
      <div className="App" style={styles.div}>

        <div>
          {/*<StatLine allData={appdata} filteredData={filteredAppdata} />*/}
          <StreamGraph hoverElement={this.state.hover} onHover={this.onHover} colorScale={colorScale} data={filteredAppdata} size={[this.state.screenWidth, this.state.screenHeight / 2]} />
          {/*<Brush changeBrush={this.onBrush} size={[this.state.screenWidth, 50]} />*/}
          <div style={styles.mapDiv}>
            <WorldMap hoverElement={this.state.hover} onHover={this.onHover} colorScale={colorScale} data={filteredAppdata} size={[this.state.screenWidth / 2, this.state.screenHeight / 2]} />
            <BarChart hoverElement={this.state.hover} onHover={this.onHover} colorScale={colorScale} data={filteredAppdata} size={[this.state.screenWidth / 2, this.state.screenHeight / 2]} />
          </div>
        </div>
      </div>
    )
  }
}

export default D3Examples

const styles={
  div:{
    paddingTop:'80px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height:'85vh'
  },
  mapDiv:{
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
    width:'80vw'
  }
}


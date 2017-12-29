/**
 * Created by AndreaMerten on 9/28/17.
 */

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import bikes1 from '../images/bikeShopPics/IMG_2609.JPG'

import {
  Menu,
  MenuItem,
  PopoverInteractionKind,
  Popover,
  Position,
  Dialog
} from "@blueprintjs/core"
import '@blueprintjs/core/dist/blueprint.css'
import {Icon} from 'react-fa'

const lightBlue='#52A0F5'
const orange = '#BB6558'
const darkBlue = '#0073C4'
const blueBlk='#1A3256'

const fontStyle ={
  fontFamily:'Courier',
  fontVariant: 'small-caps',
  color: blueBlk
}

const bikeBrands =
  [{brand:'Santa Cruz',url:'https://www.santacruzbicycles.com/en-US'},
    {brand:'Norco',url:'http://www.norco.com'},
    {brand:'Salsa',url:'http://salsacycles.com'},
    {brand:'Haro', url:'https://www.harobikes.com/'},
    {brand:'Reid',url:'https://www.reidbikes.com/'},
    {brand:'Da Vinci',url:'http://www.devinci.com/'},
    {brand:'Transition',url:'https://www.transitionbikes.com/'},
    {brand:'Yeti',url:'http://www.yeticycles.com/'},
    {brand:'Pure Cycles',url:'https://www.purecycles.com/?gclid=CjwKCAiA9rjRBRAeEiwA2SV4ZeI1SCGgjK7KwtUZMTOCKXhPewipzp0v-OcW5IRInrXisjBLQ_QppxoCnEMQAvD_BwE'}
  ]
//const gearTypes = ['Accessories', 'Components', 'Suspension', 'Protection', 'Tires']
//const services = ['Tune Ups', 'Wheels', 'Tires', 'Suspension', 'Brakes']

const bikingLinks = [
  {brand: 'Midpeninsula Open Space Trails', url: 'https://www.openspace.org/preserves'},
  {brand: 'MTB Trail Guide', url: 'https://www.mtbproject.com/directory/8007188/bay-area'}
]


const popOverMenu = (typeArr)=> {
  typeArr.sort((a, b)=>a.brand>b.brand)
  return(
    <Menu style={{...fontStyle}}>
      {typeArr.map((b,i)=>{
        return(
          <a href={b.url} key={i}>
            <MenuItem text={b.brand} />
          </a>
        )
      })}
    </Menu>
  )
}



class Header extends Component {
  state = {hoursIsOpen: false}
  toggleHoursDialog = () => {
    console.log('toggled hours')
    this.setState({ hoursIsOpen: !this.state.hoursIsOpen })
  }


  renderHours=()=>{
    const map = "https://www.google.com/maps/place/Woodside+Bike+Shop/@37.4561654,-122.2299071,17z/data=!3m1!4b1!4m5!3m4!1s0x808fa384f074f6ad:0x5901b012d225ee78!8m2!3d37.4561654!4d-122.2277184"
    console.log('renderhours', this.state.hoursIsOpen)
    return(
      <Menu>
        <a href= {map} style={{...fontStyle}}>
          <MenuItem text='Location'/>
        </a>
        {/*<div onClick={this.toggleHoursDialog}>*/}
          <MenuItem text='Hours' >
            <div style={{
              'display':'flex',
              'flexDirection':'column',
              'width':'25vw'

            }}>
              <img src={bikes1} alt=""
                   style={{maxWidth:'25vw'}}/>

              <div style={{...fontStyle, 'margin' :'2% 0% 0% 8%'}}>
                <h2 >Woodside Bike Shop Hours</h2>
                <div style={{'fontSize':'1.5em'}}>
                  <p>Monday through Saturday: 10am - 6pm</p>
                  <p>Sunday by Appointment </p>
                </div>
              </div>
            </div>
          </MenuItem>
      </Menu>


    )
  }



  render(){
    console.log('hours state', this.state.hoursIsOpen)
    return (
      <nav
        className="pt-navbar pt-fixed-top "
        style = {{
          "borderBottomColor":"0 0 0",
          "boxShadow": "0 0 0 0",
          "border":"0",
          "margin": "0 auto",
          'width':'100vw'

        }}
      >
        <div
          className="pt-navbar-group pt-align-left"
          style={{"width":"80vw"}}
        >
          <Icon size="3x" name="bicycle" style={{'marginLeft':'3%'}}/>
          <Link to='/' className="pt-navbar-heading"
                style={{"marginLeft":"3%"}}>
            <h4 style={{"width":"20vw",...fontStyle, 'fontSize':'2em'}}>Woodside Bike Shop</h4>
          </Link>

          <div style={{"marginLeft":"0%", 'display': 'flex',
            'justifyContent': 'space-evenly', 'width': '60vw',...fontStyle}}>
            <Popover
              content={popOverMenu(bikeBrands)}
              interactionKind={PopoverInteractionKind.CLICK}
              position={Position.BOTTOM}
            >
              <button
                className="pt-button pt-minimal"
                style={{...fontStyle, 'fontSize':'1.5em'}}>Bikes</button>
            </Popover>



            {/*<Link to="/gear">*/}
              {/*<button className="pt-button pt-minimal" style={{...fontStyle, "marginLeft":"50px", 'fontSize':'1.5em'}}>Gear </button>*/}
            {/*</Link>*/}


            {/*<Link to="/serviceChart">*/}
              {/*<button className="pt-button pt-minimal" style={{...fontStyle, "marginLeft":"50px", 'fontSize':'1.5em'}}>Service </button>*/}
            {/*</Link>*/}

            <Popover
              content={this.renderHours()}
              interactionKind={PopoverInteractionKind.CLICK}
              position={Position.BOTTOM}
            >
              <button
                className="pt-button pt-minimal"
                style={{...fontStyle, 'fontSize':'1.5em'}}>Location and Hours</button>
            </Popover>

            <Popover
              content={popOverMenu(bikingLinks)}
              interactionKind={PopoverInteractionKind.CLICK}
              position={Position.BOTTOM}
              style={{}}
            >
              <button
                className="pt-button pt-minimal"
                style={{...fontStyle, 'fontSize':'1.5em'}}>Local Biking Info </button>
            </Popover>
          </div>
        </div>

        <div className="pt-navbar-group pt-align-right" style={{"width":"17vw", 'display': 'flex',
          'justifyContent': 'flex-end'}}>
          <button className="pt-button pt-minimal pt-icon-mobile-phone" style={{'marginRight':'3%'}}>
            <a href="tel:6502991071" style={{...fontStyle, 'fontSize':'1.5em'}}>Call Us</a>
          </button>
        </div>
      </nav>
    )}
}


export default Header
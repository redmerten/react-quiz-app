/**
 * Created by AndreaMerten on 9/28/17.
 */

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import bikes1 from '../images/bikeShopPics/IMG_2609.JPG'
import Media from 'react-media'
import './styles.css'

import {
  Menu,
  MenuItem,
  PopoverInteractionKind,
  Popover,
  Position
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

// ORDER PER OWNER: santa cruz, norco, yeti, dav, salsa, haro, pure, kink, reid, transition
//why buy from wbs vs direct from mfr

const bikeBrands =
  [{brand:'Santa Cruz',url:'https://www.santacruzbicycles.com/en-US'},
    {brand:'Norco',url:'http://www.norco.com'},
    {brand:'Yeti',url:'http://www.yeticycles.com/'},
    {brand:'Da Vinci',url:'http://www.devinci.com/'},
    {brand:'Salsa',url:'http://salsacycles.com'},
    {brand:'Haro', url:'https://www.harobikes.com/'},
    {brand:'Pure Cycles',url:'https://www.purecycles.com/?gclid=CjwKCAiA9rjRBRAeEiwA2SV4ZeI1SCGgjK7KwtUZMTOCKXhPewipzp0v-OcW5IRInrXisjBLQ_QppxoCnEMQAvD_BwE'},
    {brand: 'KINK BMX', url: 'https://www.kinkbmx.com/'},
    {brand:'Reid',url:'https://www.reidbikes.com/'},
    {brand:'Transition',url:'https://www.transitionbikes.com/'}
  ]
//const gearTypes = ['Accessories', 'Components', 'Suspension', 'Protection', 'Tires']
//const services = ['Tune Ups', 'Wheels', 'Tires', 'Suspension', 'Brakes']
// add contact us w/ phone and email

const bikingLinks = [
  {brand: 'Midpeninsula Open Space Trails', url: 'https://www.openspace.org/preserves'},
  {brand: 'MTB Trail Guide', url: 'https://www.mtbproject.com/directory/8007188/bay-area'}
]


const popOverMenu = (typeArr)=> {
  //typeArr.sort((a, b)=>a.brand>b.brand)
  return(
    <Menu >
      {typeArr.map((b,i)=>{
        return(
          <a href={b.url} key={i}>
            <MenuItem style={{...fontStyle}} text={b.brand} />
          </a>
        )
      })}
    </Menu>
  )
}





class Header extends Component {
  state = {hoursIsOpen: false}

  // toggleHoursDialog = () => {
  //   console.log('toggled hours')
  //   this.setState({ hoursIsOpen: !this.state.hoursIsOpen })
  // }

  renderLargeScreen=()=>{
    return(
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
            <h4 style={{
              "width":"20vw",
              ...fontStyle,
              'fontSize':'1.75em',
              'marginTop':'3%'}}
            >
              Woodside Bike Shop
            </h4>
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
                style={{...fontStyle, 'fontSize':'1.5em'}}
              >
                Bikes and Services
              </button>
            </Popover>



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
    )
  }

  renderSmallScreen=()=>{
    return(
      <nav className="pt-navbar pt-fixed-top "
           style={{
             "borderBottomColor": "0 0 0",
             "boxShadow": "0 0 0 0",
             "border": "0",
             "margin": "0 auto",
             'width': '100vw',


           }}>
        <div className="pt-navbar-group pt-align-left"
             style={{
               "width": "95vw",
               'display':'flex',
               //'flexDirection':'row',
               'justifyContent':'space-between'
             }}
        >
          <div //className="pt-navbar-group "
            style={{"marginLeft": "2.5%",'width':'15vw'}}
          >
            <Icon size="2x" name="bars"/>

          </div>

          <div style={{'display':'flex', 'width':'65vw', 'justifyContent':'center'}}>
            <Icon size="2x" name="bicycle" style={{}}/>
            <Link to='/' className="pt-navbar-heading"
                style={{"marginLeft": "2%"}}>
              <h4 style={{ ...fontStyle, 'fontSize': '1.5em'}}>Woodside Bike Shop</h4>
            </Link>
          </div>

          <button className="pt-button pt-minimal pt-icon-mobile-phone"
            style={{'width':'15vw'}}
          >
            <a href="tel:6502991071" style={{...fontStyle, 'fontSize':'1.5em'}}>Call</a>
          </button>
        </div>
      </nav>
    )
  }


  //m-f 10- 7
  // s-s 10-6
  renderHours=()=>{
    const map = "https://www.google.com/maps/place/Woodside+Bike+Shop/@37.4561654,-122.2299071,17z/data=!3m1!4b1!4m5!3m4!1s0x808fa384f074f6ad:0x5901b012d225ee78!8m2!3d37.4561654!4d-122.2277184"
    console.log('renderhours', this.state.hoursIsOpen)
    return(
      <Menu>
        <a href= {map} style={{...fontStyle}}>
          <MenuItem text='Location'/>
        </a>
        {/*<div onClick={this.toggleHoursDialog}>*/}
          <MenuItem text='Hours' style={{'fontSize':'1.5em'}}>
            <div style={{
              'display':'flex',
              'flexDirection':'column',
              'width':'25vw'

            }}>
              <img src={bikes1} alt=""
                   style={{maxWidth:'25vw'}}/>

              <div style={{...fontStyle, 'margin' :'2% 0% 0% 5%'}}>
                <h4 >Woodside Bike Shop Hours</h4>
                <div style={{'fontSize':'1.25em'}}>
                  <p>Monday through Friday: 10am - 7pm</p>
                  <p>Saturday and Sunday: 10am - 6pm</p>
                </div>
              </div>
            </div>
          </MenuItem>
      </Menu>

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
              this.renderSmallScreen()
            ):(
              this.renderLargeScreen()
            )
            )
          }


          }
        </Media>
      </div>
    )
  }


}


export default Header
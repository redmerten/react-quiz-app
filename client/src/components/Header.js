/**
 * Created by AndreaMerten on 9/28/17.
 */

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import bikes1 from '../images/bikeShopPics/IMG_2609.JPG'
import Media from 'react-media'
//import Menu as BurgerMenu, {SubMenu, MenuItem as BurgerMenuItem} from 'rc-menu';
//import { slide as BurgerMenu } from 'react-burger-menu'
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

const styles ={
  fontStyle:{
    fontFamily:'Helvetica Neue, Helvetica, Arial, sans-serif',
    //fontVariant: 'small-caps',
    color: blueBlk
  },
  navStyle:{
    display:'flex',
    backgroundColor:'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    height: '60px',
    boxShadow:'0 0 0 0 '
  },
  navLgBrandDiv: {
    div:{
      flexGrow:'1',
      display:'flex' ,
      justifyContent: 'flex-start',
      alignItems:'center',
      marginLeft:"1%"
    },
    iconSize:'3x',
    textStyle:{
      fontSize:'1.75em',
      marginTop:'3%',
    },

  },
  navSmlBrandDiv:{
    div:{
      flexGrow:'3',
      display:'flex' ,
      justifyContent: 'center',
      alignItems:'center',
    },
    iconSize:'2x',
    textStyle:{
      fontSize:'1.35em',
      marginTop:'5%',
    },
  },

  burgerButton:{
    border:'none'

  },
  smlViewP:{
    fontFamily:'Helvetica Neue,Helvetica,Arial,sans-serif',
    fontVariant: 'small-caps',
    color: blueBlk,
    fontSize:'1em',
    marginLeft:'2%'
  }


}

const map = "https://www.google.com/maps/place/Woodside+Bike+Shop/@37.4561654,-122.2299071,17z/data=!3m1!4b1!4m5!3m4!1s0x808fa384f074f6ad:0x5901b012d225ee78!8m2!3d37.4561654!4d-122.2277184"

/*

 */


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
            <MenuItem style={{...styles.fontStyle}} text={b.brand} />
          </a>
        )
      })}
    </Menu>
  )
}


class Header extends Component {
  // state = {hoursIsOpen: false}

  renderBrandDiv=(style)=>{
    return(
      <div
        style={style.div}
      >
        <Icon size={style.iconSize} name="bicycle" style={{'marginLeft':'3%'}}/>
        <Link to='/' //className="pt-navbar-heading"
              style={{"marginLeft":"3%", 'display':'flex', 'alignItems':'center'}}>
          <h4 style={{'fontFamily':'Oldtime', ...style.textStyle}}>
            Woodside Bike Shop
          </h4>
        </Link>
      </div>
    )
  }

  renderLargeNavItems=()=>{
    return(
      <div style={{'flexGrow':'2.5','display': 'flex',
        'justifyContent': 'space-evenly', ...styles.fontStyle}}>
        <Popover
          //content={popOverMenu(bikeBrands)}
          content={this.renderBikesAndServices()}
          interactionKind={PopoverInteractionKind.CLICK}
          position={Position.BOTTOM}
        >
          <button
            className="pt-button pt-minimal"
            style={{...styles.fontStyle, 'fontSize':'1.25em'}}
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
            style={{...styles.fontStyle, 'fontSize':'1.25em'}}>Location and Hours</button>
        </Popover>

        <Popover
          content={popOverMenu(bikingLinks)}
          interactionKind={PopoverInteractionKind.CLICK}
          position={Position.BOTTOM}
          style={{}}
        >
          <button
            className="pt-button pt-minimal"
            style={{...styles.fontStyle, 'fontSize':'1.25em'}}>Local Biking Info </button>
        </Popover>
      </div>
    )
  }

  renderContactUs=()=>{
    return(
      <div
        style={{
          'marginRight':'3%', 'flexGrow':'1', 'display':'flex' , 'justifyContent': 'flex-end',
          //'alignItems':'center'
        }}
      >
        <Popover
          content={this.renderContact()}
          interactionKind={PopoverInteractionKind.CLICK}
          position={Position.BOTTOM}
          style={{}}
        >
          <button
             className="pt-button pt-minimal"
             style={{...styles.fontStyle,'fontSize':'1.25em'}}>
            Contact Us
          </button>
        </Popover>
      </div>
    )
  }

  renderHours=()=>{

    // console.log('renderhours', this.state.hoursIsOpen)
    return(
      <Menu>
        <a href= {map} style={{...styles.fontStyle}}>
          <MenuItem text='Location'/>
        </a>
          <MenuItem text='Hours' style={{'fontSize':'1.5em'}}>
            <div style={{
              'display':'flex',
              'flexDirection':'column',
              'width':'25vw'
            }}>
              <img src={bikes1} alt=""
                   style={{maxWidth:'25vw'}}/>

              <div style={{...styles.fontStyle, 'margin' :'2% 0% 0% 5%'}}>
                <h4 >Woodside Bike Shop Hours</h4>
                <div style={{'fontSize':'1.25em'}}>
                  <p>Monday through Saturday: 10am - 6pm</p>
                  <p>Sunday by Appointment</p>
                </div>
              </div>
            </div>
          </MenuItem>
      </Menu>

    )
  }

  renderContact=()=>{
    return(
      <Menu
        //style={{'width':'200px'}}
      >
        <a
          href="tel:6502991071"
          style={{...styles.fontStyle, 'fontSize':'1em'}}
        >
          <MenuItem className="pt-button pt-minimal pt-icon-mobile-phone" text='Call'/>
        </a>
        <a href="mailto:woodsidemechanic@gmail.com" style={{...styles.fontStyle, 'fontSize':'1em'}}>
          <MenuItem className="pt-button pt-minimal pt-icon-envelope" text='Email'/>
        </a>
      </Menu>
    )
  }


  renderBikesAndServices=()=>{
    return(
      <Menu>
        <Popover
          content={popOverMenu(bikeBrands)}
          interactionKind={PopoverInteractionKind.CLICK}
          position={Position.BOTTOM}
        >
          <button
            className="pt-button pt-minimal"
            style={{...styles.fontStyle, 'fontSize':'1.25em'}}
          >
            Bikes
          </button>
        </Popover>

        <Link to='/serviceChart'>
          <MenuItem text="Services" />
        </Link>

      </Menu>
    )
  }

  renderSmallScreen=()=>{
    return(
      <nav className="pt-navbar pt-fixed-top "
           style={styles.navStyle}>
        <div style={{
          "marginLeft": "2.5%",
          'flexGrow':'1'
        }}
        >
          <Popover
            content={
              <Menu>
                {this.renderBikesAndServices()}
                <Menu>
                  <a href= {map} style={{
                    ...styles.fontStyle,
                    //'fontSize':'1.25em'
                    'marginTop':'2%'
                  }}>
                    <MenuItem style={{...styles.fontStyle}} text='Location'/>
                  </a>
                </Menu>

                <Menu text='Hours' style={{'fontSize':'1.25em'}}>
                  <div style={{
                    'display':'flex',
                    'flexDirection':'column',
                    'width':'250px',
                    'margin' :'2% 0% 0% 2%'
                  }}>
                    <p style={{...styles.fontStyle, 'fontSize':'1.25em'}}>Hours</p>
                    <p style={styles.smlViewP}>Mon-Sat: 10am-6pm</p>
                    <p style={styles.smlViewP}>Sun by Appointment</p>
                  </div>
                </Menu>

                <Popover
                  content={popOverMenu(bikingLinks)}
                  interactionKind={PopoverInteractionKind.CLICK}
                  position={Position.BOTTOM}
                  style={{}}
                >
                  <button
                    className="pt-button pt-minimal"
                    style={{...styles.fontStyle, 'fontSize':'1.25em'}}>Local Biking Info </button>
                </Popover>
              </Menu>
            }
            position={Position.RIGHT_TOP}>
            <button className="pt-button pt-minimal">
              <Icon size="2x" name="bars"/>
            </button>
          </Popover>

        </div>
        {this.renderBrandDiv(styles.navSmlBrandDiv)}
        {this.renderContactUs()}
      </nav>
    )
  }

  renderLargeScreen=()=>{
    return(
      <nav
        className="pt-navbar pt-fixed-top "
        style = {styles.navStyle}
      >
        {this.renderBrandDiv(styles.navLgBrandDiv)}
        {this.renderLargeNavItems()}
        {this.renderContactUs()}

      </nav>
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
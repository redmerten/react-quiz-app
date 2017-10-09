/**
 * Created by CameronMerten on 9/28/17.
 */


import React, {Component} from 'react'
import googleOauth from './Oauth'
import {
  Button,
  Menu,
  MenuItem,
  MenuDivider,
  PopoverInteractionKind,
  Popover,
  Position
} from "@blueprintjs/core"
import '@blueprintjs/core/dist/blueprint.css'


const navStyle ={
  borderColor: 'white',
  border: 0
}
const popOverStyle = {
  marginLeft: '50px'
}


const beddingMenu = (
  <Menu>
    <MenuItem text="Sheets" />
    <MenuItem text="Duvets" />
    <MenuItem text="Pillows" />
  </Menu>
)

const tableMenu = (
  <Menu>
    <MenuItem text="Table Cloths" />
    <MenuItem text="Napkins" />
    <MenuItem text="Runners" />
  </Menu>
)



class Header extends Component {
  render(){
    return (
      <nav
        className="pt-navbar pt-fixed-top "
        style = {{
          "borderBottomColor":"255 255 255",
          "boxShadow": "255 255 255 0",
          "border":"none",
          "border":"0"
        }}
      >
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">UrbanNest</div>
          <div style={popOverStyle}>
            <Popover
              content={beddingMenu}
              interactionKind={PopoverInteractionKind.HOVER}
              position={Position.BOTTOM}
            >
              <button className="pt-button pt-minimal">Bed</button>
            </Popover>
            <Popover content={tableMenu} interactionKind={PopoverInteractionKind.HOVER} position={Position.BOTTOM}>
              <button className="pt-button pt-minimal">Table </button>
            </Popover>
          </div>
        </div>
        <div className="pt-navbar-group pt-align-right">
          <div style={popOverStyle}>
            <Popover
              content={googleOauth()}
              interactionKind={PopoverInteractionKind.HOVER}
              position={Position.BOTTOM}
            >
              <button className="pt-button pt-minimal pt-icon-chevron-down">Sign In</button>
            </Popover>
          </div>
          <button className="pt-button pt-minimal pt-icon-search">Search</button>


          <button className="pt-button pt-minimal pt-icon-shopping-cart"></button>

        </div>
      </nav>
  )}
}

export default Header
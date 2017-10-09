/**
 * Created by CameronMerten on 10/1/17.
 */

import React from 'react'
import {
  Button,
  Menu,
  MenuItem,
  Classes,
  MenuDivider,
  PopoverInteractionKind,
  Popover,
  Position
} from "@blueprintjs/core"
import '@blueprintjs/core/dist/blueprint.css'

const inline = {
  display: "inline"
}

const Landing = () => {

  const csItems = ['Order Status', 'Returns', 'Provide Feedback']
  const aboutUs =['Careers', 'Blogs']
  const legal = ['Terms and Conditions', 'Privacy Rights', 'CA Supply Chain Act']

  const footerMenu = (which) => {
    return which.map(e => {
      return (
        <MenuItem key={e} text={e}></MenuItem>
      )
    })
  }

  return (
    //{{}} js inside jsx and object inside
    //everything in div will be centered
    <div style={{'textAlign': 'center', "padding":"50px"}} >
      <div>
        <h1>
          Lots of Pics Here in the LANDING!
        </h1>
        Array of pictures
      </div>
      <div inline="true">
        <Menu inline={true}>
          Customer Service
          {footerMenu(csItems)}
        </Menu>
        <Menu inline={true}>
          About Us
          {footerMenu(aboutUs)}
        </Menu>
        <Menu inline={true}>
          Legal
          {footerMenu(legal)}
        </Menu>
      </div>

    </div>


  )
}

export default Landing
/**
 * Created by CameronMerten on 10/19/17.
 */

import React, {Component} from 'react'
import {
  Dialog,
} from "@blueprintjs/core"
import bikes1 from '../images/bikeShopPics/bikes1.JPG'

const footerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5,1fr)',
  gridGap: '0%',
  paddingTop:"0px",
  marginLeft:'5%',
  marginRight:'5%'
}

const blueBlk='#1A3256'

const fontStyle ={
  fontFamily:'Courier',
  fontVariant: 'small-caps',
  color: blueBlk
}

class Footer extends Component {
  state = {ownerIsOpen: false, hoursIsOpen: false, missionIsOpen: false}
  toggleOwnerDialog = () => this.setState({ ownerIsOpen: !this.state.ownerIsOpen })
  toggleMissionDialog = () => this.setState({ missionIsOpen: !this.state.missionIsOpen })

  renderOwnerPopUp(){
    return(
      <li>
        <button style={{...fontStyle}} className="pt-button pt-minimal" onClick={this.toggleOwnerDialog}>
          Local Owner
        </button>
        <Dialog
          isOpen={this.state.ownerIsOpen}
          onClose={this.toggleOwnerDialog}
          title="About Greg DerTorossian"
          style ={{...fontStyle, 'fontSize': '1em','width':'32vw', 'lineSpacing':'1em'}}
        >

          <div className="pt-dialog-body" style={{'width':'30vw','fontSize':'120%', 'marginLeft':'1vw'}}>
            <img src={bikes1} alt='' style={{'height':'30vh', 'width':'30vw'}}
            />
            <div style={{'fontSize':'1em', 'marginTop':'5%', ...fontStyle, 'lineSpacing':'1em'}}>
              <p>I have been passionate about biking since I was a child riding in the Saratoga hills.  Initially I rode a Schwinn Stingray, and then evolved to riding BMX bikes for fun. In my 30’s I discovered the joys of both mountain bike riding and road riding.</p>

              <p> My passion for mountain bikes lead my to co-coaching the Woodside Beasts, a high school mountain bike team.  I also enjoy racing various enduro series through out the West.  Perhaps the greatest joy for me has been the people I have meet through biking.  </p>
              <p> I am thrilled to share my passion with you through the Woodside Bike Shop.</p>
            </div>
          </div>
        </Dialog>
      </li>

    )
  }

  renderMission(){
    return(
      <li >
        <button style={{...fontStyle}} className="pt-button pt-minimal" onClick={this.toggleMissionDialog}>
          Mission
        </button>
        <Dialog
          isOpen={this.state.missionIsOpen}
          onClose={this.toggleMissionDialog}
          title="Woodside Bike Shop Mission"
          style ={{...fontStyle, 'width':'32vw'}}
        >
          <div className="pt-dialog-body" style={{'width':'30vw','fontSize':'1em', 'marginLeft':'1vw'}}>
            <img src={bikes1} alt='' style={{'height':'30vh', 'width':'30vw'}}
            />
            <div style={{'fontSize':'1em', 'marginTop':'5%'}}>
              <p>Our mission is to serve our local community with the best information, products and service.</p>
            </div>
          </div>
        </Dialog>
      </li>
    )
  }


  render() {
    //console.log('footer state', this.state)
    return (
      <div style={footerStyle}>
        <div>
        <ul style={{'gridColumn':'1/2', 'gridRow':'1', 'listStyle': 'none'}}>
          <strong style={{...fontStyle}} >About Us</strong>
          {this.renderOwnerPopUp()}
          {this.renderMission()}
        </ul>
        </div>
        <div style={{
          'gridColumn':'1/6',
          'gridRow':'2',
          'marginTop':'2%' ,
          'display':'flex',
          'justifyContent':'center'
        }}>
          <p style = {{}}>©2017 Merten Designs</p>
        </div>
      </div>
    )
  }
}

export default Footer


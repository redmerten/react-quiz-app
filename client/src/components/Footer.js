/**
 * Created by CameronMerten on 10/19/17.
 */

import React, {Component} from 'react'
import Media from 'react-media'

import {
  Dialog,
} from "@blueprintjs/core"

import bikes1 from '../images/bikeShopPics/bikes1.JPG'
import GREG1 from '../images/bikeShopPics/GREG1.jpg'
import GREG2 from '../images/bikeShopPics/GREG2.jpg'
import GREG3 from '../images/bikeShopPics/GREG3.jpg'

const blueBlk='#1A3256'

const fontStyle ={
  fontFamily:'Helvetica Neue, Helvetica, Arial, sans-serif',
  //fontVariant: 'small-caps',
  color: blueBlk
}

const styles={
  footerDiv: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0% 5% 5% 5%',
  },

  col1Style: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'flex-start',
    listStyle: 'none',
    marginBottom:'5%'
  },
  designedByDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'0%'
  },

  lgView:{
    aboutUsFont:{
      fontSize:'1.5em'
    },
    menuItemsFont:{
      fontSize:'1.5em'
    },
    dialog:{
      fontSize: '1em',
      width:'30%',
      lineSpacing:'1em'
    },
    insideDialogDiv:{
      width:'96%',
      fontSize:'120%',
      margin:'0% 2%'

    },
    img:{
      height:'250px',
      width:'100%'
    },
    pDiv:{
      width:'96%',
      fontSize:'1em',
      marginTop:'1%'
    },
    p:{
      lineHeight:'1.25',
      fontSize: '1.5em',
      margin: '2% 3% 2% 4%'
    }
  },

  smView:{
    aboutUsFont:{
      fontSize:'1em'
    },
    menuItemsFont:{
      fontSize:'1em'
    },
    dialog:{
      fontSize: '1em',
      width:'75%',
    },
    insideDialogDiv:{
      width:'96%',
      fontSize:'100%',
      margin:'0% 2%'

    },
    img:{
      height:'250px',
      width:'100%'
    },
    pDiv:{
      width:'96%',
      fontSize:'1em',
      marginTop:'1%'
    },
    p:{
      lineHeight:'1.25',
      fontSize: '1.25em',
      margin: '2% 3% 2% 4%'
    }

  }

}

class Footer extends Component {
  state = {ownerIsOpen: false, hoursIsOpen: false, missionIsOpen: false}
  toggleOwnerDialog = () => this.setState({ ownerIsOpen: !this.state.ownerIsOpen })
  toggleMissionDialog = () => this.setState({ missionIsOpen: !this.state.missionIsOpen })

  renderOwnerPopUp(style){
    return(
      <li>
        <button
          style={{
          ...fontStyle,
          ...style.menuItemsFont,
        }}
                className="pt-button pt-minimal" onClick={this.toggleOwnerDialog}>
          Local Owner
        </button>
        <Dialog
          isOpen={this.state.ownerIsOpen}
          onClose={this.toggleOwnerDialog}
          title="About Greg DerTorossian"
          style ={{...fontStyle, ...style.dialog}}
        >

          <div className="pt-dialog-body" style={style.insideDialogDiv}>
            <img src={GREG2} alt='' style={style.img}
            />
            <div style={{...style.pDiv, ...fontStyle}}>
              <p style={{...style.p, ...fontStyle}}>I have been passionate about biking since I was a child riding in the Saratoga hills.  Initially, I rode a Schwinn Stingray and then evolved to riding BMX bikes for fun. In my 30s, I discovered the joys of both mountain bike riding and road riding.</p>

              <p style={style.p}> My passion for mountain bikes led me to co-coaching the Woodside Beasts, a high school mountain bike team.  I also enjoy racing various enduro series throughout the West.  Perhaps the greatest joy for me has been the people I have met through biking.  </p>
              <p style={style.p}> I am thrilled to share my passion with you through the Woodside Bike Shop.</p>
            </div>
          </div>
        </Dialog>
      </li>

    )
  }

  renderMission(style){
    return(
      <li >
        <button style={{...fontStyle, ...style.menuItemsFont,}} className="pt-button pt-minimal" onClick={this.toggleMissionDialog}>
          Mission
        </button>
        <Dialog
          isOpen={this.state.missionIsOpen}
          onClose={this.toggleMissionDialog}
          title="Woodside Bike Shop Mission"
          style ={{...fontStyle, ...style.dialog}}
        >
          <div className="pt-dialog-body" style={style.insideDialogDiv}>
            <img src={GREG3} alt='' style={style.img}
            />
            <div style={style.pDiv}>
              <p style={style.p}>Our mission is to serve our local community with the best information, products and service.</p>
            </div>
          </div>
        </Dialog>
      </li>
    )
  }

  renderFooter=(style)=>{
    return(
      <div style={styles.footerDiv}>
        <div>
          <ul style={{
            ...styles.col1Style
          }}>
            <strong style={{...fontStyle, ...style.aboutUsFont}} >About Us</strong>
            {this.renderOwnerPopUp(style)}
            {this.renderMission(style)}
          </ul>
        </div>
        <div style={{
          ...styles.designedByDiv
        }}>
          <p style = {{}}>©2017 AM Market Strategies</p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div style={styles.footerDiv}>
        <Media query='(max-width: 812px)'>
          {matches => {
            console.log('matches', matches)
            return (
              matches ? (
                this.renderFooter(styles.smView)
              ) : (
                this.renderFooter(styles.lgView)
              )
            )
          }
          }
        </Media>
      </div>
    )
  }
}

export default Footer


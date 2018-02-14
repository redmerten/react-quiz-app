/**
 * Created by AndreaMerten on 1/27/18.
 */
import React, {Component} from "react"
//import CherryCreamSoda from 'typeface-cherry-cream-soda'
class Navbar extends Component{
  render(){
    return(
      <div style={styles.navbar}>
        <p style={styles.p}>React Interview Questions</p>

      </div>
    )
  }
}

export default Navbar

const styles={
  navbar:{
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '70px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#5d5799'
  },
  p:{
    fontSize: '200%',
    fontFamily: 'Cherry Cream Soda',
    color: '#dbd1d7'

  }
}
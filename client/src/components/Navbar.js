/**
 * Created by AndreaMerten on 1/27/18.
 */
import React, {Component} from "react"
import {Link} from 'react-router-dom'
import Button from './Button'

class Navbar extends Component{
  render(){
    return(
      <div style={styles.navbar}>
        <p style={styles.p}>React Examples</p>
        <Link to={`/` } >
          <Button
            label="Indivio API Example"
          />
        </Link>
        <Link to={`/usa` } >
          <Button
            label="USA Map"
          />
        </Link>
        <Link to={`/stocks` } >
          <Button
            label="Stock Charts"
          />
        </Link>
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
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:'#5d5799',

  },
  p:{
    fontSize: '200%',
    fontFamily: 'Helvetica',
    color: '#dbd1d7',
    marginTop:'.5%'
  }
}
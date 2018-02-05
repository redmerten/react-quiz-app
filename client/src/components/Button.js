/**
 * Created by AndreaMerten on 1/27/18.
 */
import React from 'react'
import Radium from 'radium';

const Button = ({style, onClick, children, label}) =>{
  return(
    <button
      style={{...style, ...styles.buttonStyle}}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Radium(Button)

const styles={
  buttonStyle:{
    fontSize: '120%',
    borderRadius:'2%',
    backgroundColor:'#b2aaaf',
    fontFamily: 'Helvetica',
    color: '#5d5799',
    height:'50px',
    width: '200px',
    border:'none',
    outline:'none',
    ':hover': {
      backgroundColor: '#a29ba0',

    },
  }
}
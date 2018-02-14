/**
 * Created by AndreaMerten on 1/27/18.
 */
import React from 'react'
import Radium from 'radium';

const Button = ({style, onClick, children, label, colors}) =>{
  const buttonColors={
    backgroundColor: colors.background,
    color: colors.color,
    ':hover': {
      backgroundColor: colors.hover
    },
  }
  return(
    <button
      style={{...buttonColors, ...style, ...styles.buttonStyle}}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Radium(Button)

const styles={
  buttonStyle:{
    borderRadius:'2%',
    fontFamily: 'Cherry Cream Soda',
    height:'50px',
    width: '200px',
    border:'none',
    outline:'none',
  }
}
/**
 * Created by AndreaMerten on 2/13/18.
 */
import React from 'react'
import Radium from 'radium';

const AnswerChoice =({onClick, answerOption, selected})=>{
  const backgroundColor = selected ?  '#5d5799': '#b2aaaf'
  return(
    <div style={styles.div}>
      <p style={styles.p}>{answerOption.a}</p>
      <button
        onClick={onClick}
        style={{'backgroundColor': backgroundColor , ...styles.button}}
      />
    </div>
  )
}

export default Radium(AnswerChoice)

const styles={
  div:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'80%',

  },
  button:{
    height:'20px',
    width:'20px',
    borderRadius:'50%',
    borderColor:'#5d5799',
    outline:'none',
    ':hover': {
      backgroundColor: '#858ca8'
    },

  },
  p:{
    fontFamily: 'Cherry Cream Soda',
    color: '#5d5799',
    margin: '0% 3% 2.5% 5%',
  }
}
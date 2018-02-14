/**
 * Created by AndreaMerten on 1/27/18.
 */
import React from 'react'

const IndexCard = (props)=>{
  return(
    <div style={styles.div}>
      {props.children}
    </div>
  )
}

export default IndexCard

const styles={
  div: {
    width: '70%',
    height: '70%',
    boxShadow: '10px 10px #b2aaaf',
    border: '1px solid #b2aaaf',
    backgroundColor: '#dbd1d7',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',

  }
}
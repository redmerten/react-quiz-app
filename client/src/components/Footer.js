/**
 * Created by CameronMerten on 10/19/17.
 */

import React, {Component} from 'react'

const Footer =() => {
  return(
    <div style={styles.footerDiv}>
      <p style={styles.p}>2018 AM Market Strategies</p>
    </div>
  )
}

export default Footer

const styles={
  footerDiv: {
    display: 'flex',
    marginTop: '5%',
    width: '100%',
    justifyContent:'center',
    borderTop: '2px solid black'
  },
  p:{
    marginTop:'5%'
  }
}
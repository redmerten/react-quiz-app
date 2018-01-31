/**
 * Created by CameronMerten on 10/1/17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchFromAPI_1, fetchFromAPI_2, fetchFromAPI_3} from '../actions/index'
import Button from './Button'

class Landing extends Component {

    state={
      fetched3:false
    }

  //check to see if data arrived from apis 1 and 2
  componentDidUpdate(){
      if (this.state.fetched3===false) {
        if (Array.isArray(this.props.dataApiTwo) && Array.isArray(this.props.dataApiOne)) {
          console.log(true)
          this.props.fetchFromAPI_3(this.props.dataApiOne[0].id)
          this.setState({fetched3: true})
        }
      }
     else console.log(false)
   }

  getOneAndTwo=()=>{
    this.props.fetchFromAPI_1()
    this.props.fetchFromAPI_2()
  }

  render(){
    console.log('state from landing', this.props)
    return (
      <div style={styles.div}>
        <Button
          onClick={()=>this.getOneAndTwo()}
          label='Publish'
          style={styles.buttonStyle}
        />
        {Array.isArray(this.props.dataApiOne)
          ?
            <div>
              <p>API 1: Returned an id of {this.props.dataApiOne[0].id} </p>
            </div>
          :
            <div/>
          }

        {Array.isArray(this.props.dataApiTwo)
          ?
          <div>
            <p>From API 2: Indivio's CEO is {this.props.dataApiTwo[0].ceo} </p>
            <p>From API 2: Indivio's CTO is {this.props.dataApiTwo[0].cto} </p>
          </div>
          :
          <div/>
        }

        {Array.isArray(this.props.dataApiTwo) && Array.isArray(this.props.dataApiOne)
          ?
          <div style={{'marginTop':'2%'}}>
            <p>Now fetching data from api 3 </p>
          </div>
          :
          <div/>
        }

        {Array.isArray(this.props.dataApiThree)
          ?
          <div style={{'marginTop':'2%'}}>
            <p>I now have the data from API 3 based on the id from API 1</p>
            <p>From API 3: Id is {this.props.dataApiThree[0].id} </p>
            <p>From API 3: Fun Factor is {this.props.dataApiThree[0].num} </p>
          </div>
          :
          <div/>
        }
      </div>
    )}
}

const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps, {fetchFromAPI_1, fetchFromAPI_2, fetchFromAPI_3})(Landing)

const styles={
  div:{
    paddingTop:'100px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  heading:{
    margin:'5% 0%',
  },
  buttonStyle:{
    margin:'2%',
    fontSize:'200%'
  }
}
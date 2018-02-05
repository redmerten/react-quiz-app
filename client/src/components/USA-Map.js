/**
 * Created by AndreaMerten on 1/31/18.
 */

import React, { Component } from 'react';
import USAMap from "react-usa-map";

class USA extends Component {
 /* mandatory */
  mapHandler = (event) => {
    //alert(event.target.dataset.name);
    console.log(event.target.dataset)
  };

  statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };

  render() {
    return (
      <div className="App" style={styles.div}>
       <USAMap
         onClick={(event)=>this.mapHandler(event)}
         customize={this.statesCustomConfig()}
       />
      </div>
    );
  }
}

export default USA;


const styles={
  div:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:'60px',
    margin:'5%'
  }
}
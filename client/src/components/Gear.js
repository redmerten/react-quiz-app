/**
 * Created by AndreaMerten on 12/13/17.
 */
import React from 'react'
import gear1 from '../images/bikeShopPics/sqgear1.JPG'
import gear2 from '../images/bikeShopPics/sqgear2.JPG'
import gear3 from '../images/bikeShopPics/sqgear3.JPG'
import gear4 from '../images/bikeShopPics/sqgear4.JPG'

const gearStyle={
  display:'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '10px',
  margin:'0px 50px 0px 100px'
}

const paragraphStyle={
  margin:'0px 50px 20px 100px',
  fontSize:'1.5em'
}

const Gear=()=>{
  return(
    <div style={{'paddingTop':'80px',}}>
      <div style={paragraphStyle}>
        <p>Woodside Bike Shop carries an extensive array of gear.</p>
        <p style={{'marginBottom':'40px'}}>If it exists, we have it, or we can get for you in no time.</p>
      </div>
      <div style={gearStyle}>
        <img src={gear1} alt="" style={{'gridColumn':'1/2', 'maxWidth':'400px'}}/>
        <img src={gear2} alt="" style={{'gridColumn':'2/3', 'maxWidth':'400px'}}/>
        <img src={gear4} alt="" style={{'gridColumn':'3/4', 'maxWidth':'400px'}}/>
      </div>
    </div>
  )
}

export default Gear
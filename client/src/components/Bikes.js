/**
 * Created by AndreaMerten on 12/28/17.
 */
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import bmx from '../images/typesOfBikes/bmx-bike.png'
import cityCruiser from '../images/typesOfBikes/city-cruiser.png'
import electric from '../images/typesOfBikes/electric-bike.png'
import fixie from '../images/typesOfBikes/fixie.png'
import mountain from '../images/typesOfBikes/mountain-yeti.png'
import road from '../images/typesOfBikes/road-davinci.png'
import kids from '../images/typesOfBikes/kids2.png'
import fat from '../images/typesOfBikes/fatbike.png'


const viewStyle = {
  height:'80vh',
  width:'100vw',
  display:'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  //gridGap:'5%'
}

const lightBlue='#52A0F5'
const orange = '#BB6558'
const darkBlue = '#0073C4'
const blueBlk='#1A3256'

const fontStyle ={
  fontFamily:'Courier',
  fontVariant: 'small-caps',
  color: blueBlk
}



const Bikes = ()=>{
  const bikepics=[mountain, bmx, cityCruiser, road, electric,  kids, fat, fixie]
  const biketypes =['Mountain', 'BMX', 'Cruisers', 'Road',  'Electric', 'Kids', 'Fat Bikes', 'Fixies']
  return(
    <div style={{...viewStyle,'backgroundColor': orange}}>
      <div style={{
        'gridColumn':'1/5',
        'justifySelf':'center',
        'height':'15vh'
      }}>
        <p style={{...fontStyle,'fontSize':'2.5em', 'color': blueBlk, 'marginTop':'2%'}}>
          We have bikes for every purpose and budget
        </p>
      </div>
      <div
        style={{
          'gridColumn':'1/5',
          'height':'65vh'

        }}>
          <div style={{
            'display':'flex',
            'flexDirection':'row',
            'flexWrap':'wrap',
            'justifyContent':'space-evenly'
          }}
          >
          {bikepics.map((p,i)=>{
            return(
              <div key={i}
                   style={{
                     'display':'flex',
                     'flexDirection':'column',
                     'justifyContent':'center',
                     'alignItems':'center',
                     'width':'23vw',
                     'marginBottom':'2%'
                   }}>
                <ScrollAnimation animateIn='swing' initiallyVisible={true}>
                  <img src={p} alt=""
                       style={{
                         'borderRadius':'50%',
                         'maxHeight':'22vh',
                         'maxWidth':'22vw',
                         'marginTop':'2%'
                       }}
                  />
                </ScrollAnimation>
                <p style={{
                  'marginTop':'2%',
                  ...fontStyle,
                  'fontSize': '1.5em'
                }}
                >
                  {biketypes[i]}
                </p>
              </div>
            )
          })}
          </div>
        </div>
    </div>
  )
}

export default Bikes
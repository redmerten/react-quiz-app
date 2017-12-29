/**
 * Created by AndreaMerten on 12/26/17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchBlog, fetchSelectedBlog} from '../actions/index'

const flexStyle={
  display:'flex'
}

const gridStyle={
  display:'grid',

}

const fontStyle ={
  fontFamily:'Courier',
  fontVariant: 'small-caps',
}


const lightBlue='#52A0F5'
const orange = '#BB6558'
const darkBlue = '#0073C4'
const blueBlack='#031E39'
const blueBlk='#1A3256'

const buttonStyle ={
  backgroundColor: orange, /* Green */
  border: 'none',
  color: blueBlk,
  padding: '2% 5%',
  textAlign: 'center',
  textDecoration: 'none',
  //display: inline-block,
  fontSize: '2em'

}

class LatestNews extends Component{

  componentDidMount(){
    this.props.fetchBlog()
    console.log('latest news',this.props)
  }


  renderBlog=()=> {
    if (this.props.blog.map) {
      const blogs = this.props.blog.slice(0,3)

      return(
        <div style={{...flexStyle,
          'justifyContent':'space-between',
          //'alignItems':'flex-start',
          //'maxHeight':'90vh',
          'margin':'0% 5% 0% 5%'}}
        >
          {blogs.map((b)=>{
            return(
              <div
                key={b.id}
                style={{'display':'flex', 'flexDirection':'column', 'justifyContent':'space-between', 'width': '25vw', 'marginBottom':'5vh'}}
              >
                <img
                  src={b.thumbnail.link} alt=""
                  style={{'width':'25vw', 'height':'25vh'}}>
                </img>
                <h3 style={{'marginTop':'2%', 'lineHeight':'150%'}}>
                  {b.title}
                </h3>

                <p style={{'fontSize':'1.5em', 'marginTop':'3%'}}>
                  {b.content.length > 150 ? b.content.slice(0,150) : b.content}
                </p>
                <Link
                  to={`/detail/${b.id}`}
                  //style={{"alignSelf":'flex-end'}}

                >
                  <button
                    style={{...buttonStyle, ...fontStyle}}
                    // onClick = {this.props.setBlogSelected(b.id)}
                  >Read More</button>
                </Link>
              </div>
            )
          })}
        </div>
      )
    }
    else return <div/>
  }


  render(){
    return(
      < div style={{'height':'80vh', 'width':'100vw','backgroundColor':lightBlue, ...gridStyle}}>

          <div style={{
            'display':'flex',
            'justifyContent':'center',
            'alignItems':'center',
            //'height':'10vh'
          }}>
            <p style={{...fontStyle, 'fontSize':'3em', 'color': blueBlk, 'marginTop':'0%'}}>
              Latest News
            </p>
          </div>

        {this.renderBlog()}
      </div>
    )
  }
}


const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps, {fetchBlog, fetchSelectedBlog})(LatestNews)
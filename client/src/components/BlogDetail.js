/**
 * Created by AndreaMerten on 12/26/17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { browserHistory } from 'react-router'
import Media from 'react-media'

const lightBlue='#52A0F5'
const orange = '#BB6558'
const darkBlue = '#0073C4'
const blueBlk='#1A3256'

class BlogDetail extends Component{

  state ={
    blog: null
  }

  componentDidMount(){
    const selectedBlog = this.props.blog.filter ?
      this.props.blog.filter(b=>b.id===this.props.match.params.blogid)[0] :
      null
    this.setState({blog: selectedBlog})
  }

  renderBlogDetail=(style)=>{
    console.log('props', this.props.blog)
    console.log('state', this.state.blog)
    if (this.state.blog !== null) {
      const {blog}= this.state
      console.log(blog.title)
      return (
        <div style={style.mainDiv}>
          <h2>{blog.title}</h2>
          <img style={style.img} src={blog.thumbnail.link} alt=""/>
          <p style={style.content}>{blog.content}</p>

        </div>
      )
      // if (blog.thumbnail.link){
      //   console.log(blog.thumbnail)
      //   return (
      //     <div style={{'paddingTop':'80px'}}>
      //       <img src={blog.thumbnail.link} alt=""/>
      //       <h2></h2>
      //       <p></p>
      //     </div>
      //   )
      // }
      // else {
      //   console.log('nothing')
      //   return <div></div>
      // }

    }
    else {
      console.log('no bloglist')
      return <div style={{'padding':'80px'}}>Blog ID does not exist.</div>
    }
  }

  render() {
    return(
      <div style={{}}>
        <Media query= '(max-width: 812px)'>
          {matches => {
            console.log('matches', matches)
            return(
              matches ? (
                this.renderBlogDetail(styles.smlScreen)
              ):(
                this.renderBlogDetail(styles.lgScreen)
              )
            )
          }
          }
        </Media>

      </div>

    )
  }

}

const styles={
  lgScreen:{
    mainDiv:{
      paddingTop: '80px',
      margin: '2% 20%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      borderColor:'light grey',

    },
    img:{
      margin:'2% 0%'
    },
    content:{
      margin:'1% 0%',
      fontFamily:'Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize:'135%',
      lineHeight:'175%'

    },

  },
  smlScreen:{
    mainDiv:{
      paddingTop: '80px',
      //width:'80%',
      margin: '2% 10%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      //border:'solid grey',
      webkitFlexBasis:'80%'

    },
    img:{
      margin:'2% 2%',
      maxWidth:'100%'
    },
    content:{
      margin:'1% 0%',
      fontFamily:'Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize:'135%',
      lineHeight:'175%'

    },
  }
}

const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps)(BlogDetail)
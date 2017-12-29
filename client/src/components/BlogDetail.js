/**
 * Created by AndreaMerten on 12/26/17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { browserHistory } from 'react-router'

class BlogDetail extends Component{
//create action on button click in latestNews to add current blog to state
// go fetch blog so anyone going to link cant fail
  //component did mount
  //fetch blogdetail
  state ={
    blog: null
  }



  componentDidMount(){
    const selectedBlog = this.props.blog.filter ?
      this.props.blog.filter(b=>b.id===this.props.match.params.blogid)[0] :
      null
    this.setState({blog: selectedBlog})
  }

  render() {

    console.log('props', this.props.blog)
    console.log('state', this.state.blog)
    if (this.state.blog !== null) {
      const {blog}= this.state
      console.log(blog.title)
      return (
        <div style={{'paddingTop': '80px'}}>
          <img src={blog.thumbnail.link} alt=""/>
          <h1>{blog.title}</h1>

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

}

const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps)(BlogDetail)
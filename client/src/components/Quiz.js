/**
 * Created by AndreaMerten on 1/22/18.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import IndexCard from './IndexCard'
import Button from './Button'
import AnswerChoice from './AnswerChoice'

import {fetchQuiz} from '../actions/index'
import {submitQuiz} from '../actions/index'


class Quiz extends Component{
  state={
    qIndex:0, //which question is displayed
    selectedAnswers:[],
    randomizedStart: false, //only randomize once
    showScore:false
  }

  //fetch quiz from server
  componentDidMount(){
    this.props.fetchQuiz()
  }

  //with quiz, creates an array of answers set to false and randomizes questions
  //for initial presentation
  componentDidUpdate(){
    if (!this.state.randomizedStart){
      this.randomizeIndex()
      let selection = []
      this.props.quiz.forEach(e => {
        let s = []
        e.a.forEach(a =>
          s.push(false)
        )
        selection.push(s)
      })
      this.setState({selectedAnswers: selection, randomizedStart: true})
    }
  }

  //send to next question on click
  next=()=>{
    let i
    if (this.state.qIndex === this.props.quiz.length-1)
      i = 0
    else
      i = this.state.qIndex+1
    this.setState({qIndex:i})
  }

  //send to previous question on click
  previous=()=>{
    let i
    if (this.state.qIndex === 0)
      i = this.props.quiz.length-1
    else
      i = this.state.qIndex-1
    this.setState({qIndex:i})
  }

  //handler for submit button. Can't submit until all are answered
  //calculates score and sends answers and score to server
  submitQuiz=()=>{
    //check if all are answered
    let answers = this.state.selectedAnswers.map(e=>e.findIndex(a => a === true))
    if (answers.includes(-1))
      alert('Please answer every question')
    else {
      const score = answers.reduce((acc, e, i) => acc + this.props.quiz[i].a[e].points)
      const final = {answers, score}
      //this is the submit action creator
      this.props.submitQuiz(final)
      this.setState({showScore:true})
    }
  }

  //randomizes the start questions
  randomizeIndex=()=>{
    this.setState({qIndex: Math.floor(Math.random() * this.props.quiz.length) })
  }

  //handles the question choice on click
  //toggles selection
  //if choice, deselects others
  selectOption=(i)=>{
    let arr=this.state.selectedAnswers.slice()  //deepcopy
    const next = !this.state.selectedAnswers[this.state.qIndex][i]
    arr[this.state.qIndex].forEach((e,i)=>{
      if (e) arr[this.state.qIndex][i]=false
    })
    arr[this.state.qIndex][i]=next
    this.setState({selectedAnswers:arr})
  }


  render() {
    //either show questions or score
    if (this.state.showScore) { //show score
      if (Array.isArray(this.props.final)) {
       // console.log('render final', this.props.final)
        return (
          <div style={styles.landingdiv}>
            <IndexCard >
              <p style={styles.p}>Final Score: {this.props.final[0].score}</p>
            </IndexCard>
          </div>
        )
      }
      else return <div/>
    }
    else { //show questions
      if (this.state.randomizedStart) { //keep from rendering question before randomizing
        const {quiz} = this.props,
          index = this.state.qIndex
        //console.log('answers', quiz[index].a)
        return (
          <div style={styles.landingdiv}>
            <IndexCard >
              <div style={styles.qaDiv}>
                <p style={{...styles.p}}>
                  {quiz[index].q}
                </p>
                <div style={styles.answerDiv}>
                  {quiz[index].a.map((ans, i) => {
                    return (
                      <AnswerChoice
                        key={i}
                        onClick={() => this.selectOption(i)}
                        answerOption={ans}
                        //colors={{background: '#b2aaaf', border: '#5d5799'}}
                        selected={this.state.selectedAnswers[index][i]}
                      />
                    )
                  })}
                </div>
              </div>
              <Button
                onClick={() => this.next()}
                label="Next"
                style={styles.nextButton}
                colors={{color: '#5d5799', background: '#b2aaaf', hover: '#a29ba0'}}
              />

              <Button
                onClick={() => this.submitQuiz()}
                label="Submit Quiz"
                style={styles.buttonStyle}
                colors={{color: '#b2aaaf', background: '#5d5799', hover: '#700248'}}
              />

              <Button
                onClick={() => this.previous()}
                label="Previous"
                style={styles.backButton}
                colors={{color: '#5d5799', background: '#b2aaaf', hover: '#a29ba0'}}
              />
            </IndexCard>


          </div>
        )
      }
      else
        return <div/>
    }
  }
}

//const Component = Radium(Quiz);
const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps, {fetchQuiz, submitQuiz})(Quiz)


const styles={
  landingdiv:{
    backgroundColor:'#968eb1',
    paddingTop:'70px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100vh'
  },
  qaDiv:{
    marginBottom:'5%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  },
  p:{
    fontSize: '200%',
    fontFamily: 'Cherry Cream Soda',
    color: '#5d5799',
    margin: '0% 3% 2.5% 5%',

  },

  buttonStyle:{
    position:'absolute',
    bottom:'10%',

  },
  nextButton:{
    position:'absolute',
    bottom:'10%',
    right:'20%'
  },
  backButton:{
    position:'absolute',
    bottom:'10%',
    left:'20%'
  },
  answerDiv:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width: '80%'
  },

}


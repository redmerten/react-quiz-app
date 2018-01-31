/**
 * Created by AndreaMerten on 1/30/18.
 */

const apiOne=require('../apiData/apiOneData.js')
const apiTwo=require('../apiData/apiTwoData.js')
const apiThree=require('../apiData/apiThreeData.js')

module.exports = (app) => {
  app.get('/api/one',  (req,res) =>{
      res.send(apiOne)
    })

  app.get('/api/two',  (req,res) =>{
    res.send(apiTwo)
  })

  app.get('/api/three',  (req,res) =>{
    const id = parseInt(req.query.id)
    const response = apiThree.filter(e=>{
      return e.id===id
    })
    console.log(response)
    res.send(response)
  })
}


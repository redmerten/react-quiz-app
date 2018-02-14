/**
 * Created by AndreaMerten on 1/30/18.
 */

//const axios = require("axios");
//const fetch = require("node-fetch")

const quiz=require('../apiData/quizQuestions.js')

module.exports = (app) => {

  app.get('/assessment',  (req,res) =>{
    if (req.query.final) {
      const final = JSON.parse(req.query.final)
      console.log(final)
      res.send([final])
    }
    else
      res.send(quiz)
    })
}

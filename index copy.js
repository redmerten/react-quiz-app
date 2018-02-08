//Set up for eventual online shopping

const express = require('express')

//const mongoose = require('mongoose')
//const cookieSession = require('cookie-session')
//const passport = require('passport')
//const keys = require('./config/keys')

//let mongoose know about schema. User must be listed before passport below

// require('./services/passport')
// const authRoutes = require('./routes/authRoutes') //import authRoutes function
//
// mongoose.Promise = global.Promise
// mongoose.connect(keys.mongoURI)


//app sets up config to listen for routing requests
const app = express()

//wireup middleware
//cookieSession grabs cookie data; passport pulls id from cookie data
// app.use(
//   cookieSession({
//     maxAge: 30*24*60*60*1000,//how long cookie can exist inside browser in ms
//     keys: [keys.cookieKey]
//   })
// )
//
// app.use(passport.initialize())
// app.use(passport.session())

//app object is the running express server
//app.get creates a route handler
//watch for a request from root route (localhost:5000/)
//req comes from the visit to '/'
//then response is sent

//call authRoutes function
//authRoutes(app)
//require('./routes/authRoutes')(app)
require('./routes/apiRoutes')(app)

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))

  const path = require('path')
  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


//heroku will pass runtime variables, if dev use 5000
const PORT = process.env.PORT || 5000
//express tells node to listen on port 5000
app.listen(PORT)




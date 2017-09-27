const express = require('express')

//this creates a new express app.  There can be many apps in a project.
//but most only use one.
//app sets up config to listen for routing requests
const app = express()

//app object is the running express server
//app.get creates a route handler
//watch for a request from root route (localhost:5000/)
//req comes from the visit to '/'
//then response is sent
app.get('/', (req, res) => {
    res.send({ hi: 'there' })
})

//heroku will pass runtime variables, if dev use 5000
const PORT = process.env.PORT || 5000
//express tells node to listen on port 5000
app.listen(PORT)

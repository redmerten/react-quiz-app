//Set up for eventual online shopping

const express = require('express')
const app = express();

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
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))




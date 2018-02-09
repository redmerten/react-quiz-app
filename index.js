//Set up for eventual online shopping

const express = require('express')
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
//const socket = require("./routes/socket");
const app = express();
//app.use(socket);
const server = http.createServer(app);
const io = socketIo(server);

require('./routes/apiRoutes')(app)

let interval;
io.on("connection", socket => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 10000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const googleStocks = require('google-stocks'); //current prices

const getApiAndEmit = socket => {
  try {
    googleStocks(['DATA'])
      .then (data=>{
        const {symbol, t, name, c, l, cp, op, hi, lo, vo, avvo, hi52, lo52} = data[0]
        let stockData = [{
          symbol, t, name, c, l, cp, op, hi, lo, vo, avvo, hi52, lo52
        }]
        socket.emit("FromAPI", stockData)
      })
  } catch (error) {
      console.error(`Error: ${error.code}`);
  }
};


if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))

  const path = require('path')
  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// const router = express.Router();
// if (process.env.NODE_ENV === 'production'){
//   server.use(express.static('client/build'))
//   const path = require('path')
//   server.get('*', (req, res)=>{
//     io.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   })
// }


//heroku will pass runtime variables, if dev use 5000
const PORT = process.env.PORT || 5000
const socketPORT = process.env.PORT || 4001
//express tells node to listen on port 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
server.listen(socketPORT, () => console.log(`Listening on port ${socketPORT}`))




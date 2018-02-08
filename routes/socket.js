/**
 * Created by AndreaMerten on 2/7/18.
 */
const express = require("express");
const socketIo = require("socket.io");


const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

module.exports = router;


// const router = express.Router();
//
// router.get("/", (req, res) => {
//   res.send({ response: "I am alive" }).status(200);
// });
//
// module.exports = router;
/**
 * Created by CameronMerten on 10/4/17.
 */

//require this file into index.js

const mongoose = require('mongoose')
const {Schema} = mongoose // mongoose.Schema

//add user profile items here
const userSchema = new Schema ({
  googleId: String,
  facebookId: String,
  name: { familyName: String, givenName: String },
  email: String

})


//tell mongoose to create a new collection called users
mongoose.model('users', userSchema)
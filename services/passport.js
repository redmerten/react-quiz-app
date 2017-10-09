/**
 * Created by CameronMerten on 10/3/17.
 */

//passport is middleware between google and mongoose

const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy //only use strategy
const mongoose = require('mongoose')
//const FacebookStrategy = require('passport-facebook')//not sure which objs/functions are needed yet
const keys = require('../config/keys')

//one arg here means fetch from db; 2 would mean save to
const User = mongoose.model('users')


//user here is user from database
passport.serializeUser((user, done)=>{
  //this is not the profile id, it is the mongo assigned _id in the record
  //every user will have this but not all logged in w/google
  done(null, user.id)
})


passport.deserializeUser((id, done)=>{
  User.findById(id)
    .then(user =>{
      done(null, user)
    })
})

//in google developers portal we set up return route from google
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
     //done is calledback when done
     (accessToken, refreshToken, profile, done) => {
       //console.log('access token', accessToken)
       //console.log('refresh', refreshToken)
       //console.log('profile', profile)
       //console.log('email from profile obj', profile.emails[0].value)
       //not sure why I cant just put email: profile.emails[0].value below but it crashes
       let email= profile.emails[0].value
       //check to see if user already exists; returns promise
       User.findOne({googleId:profile.id})
         .then((existingUser)=>{
          if (existingUser){
            //null because no error if there is an existing user
            done(null, existingUser)
          }
          else{
            new User({
              googleId: profile.id,
              name: { familyName: profile.name.familyName, givenName: profile.name.givenName },
              email: email
            }).save()
              .then(user => done(null, user))
          }
         })
    }
  )
);
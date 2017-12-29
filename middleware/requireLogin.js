/**
 * Created by CameronMerten on 10/12/17.
 */


//this will export a middleware function takes incoming request and modifies in the function
//next called when finished
//wire this up not to index.js b/c only api/stripe route needs
module.exports = (req, res, next) =>{
  if (!req.user){
    //401 means unauthorized
    return res.status(401).send({error: 'Please Sign In!'})
  }
  next()
}
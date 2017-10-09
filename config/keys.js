/**
 * Created by CameronMerten on 10/3/17.
 */

//heroku vs local paths
if (process.env.NODE_ENV === 'production'){
  module.exports = require('./prod')
}
else{
  //require in and then immediately export
  module.exports = require('./dev')
}
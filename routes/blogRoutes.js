/**
 * Created by AndreaMerten on 12/9/17.
 */


const wordpress = require('wordpress')
const keys = require('../config/keys')

const client = wordpress.createClient({
  url: keys.wordpressUrl,
  username: keys.WordPressUsername,
  password: keys.WordPressPassword
})

module.exports = (app) => {
  app.get('/api/blog', async (req,res) =>{
    //const blog =
    await client.getPosts((err, posts)=>{
      //console.log('blogRoutes', posts)
      res.send(posts)
    })
  })

  // app.get('/api/blogSelected', async (req,res) =>{
  //   await client.getPosts(req.id, (err, posts)=>{
  //     //console.log('blogRoutes', posts)
  //     res.send(posts)
  //   })
  // })

}
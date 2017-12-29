/**
 * Created by CameronMerten on 10/12/17.
 */

const mongoose = require('mongoose')
const Cart = mongoose.model('carts')
const Product = mongoose.model('products')
const requireLogin = require('../middleware/requireLogin')

module.exports = (app) => {
  //current user is avail on the req obj as req.user
  app.get('/api/carts', requireLogin, async (req,res) =>{
    const userCart = await Cart.find({_user: req.user.id})
    //to include/exclude a property query.select('a -b c -d') neg for exclude.  Or ({a:1, b:0}) also works
    //.select({???})
    //send response back to requester
    //console.log('userCart cartRoute', userCart)
    //probably want to find product details and assign all to an obj and return the obj

    res.send(userCart)
  })
/*
  app.get('/api/product', async (req,res)=>{
    const productDetails = await Product.find({})
  })
  */

}
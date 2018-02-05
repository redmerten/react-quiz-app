/**
 * Created by AndreaMerten on 1/30/18.
 */

const apiOne=require('../apiData/apiOneData.js')
const apiTwo=require('../apiData/apiTwoData.js')
const apiThree=require('../apiData/apiThreeData.js')
const googleFinance = require( 'google-finance'); //historical
const googleStocks = require('google-stocks'); //current prices

const stock=
  {
    symbol: 'DATA',
    exchange: 'NYSE',
    t: 'DATA',
    name: 'Tableau Software Inc',
    c: '+8.23', //change from prev close
    l: '85.32', //current list
    cp: '10.68', //change percent?
    ccol: 'chg',
    op: '86.11', //open price
    hi: '87.00',
    lo: '81.12',
    vo: '4.38M',
    avvo: '653,486.00',
    hi52: '87.00',
    lo52: '47.30',
  }



module.exports = (app) => {
  app.get('/api/one',  (req,res) =>{
      res.send(apiOne)
    })

  app.get('/api/two',  (req,res) =>{
    res.send(apiTwo)
  })


  app.get('/api/three',  (req,res) =>{
    const id = parseInt(req.query.id)
    const response = apiThree.filter(e=>{
      return e.id===id
    })
    //console.log(response)
    res.send(response)
  })


  app.get('/api/news', (req,res) => {
    //console.log('api/news')
    const stocks = req.query.stock
    //const data={}
    googleFinance.companyNews({
      symbol: stocks
    })
      .then(function (news, err) {
        if (err) console.log(err)//data.news=err
        else {
          //data.news = news
          res.send(news)
          //console.log('news', news)
        }

        //res.send(data)
      })
  })

  app.get('/api/historical', (req,res) =>{
    //console.log('historical api')
    const {stock, from, to} = req.query
    //console.log(from)
    googleFinance.historical({
      symbol: stock,
      from: from,   //'2014-1-1',
      to: to   //'2014-1-31'
    })
      .then (function (quotes, err) {
        if (err) console.log('error',err)
        else{
          res.send(quotes)
        }
        //console.log ('historical', data)
    })
  })


  app.get('/api/current',  (req,res) => {
    //console.log('current api')
    const stocks = req.query.stocks
    //console.log(stocks)
    googleStocks(stocks)
      .then(function(data) {
        //console.log('symbol', data[0].symbol)
        const {symbol, t, name, c, l, cp, op, hi, lo, vo, avvo, hi52, lo52} = data[0]
        let stockData = [{
          symbol,
          t,
          name,
          c,
          l,
          cp,
          op,
          hi,
          lo,
          vo,
          avvo,
          hi52,
          lo52
        }]
        res.send(stockData)
      })
      .catch(function(error) {
        console.log(error)
      })
  })

}

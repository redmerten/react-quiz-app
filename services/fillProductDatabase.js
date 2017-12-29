/**
 * Created by CameronMerten on 10/11/17.
 */
const mongoose = require('mongoose')
const fs = require('fs')


//one arg here means fetch from db; 2 would mean save to
const Product = mongoose.model('products')
const Image = mongoose.model('image')

module.exports = () =>{
  new Product({
    title: '500 thread count sateen sheet set',
    id: 12346,
    description: 'Sink into dreamland with a luxe sheet set in smooth, lustrous organic-cotton sateen that includes flat and fitted sheets, along with two pillowcases.',
    type: 'Sheets',
    subtype: '',
    image1:new Image(
      {data: fs.readFileSync('./images/sheet1.png'),
      contentType: 'image/png'
      }),
    image2:new Image(
    {data: fs.readFileSync('./images/sheet2.png'),
      contentType: 'image/png'
    }),
    collectiontype:'String',
    season: 'All',
    holiday:'',
    addedDate: new Date(),
    price: [89, 99, 119, 129],
    options: {size:['twin', 'full', 'queen', 'king', 'cal king'], color:['white', 'blue']},
    tags: ['']
  }).save()

  new Product({
    title: '500 thread count sateen sheet set',
    id: 12347,
    description: 'Sink into dreamland with a luxe sheet set in smooth, lustrous organic-cotton sateen that includes flat and fitted sheets, along with two pillowcases.',
    type: 'Sheets',
    subtype: '',
    image1:new Image(
      {data: fs.readFileSync('./images/sheet1.png'),
        contentType: 'image/png'
      }),
    image2:new Image(
      {data: fs.readFileSync('./images/sheet2.png'),
        contentType: 'image/png'
      }),
    collectiontype:'String',
    season: 'All',
    holiday:'',
    addedDate: new Date(),
    price: [89, 99, 119, 129],
    options: {size:['twin', 'full', 'queen', 'king', 'cal king'], color:['white', 'blue']},
    tags: ['']
  }).save()

  new Product({
    title: '500 thread count sateen sheet set',
    id: 12348,
    description: 'Sink into dreamland with a luxe sheet set in smooth, lustrous organic-cotton sateen that includes flat and fitted sheets, along with two pillowcases.',
    type: 'Sheets',
    subtype: '',
    image1:new Image(
      {data: fs.readFileSync('./images/sheet1.png'),
        contentType: 'image/png'
      }),
    image2:new Image(
      {data: fs.readFileSync('./images/sheet2.png'),
        contentType: 'image/png'
      }),
    collectiontype:'String',
    season: 'All',
    holiday:'',
    addedDate: new Date(),
    price: [89, 99, 119, 129],
    options: {size:['twin', 'full', 'queen', 'king', 'cal king'], color:['white', 'blue']},
    tags: ['']
  }).save()
}



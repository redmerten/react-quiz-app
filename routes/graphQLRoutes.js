/**
 * Created by AndreaMerten on 2/9/18.
 */
const apiOne=require('../apiData/apiOneData.js')


const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat
 } = require('graphql')

const one = new GraphQLObjectType({
  name:'data',
  fields:{
    title:{
      type: GraphQLString
    },
    id:{
      type: GraphQLInt
    }
  }
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      apiOne: {
        type: new GraphQLList(one),
        resolve: () => apiOne
      },
      one: {
        type: one,
        args: {
          id:{
            type:GraphQLInt
          }
        },
        resolve:(r, {id})=>(r.id===id)
      }
    }
  })
})



var test = require('tape')
var freeze = require('deep-freeze')

var reducer = require('../reducer')

test("Base test", (t) => {
  t.ok(true)
  t.end()
})

test("The reducer can increment rating of food", (t) => {
  var initialState = {
    foods: [
      {id: 0, name: 'Shapes', flavour: 'Cheese and Bacon', rating: 0},
      {id: 1, name: 'Shapes', flavour: 'Pizza', rating: 0},
      {id: 2, name: 'Iced Animals Biscuits', flavour: 'various', rating: 4},
      {id: 3, name: 'Fairy Bread', flavour: 'sugar', rating: -50},
    ]
  }
  var expected = {
    foods: [
      {id: 0, name: 'Shapes', flavour: 'Cheese and Bacon', rating: 1},
      {id: 1, name: 'Shapes', flavour: 'Pizza', rating: 0},
      {id: 2, name: 'Iced Animals Biscuits', flavour: 'various', rating: 4},
      {id: 3, name: 'Fairy Bread', flavour: 'sugar', rating: -50},
    ]
  }
  var actual = reducer(initialState, {type: 'INCREMENT_RATING', payload: 0 })
  t.deepEqual(actual, expected)
  t.end()
})

test("The reducer can decrement rating of food", (t) => {
  var initialState = {
    foods: [
      {id: 0, name: 'Shapes', flavour: 'Cheese and Bacon', rating: 0},
      {id: 1, name: 'Shapes', flavour: 'Pizza', rating: 0},
      {id: 2, name: 'Iced Animals Biscuits', flavour: 'various', rating: 4},
      {id: 3, name: 'Fairy Bread', flavour: 'sugar', rating: -50},
    ]
  }
  var expected = {
    foods: [
      {id: 0, name: 'Shapes', flavour: 'Cheese and Bacon', rating: 0},
      {id: 1, name: 'Shapes', flavour: 'Pizza', rating: 0},
      {id: 2, name: 'Iced Animals Biscuits', flavour: 'various', rating: 3},
      {id: 3, name: 'Fairy Bread', flavour: 'sugar', rating: -50},
    ]
  }
  var actual = reducer(initialState, {type: 'DECREMENT_RATING', payload: 2 })
  t.deepEqual(actual, expected)
  t.end()
})

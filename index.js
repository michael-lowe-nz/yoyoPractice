const html = require('yo-yo')
const redux = require('redux')
const morphdom = require('morphdom')

const reducer = require('./reducer')
const Foods = require('./views/Foods')

var main = document.querySelector('main')
var app = document.createElement('div')
main.appendChild(app)

const initialState = {
  foods: [
    {id: 1, name: 'Shapes', flavour: 'Cheese and Bacon', rating: 0},
    {id: 2, name: 'Shapes', flavour: 'Pizza', rating: 0},
    {id: 3, name: 'Iced Animals Biscuits', flavour: 'various', rating: 4},
    {id: 4, name: 'Fairy Bread', flavour: 'sugar', rating: -50},
  ]
}

var store = redux.createStore(reducer, initialState)

store.subscribe(function () {
  var state = store.getState()
  var view = render(state, store.dispatch)
  morphdom(app, view)
})

store.dispatch({type: 'INIT'})

function render(state, dispatch) {
  return html`
    <div id="app">
      ${Foods(state.foods, dispatch)}
    </div>`
}
// document.body.appendChild(html`<h2>We are eating cheese and bacon shapes</h2>`)

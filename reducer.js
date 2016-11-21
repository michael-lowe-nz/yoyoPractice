const clone = require('clone')

module.exports = function reducer (state, action) {
  const newState = clone(state)

  switch (action.type) {
    case 'INIT':
      return newState
    case 'INCREMENT_RATING':
      newState.foods[action.payload].rating ++
      return newState
    case 'DECREMENT_RATING':
      newState.foods[action.payload].rating --
      return newState
    default: return newState
  }
}

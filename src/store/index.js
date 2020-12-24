import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  favorites: [],
  heroes: []
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case `ADD_FAVORITE`: 
      // console.log(action.payload.data, '<<<< ini di store index');
      const newFavorites = state.favorites.concat(action.payload.data)
      return {...state, favorites: newFavorites}
    case `SET_HEROES`:
      // console.log(action.payload.heroes, '<<<<< ini dari heroes di redux store');
      return {...state, heroes: action.payload.heroes}
    default: 
      return state
  }
}

let store = createStore(reducer, applyMiddleware(thunk))

export default store
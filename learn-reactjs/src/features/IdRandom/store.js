import { combineReducers, createStore } from 'redux'
import IdRandomReducer from './IdRandomReducer'

const rootReducer = combineReducers({
  idRandom: IdRandomReducer
})

const store = createStore(rootReducer)

store.subscribe(() => {
  console.log(store.getState())
})
// store.dispatch({ type: "add_IdRandom" })

export default store;
import { combineReducers, createStore } from 'redux'
import IdRandomReducer from './IdRandomReducer'
import numberReducer from './numberReducer'

const rootReducer = combineReducers({
  idRandom: IdRandomReducer,
  numberRe: numberReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
  console.log(store.getState())
})
// store.dispatch({ type: "add_IdRandom" })

export default store;
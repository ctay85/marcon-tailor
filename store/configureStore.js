
// Dependencies
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// Store
import rootReducer from 'store/reducers'

// Exports
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
}

// Core
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

// Create store
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export type AppState = ReturnType<typeof reducers>
export default store
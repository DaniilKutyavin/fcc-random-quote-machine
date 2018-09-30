import { createStore, applyMiddleware } from 'redux'
import rootReducer from './modules'
import middlewares from './middlewares'

export default createStore(rootReducer, applyMiddleware(...middlewares))

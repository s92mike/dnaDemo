import { createStore, applyMiddleware } from 'redux'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducers from './redux/reducers'

const middleware = applyMiddleware(thunk, promise(), createLogger())
export default createStore(reducers, middleware)

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers/rootReducer'
import logger from 'redux-logger'

const middleWare = [logger]

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;
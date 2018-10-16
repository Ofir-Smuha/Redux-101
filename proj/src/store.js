import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers/rootReducer'

const logger = store => next => action => {
  console.log("action:", action);
  next(action);
}

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;
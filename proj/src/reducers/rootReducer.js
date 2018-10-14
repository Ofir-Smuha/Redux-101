import { combineReducers } from 'redux';
import valueReducer from 'reducers/value/valueReducer';
import todosReducer from 'reducers/todos/todosReducer';

export default combineReducers({
  counter: valueReducer,
  todos: todosReducer,
});

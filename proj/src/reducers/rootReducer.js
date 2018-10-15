import { combineReducers } from 'redux';
import valueReducer from 'reducers/value/valueReducer';
import todosReducer from 'reducers/todos/todosReducer';
import visibilityFilter from 'reducers/todos/visibilityFilter';

export default combineReducers({
  counter: valueReducer,
  filter: visibilityFilter,
  todos: todosReducer
});

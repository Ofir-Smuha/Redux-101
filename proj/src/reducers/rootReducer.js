import { combineReducers } from 'redux';
import valueReducer from 'reducers/value/valueReducer';

export default combineReducers({
  counter: valueReducer
});

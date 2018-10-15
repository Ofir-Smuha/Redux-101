import { handleActions } from 'redux-actions';

const initialState = {
  filter: 'All',
};

export default handleActions({
  SET_FILTER: (state, action) => {
    return {filter: action.filter}
  }
}, initialState)
  
import {INC_COUNTER, SUB_COUNTER} from 'actions/types';

const initialState = {
  value: 0
};

const valueReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC_COUNTER:
    console.log('inc')
      return {
        value: state.value +1
      };
    case SUB_COUNTER:
    console.log('sub')
      return {
        value: state.value -1
      };
    default: 
      return state
  }
};

export default valueReducer;
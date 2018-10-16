import {ADD_TODO, EDIT_TODO} from 'actions/types';

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.todo.id,
        text: action.todo.text,
        completed: false
      }
    case EDIT_TODO: 
      if (state.id !== action.todo.id) {
        return state
      }
      
      return {
        ...action.todo
      }
  }
}

export default todoReducer
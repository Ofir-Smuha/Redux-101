import {ADD_TODO,DELETE_TODO, EDIT_TODO, OPEN_EDIT, CLOSE_EDIT} from 'actions/types';
import todo from './todoReducer'

const initialState = {
  openEdit: false,
  currTodo: null,
  todos: [
    {id: 12312312, text: 'homework' ,completed: false},
    {id: 231312, text: 'bath' ,completed: false},
    {id: 164312, text: 'cleaning' ,completed: false},
    {id: 7574457, text: 'washing' ,completed: false}
  ]
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, todo(undefined, action)],
        openEdit: false,
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(t => todo(t, action)),
        openEdit: false,
        currTodo: null,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    case OPEN_EDIT: 
      return {
        ...state,
        openEdit: true,
        currTodo: action.todo
      }
    case CLOSE_EDIT: 
    return {
      ...state,
      openEdit: false,
    }
    default: 
      return state
  }
};

export default todosReducer;
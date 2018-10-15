import { handleActions, combineActions} from 'redux-actions';
import {ADD_TODO, DELETE_TODO, EDIT_TODO, OPEN_EDIT, CLOSE_EDIT} from 'actions/types';
import { set } from 'lodash/fp';
import todo from './todoReducer'

const initialState = {
  openEdit: false,
  currTodo: null,
  todos: [
    {id: 12312312, text: 'homework' ,completed: true},
    {id: 231312, text: 'bath' ,completed: false},
    {id: 164312, text: 'cleaning' ,completed: true},
    {id: 7574457, text: 'washing' ,completed: false},
    {id: 23411, text: 'sleeping' ,completed: false}
  ]
};

export default handleActions({
  [combineActions(ADD_TODO, EDIT_TODO, CLOSE_EDIT)]:( state, payload) => {
    return {
      ...state,
      openEdit: false,
    }
  },
  ADD_TODO: (state, action) => 
    set('todos', [...state.todos, todo(undefined, action)], state)
  ,
  EDIT_TODO: (state, action) => ({
    ...state,
    todos: state.todos.map(t => todo(t, action)),
    currTodo: null,
  }),
  DELETE_TODO: (state, action) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== action.id) 
  }),
  OPEN_EDIT: (state, action) => ({
    ...state,
    openEdit: true,
    currTodo: action.todo
  }),
  CLOSE_EDIT: (state, action) => ({
    ...state,
  })}, initialState )

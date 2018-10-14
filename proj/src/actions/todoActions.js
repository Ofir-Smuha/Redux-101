import { ADD_TODO, DELETE_TODO, EDIT_TODO, OPEN_EDIT, CLOSE_EDIT } from 'actions/types';

// Dispatch add todo
export const addTodo = (todo) => {
  return (dispatch) => dispatch({
    type: ADD_TODO,
    todo: todo
  })
}

// Dispatch delete todo
export const deleteTodo = (todoId) => {
  return (dispatch) => dispatch({
    type: DELETE_TODO,
    id: todoId
  })
}

// Dispatch edit todo
export const editTodo = (todo) => {
  return (dispatch) => dispatch({
    type: EDIT_TODO,
    todo: todo
  })
}

// Dispatch open edit
export const openEdit = (todo) => {
  return (dispatch) => dispatch({
    type: OPEN_EDIT,
    todo: todo
  })
}

// Dispatch close edit
export const closeEdit = () => {
  return (dispatch) => dispatch({
    type: CLOSE_EDIT,
  })
}
import { ADD_TODO, DELETE_TODO, EDIT_TODO, OPEN_EDIT,
         CLOSE_EDIT, SET_FILTER} from 'actions/types';

// Dispatch add todo
export const addTodo = (todo) => {
  return ({
    type: ADD_TODO,
    todo: todo
  })
}

// Dispatch delete todo
export const deleteTodo = (todoId) => {
  return{
    type: DELETE_TODO,
    id: todoId
  }
}

// Dispatch edit todo
export const editTodo = (todo) => {
  return {
    type: EDIT_TODO,
    todo: todo
  }
}

// Dispatch open edit
export const openEdit = (todo) => {
  return {
    type: OPEN_EDIT,
    todo: todo
  }
}

// Dispatch close edit
export const closeEdit = () => {
  return {
    type: CLOSE_EDIT,
  }
}

// Dispatch filter
export const filterTodos = (filter) => {
  return {
    type: SET_FILTER,
    filter
  }
}


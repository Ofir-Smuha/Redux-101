import { ADD_TODO, DELETE_TODO, EDIT_TODO, OPEN_EDIT, CLOSE_EDIT, SET_FILTER} from 'actions/types';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    todo: todo
  })

export const deleteTodo = (todoId) => ({
    type: DELETE_TODO,
    id: todoId
  })

export const editTodo = (todo) => ({
    type: EDIT_TODO,
    todo: todo
  })

export const openEdit = (todo) => ({
    type: OPEN_EDIT,
    todo: todo
  })

export const closeEdit = () => ({
    type: CLOSE_EDIT,
  })

export const filterTodos = (filter) => ({
    type: SET_FILTER,
    filter
  })


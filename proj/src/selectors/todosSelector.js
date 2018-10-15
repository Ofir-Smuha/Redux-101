import { createSelector } from 'reselect'

const getVisibilityFilter = state => {
return state.filter.filter
}

const getTodos = state => state.todos.todos

const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch(visibilityFilter) {
      case 'All':
        return todos
      case 'Completed':
        return todos.filter(t => t.completed)
      case 'Active':
        return todos.filter(t => !t.completed)
    }
  }
)

export default getVisibleTodos
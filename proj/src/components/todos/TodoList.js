import React from 'react'
import PropTypes from 'prop-types'
import TodoPreview from './TodoPreview'

const TodoList = ({todos}) => {
  return (
    <ul>
      {todos && todos.map(todo => <TodoPreview todo={todo} key={todo.id}/>)}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array
}

export default TodoList;
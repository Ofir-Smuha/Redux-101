import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { openEdit, filterTodos } from 'actions/todoActions'
import getVisibleTodos from 'selectors/todosSelector'
import TodoList from './TodoList'
import EditTodo from './EditTodo'

class Todos extends Component {

  handleFilterTodos =(e) => {
    this.props.filterTodos(e.target.value)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.openEdit(null)}>ADD</button>
        <select onChange={this.handleFilterTodos}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Active">Active</option>
        </select>
        <TodoList todos={this.props.todos}/>
        <EditTodo/>
      </div>
    )
  }
}

Todos.propTypes = {
  todos: PropTypes.array
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state)
})

export default connect(mapStateToProps, { openEdit, filterTodos })(Todos)
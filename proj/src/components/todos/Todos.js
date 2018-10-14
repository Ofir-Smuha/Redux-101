import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { openEdit } from 'actions/todoActions'
import TodoList from './TodoList'
import EditTodo from './EditTodo'

class Todos extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.openEdit(null)}>ADD</button>
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
  todos: state.todos.todos
})

export default connect(mapStateToProps, { openEdit })(Todos)
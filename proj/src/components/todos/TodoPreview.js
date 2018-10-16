import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, openEdit} from "actions/todoActions";

const TodoPreview = (props) => {
  return (
    <div>
      <h3>{props.todo.text}</h3>
      <button onClick={() => props.deleteTodo(props.todo.id)}>delete</button>
      <button onClick={() => props.openEdit(props.todo)}>edit</button>
    </div>
  )
}

export default connect(null, {deleteTodo, openEdit})(TodoPreview)
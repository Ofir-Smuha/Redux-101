import React, { Component } from 'react';
import { connect } from 'react-redux'
import { get } from 'lodash/fp';
import uuid from 'uuid/v4'

import { closeEdit, addTodo, editTodo } from 'actions/todoActions';

class EditTodo extends Component {

  state = {
    text: get('currTodo.text', this.props)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currTodo !== this.props.currTodo) {
      if(this.props.currTodo) {
        this.setState({
          text: this.props.currTodo.text
        });
      }
    }
  }

  renderInput = () => {
    if (this.props.currTodo) {
      return <input type="text" value={this.state.text} onChange={this.updateValue}/>
    }
    return <input type="text" onChange={this.updateValue}/>
  }

  renderSubmit = () => {
    if (this.props.currTodo) {
      return <button onClick={this.onEditTodo}>Submit</button>
    }
    return <button onClick={this.onAddTodo}>Submit</button>
  }

  updateValue = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  onEditTodo = () => {
    const editedTodo = this.props.currTodo
    editedTodo.text = this.state.text
    this.props.editTodo(editedTodo)
  }

  onAddTodo = () => {
    const newTodo = {
      id: uuid(),
      completed: false,
      text: this.state.text
    }
    this.props.addTodo(newTodo)
    
  }

  render() {
    if (!this.props.openEdit) {
      return null;
    }

    return (
      <div>
        <label>Text</label>
        {this.renderInput()}
        {this.renderSubmit()}
        <button onClick={this.props.closeEdit}>X</button>
      </div>
    )
  };
};

const mapStateToProps = state => ({
  currTodo: state.todos.currTodo,
  openEdit: state.todos.openEdit
})

export default connect(mapStateToProps, { closeEdit, addTodo, editTodo })(EditTodo);
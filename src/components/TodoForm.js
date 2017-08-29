import React from 'react';
import { connect } from 'react-redux';
import { updateCurrent, saveTodo } from '../reducers/todo';

const TodoForm = ({currentInputTodoText, updateCurrent, saveTodo}) => {

  const handleInputChange = (evt) => {
    const val = evt.target.value;
    updateCurrent(val);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    saveTodo(currentInputTodoText);
  }

  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
      <input type='text'
        value={currentInputTodoText}
        onChange={handleInputChange} />
      </form>
  );

};

export default connect(
  state => ({currentInputTodoText: state.todo.currentInputTodoText }),
  {updateCurrent, saveTodo}
)(TodoForm);

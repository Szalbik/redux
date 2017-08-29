import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, toggleTodo, deleteTodo, getVisibleTodos } from '../reducers/todo';

const TodoItem = ({id, name, completed, toggleTodo, deleteTodo}) => (
  <li>
    <input type='checkbox' checked={completed} onChange={() => toggleTodo(id)} />
    {name}
    <button className='todoButton' onClick={()=>deleteTodo(id)}>&#10006;</button>
  </li>
);

class TodoList extends Component {
  componentWillMount() {
    this.props.fetchTodos(this.props.todos)
  }

  render() {
    return (
      <ul className="TodoList">
        {this.props.todos.map(todo => <TodoItem deleteTodo={this.props.deleteTodo} toggleTodo={this.props.toggleTodo} key={todo.id} {...todo} />)}
      </ul>
    );
  }
}

export default connect(
  (state, ownProps) => ({ todos: getVisibleTodos(state.todo.todos, ownProps.filter) }),
  {fetchTodos, toggleTodo, deleteTodo}
)(TodoList);

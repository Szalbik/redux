import {getTodos, createTodo, updateTodo, destroyTodo} from '../lib/todoServices';
import {showMessage} from './messages';

const initState = {
  todos: [],
  currentInputTodoText: '',
}

export const updateCurrent = (val) => ({type: 'CURRENT_UPDATE', payload: val});
const loadTodos = (todos) => ({type: 'LOAD_TODOS', payload: todos});
const addTodo = (todo) => ({type: "ADD_TODO", payload: todo});
const replaceTodo = (todo) => ({type: "TOGGLE_TODO", payload: todo});
const removeTodo = (id) => ({type: "DELETE_TODO", payload: id});
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(showMessage('Loading todos'));
    getTodos()
      .then((todos) => dispatch(loadTodos(todos)))
  }
}
export const saveTodo = (name) => {
  return (dispatch) => {
    dispatch(showMessage('Adding todo'));
    createTodo(name)
      .then(res => dispatch(addTodo(res)))
  }
}
export const toggleTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(showMessage('Toggling todo'));
    const {todos} = getState().todo;
    const todo = todos.find(t => t.id === id)
    const toggled = {...todo, completed: !todo.completed}
    updateTodo(toggled)
      .then(res => dispatch(replaceTodo(res)))
  }
}
export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch(showMessage("Deleting todo"))
    destroyTodo(id)
      .then(() => dispatch(removeTodo(id)))
  }
}

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'active':
      return todos.filter(t => !t.completed)
    case 'completed':
      return todos.filter(t => t.completed)
    default:
      return todos;
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {...state, todos: state.todos.concat(action.payload), currentInputTodoText: ''}
    case "CURRENT_UPDATE":
      return {...state, currentInputTodoText: action.payload}
    case "LOAD_TODOS":
      return {...state, todos: action.payload}
    case "TOGGLE_TODO":
      return {...state,
        todos: state.todos
          .map(t => t.id === action.payload.id ? action.payload : t)
        }
    case "DELETE_TODO":
      return {...state,
        todos: state.todos
          .filter(t => t.id !== action.payload)
        }
    default:
      return state;
  }
}

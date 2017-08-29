import todoReducer from './reducers/todo';
import msgReducer from './reducers/messages';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  todo: todoReducer,
  message: msgReducer
})

let store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
));

export default store;

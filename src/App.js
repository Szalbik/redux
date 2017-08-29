import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Messages from './components/Messages';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with Redux.</h2>
        </div>

        {/* Todo App  */}
        <Router>
          <div className='TodoApp'>
            <Messages message='' />
            <TodoForm />
            <Route path='/:filter?' render={(props) => (
              <TodoList filter={props.match.params.filter} />
            )} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

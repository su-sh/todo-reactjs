import React, { Component } from 'react';
import './App.css';

import Home from './component/Home';
import Completed from './component/Completed';
import Remaining from './component/Remaining';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          id: 123,
          content: 'create react app',
          completed: false
        },
        {
          id: 124,
          content: 'create java app',
          completed: true
        }
      ],
      currentView: 'home'
    };
  }

  render() {
    let currentView = this.state.currentView;

    return (
      <div>
        {/* Header */}
        <div>
          {/* tabs */}
          <div>
            <ul>
              <li onClick={() => this.setState({ currentView: 'home' })}>
                Home
              </li>
              <li onClick={() => this.setState({ currentView: 'completed' })}>
                Completed
              </li>
              <li onClick={() => this.setState({ currentView: 'remaining' })}>
                Remaining
              </li>
            </ul>
          </div>
        </div>

        {/* Body */}
        {currentView === 'home' && (
          <Home
            addTodoItem={this.addTodoItem}
            todoList={this.state.todoList}
            toggleTodoItemCompleted={this.toggleTodoItemCompleted}
            deleteTodoItem={this.deleteTodoItem}
          />
        )}
        {currentView === 'remaining' && <Remaining />}
        {currentView === 'completed' && <Completed />}
      </div>
    );
  }

  addTodoItem = todoContent => {
    let todoList = this.state.todoList,
      newId = Date.now(),
      todo = {
        id: newId,
        content: todoContent,
        completed: false
      };

    todoList.push(todo);

    this.setState(todoList);
  };

  deleteTodoItem = id => {
    const todoList = this.state.todoList.filter(todoItem => {
      if (todoItem.id !== id) {
        return todoItem;
      }

      return null;
    });

    this.setState({ todoList });
  };

  toggleTodoItemCompleted = id => {
    const todoList = this.state.todoList.filter(todoItem => {
      if (todoItem.id === id) {
        todoItem.completed = !todoItem.completed;
      }

      return todoItem;
    });

    this.setState({ todoList });
  };
}

export default App;

import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import Container from './component/Container';
import AddTodoInput from './component/AddTodoInput';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todoList: [],
      currentView: 'home'
    };
  }

  render() {
    let currentView = this.state.currentView;

    return (
      <div className='main-container__div'>
        {/* Header */}
        <div className='header_container__div'>
          {/* tabs */}
          <div className='logo_title'>
            <div className='logo'>
              <img alt='logo' src={logo} />
            </div>
            <div className='title'>TO-DO</div>
          </div>

          <div className='tab-container'>
            <div
              className='tab'
              onClick={() => this.setState({ currentView: 'home' })}
            >
              Home
            </div>
            <div
              className='tab'
              onClick={() => this.setState({ currentView: 'completed' })}
            >
              Completed
            </div>
            <div
              className='tab'
              onClick={() => this.setState({ currentView: 'remaining' })}
            >
              Remaining
            </div>
          </div>

          <AddTodoInput addTodoItem={this.addTodoItem} />
        </div>

        <div className='div_container__div'>
          {/* Body */}
          {currentView === 'home' && (
            <Container
              todoList={this.state.todoList}
              toggleTodoItemCompleted={this.toggleTodoItemCompleted}
              deleteTodoItem={this.deleteTodoItem}
              editTodoItem={this.editTodoItem}
            />
          )}
          {currentView === 'remaining' && (
            <Container
              todoList={this.getItemList(false)}
              toggleTodoItemCompleted={this.toggleTodoItemCompleted}
              deleteTodoItem={this.deleteTodoItem}
              editTodoItem={this.editTodoItem}
            />
          )}
          {currentView === 'completed' && (
            <Container
              todoList={this.getItemList(true)}
              toggleTodoItemCompleted={this.toggleTodoItemCompleted}
              deleteTodoItem={this.deleteTodoItem}
              editTodoItem={this.editTodoItem}
            />
          )}
        </div>
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

  editTodoItem = (id, content) => {
    const todoList = this.state.todoList.filter(todoItem => {
      if (todoItem.id === id) {
        todoItem.content = content;

        return todoItem;
      }

      return todoItem;
    });

    this.setState({ todoList });
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

  // gets completed or incompleted list of items
  getItemList = isCompleted => {
    let todoList = this.state.todoList;
    let remainingList = todoList.filter(todoItem => {
      if (todoItem.completed === isCompleted) {
        return todoItem;
      }

      return null;
    });

    return remainingList;
  };

  componentDidUpdate = () => {
    let arrayList = this.state.todoList;
    localStorage.setItem('todoList', JSON.stringify(arrayList));
  };

  componentDidMount = () => {
    let todoList = JSON.parse(localStorage.getItem('todoList'));
    this.setState({
      todoList
    });
  };

}

export default App;

import React, { Component } from 'react';
import './App.css';
import Container from './component/Container';
import AddTodoInput from './component/AddTodoInput';
import Header from './component/Header';
import Tabs from './component/Tabs';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todoList: [],
      currentView: 'home'
    };
  }

  render() {
    return (
      <div className='main-container__div'>
        <div className='header_container__div'>
          {/* Header */}
          <Header />

          {/* Tabs */}
          <Tabs setCurrentView={this.setCurrentView} />

          {/* Body */}
          <AddTodoInput addTodoItem={this.addTodoItem} />
        </div>

        <div className='div_container__div'>
          {/* Body */}
          <Container
            todoList={this.getTodoProps()}
            toggleTodoItemCompleted={this.toggleTodoItemCompleted}
            deleteTodoItem={this.deleteTodoItem}
            editTodoItem={this.editTodoItem}
          />
        </div>
      </div>
    );
  }

  getTodoProps = () => {
    let todoList;

    switch (this.state.currentView) {
      case 'home':
        todoList = this.state.todoList;
        break;
      case 'remaining':
        todoList = this.getItemList(false);
        break;
      case 'completed':
        todoList = this.getItemList(true);
        break;
      default:
    }

    return todoList;
  };

  addTodoItem = todoContent => {
    let newId = Date.now();

    let todo = {
      id: newId,
      content: todoContent,
      completed: false
    };

    let todoList = [...this.state.todoList, todo];
    this.setState({ todoList });
  };

  editTodoItem = (id, content) => {
    let newTodoList = this.state.todoList.map(item => ({ ...item }));

    const todoList = newTodoList.filter(todoItem => {
      if (todoItem.id === id) {
        todoItem.content = content;

        return todoItem;
      }

      return todoItem;
    });

    this.setState({ todoList });
  };

  deleteTodoItem = id => {
    let newTodoList = this.state.todoList.map(item => ({ ...item }));

    const todoList = newTodoList.filter(todoItem => {
      if (todoItem.id !== id) {
        return todoItem;
      }

      return null;
    });

    this.setState({ todoList });
  };

  toggleTodoItemCompleted = id => {
    let newTodoList = this.state.todoList.map(item => ({ ...item }));

    const todoList = newTodoList.filter(todoItem => {
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

  setCurrentView = view => {
    this.setState({
      currentView: view
    });
  };

  componentDidUpdate = () => {
    let arrayList = this.state.todoList;
    localStorage.setItem('todoList', JSON.stringify(arrayList));
  };

  componentDidMount = () => {
    let todoList = JSON.parse(localStorage.getItem('todoList'));

    if (todoList !== null) {
      this.setState({
        todoList
      });
    }
  };

}

export default App;

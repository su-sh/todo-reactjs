import React, { Component } from 'react';

import Tabs from './component/Tabs';
import Header from './component/Header';
import Container from './component/Container';
import SearchTodo from './component/SearchTodo';
import AddTodoInput from './component/AddTodoInput';

import './App.css';

const TABS = {
  HOME: 'home',
  REMAINING: 'remaining',
  COMPLETED: 'completed'
};
class App extends Component {

  constructor() {
    super();

    this.state = {
      todoList: [],
      activeTab: 'home',
      searchString: ''
    };
  }

  getTodoProps = () => {
    let todoList;

    switch (this.state.activeTab) {
      case TABS.HOME:
        todoList = this.getFilteredSearchItem(this.state.todoList);
        break;
      case TABS.REMAINING:
        todoList = this.getItemList(false);
        break;
      case TABS.COMPLETED:
        todoList = this.getItemList(true);
        break;
      default:
    }

    return todoList;
  };

  setCurrentView = view => {
    this.setState({
      activeTab: view
    });
  };

  addTodoItem = todoContent => {
    let newId = Date.now();

    const todo = {
      id: newId,
      content: todoContent,
      completed: false
    };

    const todoList = [todo, ...this.state.todoList];
    this.setState({ todoList });
  };

  editTodoItem = (id, content) => {
    const newTodoList = this.state.todoList.map(item => ({ ...item }));

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
    const newTodoList = this.state.todoList.map(item => ({ ...item }));

    const todoList = newTodoList.filter(todoItem => {
      if (todoItem.id !== id) {
        return todoItem;
      }

      return null;
    });

    this.setState({ todoList });
  };

  toggleTodoItemCompleted = id => {
    const newTodoList = this.state.todoList.map(item => ({ ...item }));

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
    const todoList = this.state.todoList;

    let returnList = todoList.filter(todoItem => {
      if (todoItem.completed === isCompleted) {
        return todoItem;
      }

      return null;
    });
    returnList = this.getFilteredSearchItem(returnList);

    return returnList;
  };

  changeSearchString = e => {
    const searchString = e.target.value;
    this.setState({
      searchString
    });
  };

  checkEmptySearch = () => {
    const checkString = this.state.searchString.trim();
    if (checkString.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  getFilteredSearchItem(todoList) {
    let returnList = todoList;

    if (!this.checkEmptySearch()) {
      returnList = todoList.filter(todoItem => {
        if (todoItem.content.includes(this.state.searchString)) {
          return todoItem;
        }

        return null;
      });
    }

    return returnList;
  }

  componentDidUpdate = () => {
    const arrayList = this.state.todoList;

    localStorage.setItem('todoList', JSON.stringify(arrayList));
  };

  componentDidMount = () => {
    const todoList = JSON.parse(localStorage.getItem('todoList'));

    if (todoList !== null) {
      this.setState({
        todoList
      });
    }
  };

  render() {
    return (
      <div className="main-container">
        <div className="header_container">
          <Header />

          <Tabs setCurrentView={this.setCurrentView} />

          <SearchTodo changeSearchString={this.changeSearchString} />

          <AddTodoInput addTodoItem={this.addTodoItem} />
        </div>

        <div className="div_container">
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

}

export default App;

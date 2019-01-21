import React, { Component } from 'react';

import Tabs from './component/Tabs';
import Header from './component/Header';
import Container from './component/Container';
import TABS from './constants/commonConstants';
import SearchTodo from './component/SearchTodo';
import AddTodoInput from './component/AddTodoInput';

import './App.css';

/**
 * This class holds overall components and logic of the application
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * Creates an instance of App.
   *
   * @memberof App
   */
  constructor() {
    super();

    this.state = {
      todoList: [],
      activeTab: TABS.HOME,
      searchString: ''
    };
  }

  /**
   * It returns the filtered todoList according to current active tab
   *
   * @returns {array} TodoList.
   */
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

  /**
   * It sets activeTab.
   *
   * @param {boolean} view
   */
  setCurrentView = view => {
    this.setState({
      activeTab: view
    });
  };

  /**
   * It adds new todoItem to state's todoList.
   *
   * @param {string} todoContent It is the content of the todo item.
   * @memberof App
   */
  addTodoItem = todoContent => {
    const newId = Date.now();

    const todo = {
      id: newId,
      content: todoContent,
      completed: false
    };

    const todoList = [todo, ...this.state.todoList];

    this.setState({ todoList });
  };

  /**
   * It edits the todo item from the state.
   *
   * @param {number} id It is the id of the todo item.
   * @param {string} content It is the content of the todo item
   * @memberof App
   */
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

  /**
   * It deletes todo item.
   *
   * @param {number} id
   * @memberof App It is the id of the todo item
   */
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

  /**
   * It toggles todoItem's completed property.
   *
   * @param {number} id
   * @memberof App
   */
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

  /**
   * It returns filtered todoList according to todo item's completed status.
   *
   * @param {boolean} isCompleted
   * @returns {array}
   * @memberof App
   */
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

  /**
   * It changes current search string in the state.
   *
   * @param {object} event
   * @memberof App
   */
  changeSearchString = e => {
    const searchString = e.target.value;

    this.setState({
      searchString
    });
  };

  /**
   * It checks for empty searchString is empty in the state.
   *
   * @returns {boolean}
   * @memberof App
   */
  checkEmptySearch = () => {
    const checkString = this.state.searchString.trim();

    return checkString.length === 0;
  };

  /**
   * It returns todoList search according to searchString.
   *
   * @param {array} todoList
   * @returns {array}
   * @memberof App
   */
  getFilteredSearchItem = todoList => {
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
  };

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

  /**
   *
   *
   * @returns {*}
   * @memberof App
   */
  render() {
    return (
      <div className="main-container">
        <div className="header_container">
          <Header />

          <Tabs
            setCurrentView={this.setCurrentView}
            activeTab={this.state.activeTab}
          />

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

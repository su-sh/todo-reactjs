import React, { Component } from 'react';

import Tabs from './component/Tabs';
import Header from './component/Header';
import Container from './component/Container';
import TABS from './constants/commonConstants';
import SearchTodo from './component/SearchTodo';
import AddTodoInput from './component/AddTodoInput';

import './App.css';

/**
 * This is Class.
 *
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
   * Returns todoList.
   *
   * @returns {array}
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
   * Sets activeTab.
   *
   * @param {boolean} view
   */
  setCurrentView = view => {
    this.setState({
      activeTab: view
    });
  };

  /**
   * This function adds new todo item to states todoList.
   *
   * @param {string} todoContent
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
   * This function edits todo item.
   *
   * @param {number} id
   * @param {string} content
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
   * This function deletes todo item.
   *
   * @param {number} id
   * @memberof App
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
   * This function toggles todoItem's completed property item.
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
   * This returns filtered todoList by completed status.
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
   *
   * @param {object} e
   * @memberof App
   */
  changeSearchString = e => {
    const searchString = e.target.value;

    this.setState({
      searchString
    });
  };

  /**
   *
   * @returns {boolean}
   * @memberof App
   */
  checkEmptySearch = () => {
    const checkString = this.state.searchString.trim();

    return checkString.length === 0;
  };

  /**
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

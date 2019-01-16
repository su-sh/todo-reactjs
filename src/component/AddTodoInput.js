import PropTypes from 'prop-types';
import React, { Component } from 'react';

import '../App.css';
import addImg from '../assets/add.png';

/**
 *
 *
 * @class AddTodoInput
 * @extends {Component}
 */
class AddTodoInput extends Component {
  /**
   * Creates an instance of AddTodoInput.
   *
   * @memberof AddTodoInput
   */
  constructor() {
    super();

    this.state = {
      todoContent: ''
    };
  }

  /**
   *
   * @param {object} e
   * @memberof AddTodoInput
   */
  updateStateContent = e => {
    const todoContent = e.target.value;

    this.setState({
      todoContent
    });
  };

  /**
   *
   * @param {object} e
   * @memberof AddTodoInput
   */
  checkEnterPressed = e => {
    if (e.key === 'Enter') {
      this.addTodo();
    }
  };

  /**
   *
   * @memberof AddTodoInput
   */
  addTodo = () => {
    if (this.state.todoContent.trim() !== '') {
      this.props.addTodoItem(this.state.todoContent);
      this.setState({
        todoContent: ''
      });
    }
  };

  /**
   *
   *
   * @returns {*}
   * @memberof AddTodoInput
   */
  render() {
    return (
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add TO-DO"
          value={this.state.todoContent}
          onKeyUp={this.checkEnterPressed}
          onChange={this.updateStateContent}
        />

        <button onClick={this.addTodo}>
          <img src={addImg} alt="add" title="Add Button" />
        </button>
      </div>
    );
  }
}

AddTodoInput.propTypes = {
  name: PropTypes.string
};

export default AddTodoInput;

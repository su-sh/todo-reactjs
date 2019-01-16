import React, { Component } from 'react';

import '../App.css';
import addImg from '../assets/add.png';

/**
 * This holds overall component logic of add todo input.
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
   * It updates todoContent in state.
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
   * It checks if enter is pressed and if pressed invokes addTodo.
   *
   *
   * @param {object} event
   * @memberof AddTodoInput
   */
  checkEnterPressed = e => {
    if (e.key === 'Enter') {
      this.addTodo();
    }
  };

  /**
   * It addsTodo by invoking addTodoItem function obtained from props.
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

export default AddTodoInput;

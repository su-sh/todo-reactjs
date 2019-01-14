import React, { Component } from 'react';

import '../App.css';
import addImg from '../assets/add.png';

class AddTodoInput extends Component {

  constructor() {
    super();

    this.state = {
      todoContent: ''
    };
  }

  updateStateContent = e => {
    const todoContent = e.target.value;
    this.setState({
      todoContent
    });
  };

  checkEnterPressed = e => {
    if (e.key === 'Enter') {
      this.addTodo();
    }
  };

  addTodo = () => {
    if (this.state.todoContent.trim() !== '') {
      this.props.addTodoItem(this.state.todoContent);
      this.setState({
        todoContent: ''
      });
    }
  };

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

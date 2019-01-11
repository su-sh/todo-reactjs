import '../App.css';
import React, { Component } from 'react';
import addImg from '../add.png';

class AddTodoInput extends Component {
  constructor() {
    super();

    this.state = {
      todoContent: ''
    };
  }

  render() {
    return (
      <div className='add-todo'>
        <input
          type='text'
          placeholder='Add a to-do'
          value={this.state.todoContent}
          onKeyUp={this.checkEnterPressed}
          onChange={this.updateStateContent}
        />
        <button
          onClick={() => {
            this.addTodo();
          }}
        >
          <img src={addImg} alt='add' />
        </button>
      </div>
    );
  }

  updateStateContent = e => {
    let todoContent = e.target.value;
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
    if (this.state.todoContent !== '') {
      this.props.addTodoItem(this.state.todoContent);
      this.setState({
        todoContent: ''
      });
    }

    // console.log(this.props.firstName);
  };
}

export default AddTodoInput;

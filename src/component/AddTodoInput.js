import React, { Component } from 'react';
import '../App.css';
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
          value={this.state.todoContent}
          onKeyUp={this.checkEnterPressed}
          onChange={e => this.updateStateContent(e)}
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
  };
}

export default AddTodoInput;

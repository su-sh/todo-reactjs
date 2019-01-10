import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todoContent: ''
    };
  }

  render() {
    let todoList = this.props.todoList;
    let completedCss = '';

    const todoListEl = todoList.length ? (
      todoList.map(todoItem => {
        todoItem.completed
          ? (completedCss = 'todoItem todoItem-completed')
          : (completedCss = 'todoItem');

        return (
          <div key={todoItem.id} className={completedCss}>
            <span onClick={() => this.handelToggle(todoItem.id)}>
              {todoItem.content}
            </span>

            <button onClick={() => this.handleDelete(todoItem.id)}>
              Delete
            </button>
          </div>
        );
      })
    ) : (
      <div>No todo item</div>
    );

    return (
      <div>
        Home
        {/* Input */}
        <div>
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
            BTN
          </button>
        </div>
        {/* TodoList */}
        <div>
          List
          {todoListEl}
        </div>
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

  // listItem
  handleDelete = id => {
    this.props.deleteTodoItem(id);
  };

  handelToggle = id => {
    this.props.toggleTodoItemCompleted(id);
  };
}

export default Home;

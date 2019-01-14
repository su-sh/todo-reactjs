import React, { Component } from 'react';

import '../App.css';

class ListItem extends Component {

  constructor() {
    super();
    this.state = {
      edit: false,
      editedTodoContent: ''
    };
  }

  updateStateContent = e => {
    const editedTodoContent = e.target.value;
    this.setState({
      editedTodoContent
    });
  };

  handleSave = () => {
    const todoItemId = this.props.todoItem.id;
    if (this.state.editedTodoContent.trim() !== '') {
      this.props.editTodoItem(todoItemId, this.state.editedTodoContent);
      this.setEdit(false);
    } else {
      alert('Please change your todo content. \nOr press cancel button.');
    }
  };

  deleteItem = () => {
    this.props.deleteTodoItem(this.props.todoItem.id);
  };

  setEdit = bool => {
    this.setState({
      edit: bool
    });
  };

  handelEscEnterPress = e => {
    if (e.key === 'Enter') {
      this.handleSave();
    }
    if (e.key === 'Escape') {
      this.setEdit(false);
    }
  };

  render() {
    const todoItem = this.props.todoItem;

    if (!this.state.edit) {
      return (
        <TodoItemElement
          todoItem={todoItem}
          setEdit={this.setEdit}
          deleteItem={this.deleteItem}
          toggleTodoItemCompleted={this.props.toggleTodoItemCompleted}
        />
      );
    } else {
      return (
        <EditTodo
          todoItem={todoItem}
          updateStateContent={this.updateStateContent}
          handleSave={this.handleSave}
          setEdit={this.setEdit}
          handelEscEnterPress={this.handelEscEnterPress}
        />
      );
    }
  }

}

export default ListItem;

const EditTodo = props => {
  const {
    todoItem,
    updateStateContent,
    handleSave,
    setEdit,
    handelEscEnterPress
  } = props;

  return (
    <div onKeyUp={handelEscEnterPress}>
      <div className="list-item clearfix">
        <div className="left edit-list-item">
          <input
            type="text"
            defaultValue={todoItem.content}
            onChange={e => updateStateContent(e)}
          />
        </div>

        <div className="right clearfix edit-cancel">
          <div className="left">
            <button
              className="delete-edit-button"
              title="Save"
              onClick={handleSave}
            >
              <i className="material-icons">save</i>
            </button>
          </div>

          <div className="right">
            <button
              title="Cancel"
              className="delete-edit-button"
              onClick={() => {
                setEdit(false);
              }}
            >
              <i className="material-icons">cancel</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// TodoItemElement Functional Component
const TodoItemElement = props => {
  const { todoItem, setEdit, deleteItem, toggleTodoItemCompleted } = props;

  const completedCss = todoItem.completed
    ? 'todoItem todoItem-completed'
    : 'todoItem';

  return (
    <div className="list-item clearfix">
      <input
        className="left"
        type="checkbox"
        checked={todoItem.completed}
        onChange={() => {
          toggleTodoItemCompleted(todoItem.id);
        }}
      />

      <div
        className={completedCss + ' left'}
        onClick={() => {
          toggleTodoItemCompleted(todoItem.id);
        }}
      >
        {todoItem.content}
      </div>

      <div className={'right clearfix'}>
        <button
          className="delete-edit-button"
          title="Edit"
          onClick={() => {
            setEdit(true);
          }}
        >
          <i className="material-icons">edit</i>
        </button>

        <button
          className="delete-edit-button"
          title="Delete"
          onClick={deleteItem}
        >
          <i className="material-icons">delete</i>
        </button>
      </div>
    </div>
  );
};

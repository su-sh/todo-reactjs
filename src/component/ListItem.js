import React, { Component } from 'react';

import '../App.css';

/**
 *
 *
 * @class ListItem
 * @extends {Component}
 */
class ListItem extends Component {

  /**
   * Creates an instance of ListItem.
   *
   * @memberof ListItem
   */
  constructor() {
    super();
    this.state = {
      edit: false,
      editedTodoContent: ''
    };
  }

  /**
   *
   * @param {object} e
   * @memberof ListItem
   */
  updateStateContent = e => {
    const editedTodoContent = e.target.value;

    this.setState({
      editedTodoContent
    });
  };

  /**
   *
   *
   * @memberof ListItem
   */
  handleSave = () => {
    const todoItemId = this.props.todoItem.id;

    if (this.state.editedTodoContent.trim() !== '') {
      this.props.editTodoItem(todoItemId, this.state.editedTodoContent);
      this.setEdit(false);
    } else {
      alert('Please change your todo content. \nOr press cancel button.');
    }
  };

  /**
   *
   * @param {object} e
   * @memberof ListItem
   */
  deleteItem = e => {
    e.stopPropagation();
    this.props.deleteTodoItem(this.props.todoItem.id);
  };

  /**
   *
   * @param {boolean} bool
   * @memberof ListItem
   */
  setEdit = bool => {
    this.setState({
      edit: bool
    });
  };

  /**
   *
   * @param {object} e
   * @memberof ListItem
   */
  handleEscEnterPress = e => {
    if (e.key === 'Enter') {
      this.handleSave();
    }
    if (e.key === 'Escape') {
      this.setEdit(false);
    }
  };

  /**
   *
   *
   * @returns {*}
   * @memberof ListItem
   */
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
          handleEscEnterPress={this.handleEscEnterPress}
        />
      );
    }
  }

}

export default ListItem;

/**
 *
 *
 * @param {object} props
 * @returns {*}
 */
const EditTodo = props => {
  const {
    todoItem,
    updateStateContent,
    handleSave,
    setEdit,
    handleEscEnterPress
  } = props;

  return (
    <div onKeyUp={handleEscEnterPress}>
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
              onClick={e => {
                e.stopPropagation();
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

/**
 * TodoItemElement Functional Component.
 *
 * @param {object} props
 * @returns {*}
 */
const TodoItemElement = props => {
  const { todoItem, setEdit, deleteItem, toggleTodoItemCompleted } = props;

  const completedCss = todoItem.completed
    ? 'todoItem todoItem-completed'
    : 'todoItem';

  return (
    <div
      className="list-item clearfix"
      onClick={() => {
        toggleTodoItemCompleted(todoItem.id);
      }}
    >
      <input
        className="left"
        type="checkbox"
        onChange={() => {}}
        checked={todoItem.completed}
      />

      <div className={completedCss + ' left'}>{todoItem.content}</div>

      <div className={'right clearfix'}>
        <button
          className="delete-edit-button"
          title="Edit"
          onClick={e => {
            e.stopPropagation();
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

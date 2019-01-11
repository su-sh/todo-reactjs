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

  render() {
    // props.data
    let todoItem = this.props.todoItem;

    // condition for edit
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
          cancelEdit={this.cancelEdit}
        />
      );
    }
  }

  updateStateContent = e => {
    let editedTodoContent = e.target.value;
    this.setState({
      editedTodoContent
    });
  };

  handleSave = todoItem => {
    if (this.state.editedTodoContent !== '') {
      this.props.editTodoItem(todoItem.id, this.state.editedTodoContent);
      this.setState({
        edit: false
      });
    } else {
      alert('Please change your todo content. \nOr press cancel button.');
    }
  };

  deleteItem = () => {
    this.props.deleteTodoItem(this.props.todoItem.id);
  };

  cancelEdit = () => {
    this.setState({
      edit: false
    });
  };

  setEdit = bool => {
    this.setState({
      edit: bool
    });
  };

}

export default ListItem;

// EditTodo Functional Component
const EditTodo = props => {
  let { todoItem, updateStateContent, handleSave, cancelEdit } = props;

  return (
    <div>
      <div className='list-item clearfix'>
        <div className='left edit-list-item'>
          <input
            type='text'
            defaultValue={todoItem.content}
            onChange={e => updateStateContent(e)}
          />
        </div>

        {/* save or cancel */}
        <div className='right clearfix'>
          <div className='left'>
            <button
              className='delete-edit-button'
              title='Save'
              onClick={() => {
                handleSave(todoItem);
              }}
            >
              <i className='material-icons'>save</i>
            </button>
          </div>

          <div className='right'>
            <button
              title='Edit'
              className='delete-edit-button'
              onClick={() => {
                cancelEdit();
              }}
            >
              <i className='material-icons'>cancel</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// TodoItemElement Functional Component
const TodoItemElement = props => {
  let { todoItem, setEdit, deleteItem, toggleTodoItemCompleted } = props;

  let completedCss = '';
  todoItem.completed
    ? (completedCss = 'todoItem todoItem-completed')
    : (completedCss = 'todoItem');

  return (
    <div className='list-item clearfix'>
      <input
        className='left'
        type='checkbox'
        checked={todoItem.completed}
        onClick={() => {
          toggleTodoItemCompleted(todoItem.id);
        }}
      />

      <div className={completedCss + ' left'}>{todoItem.content}</div>

      <div className={'right clearfix'}>
        <button
          className='delete-edit-button'
          title='Edit'
          onClick={() => {
            setEdit(true);
          }}
        >
          <i className='material-icons'>edit</i>
        </button>

        <button
          className='delete-edit-button'
          title='Delete'
          onClick={deleteItem}
        >
          <i className='material-icons'>delete</i>
        </button>
      </div>
    </div>
  );
};

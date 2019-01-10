import React, { Component } from 'react';
import '../App.css';

// props = todoitem
const ListItem = props => {
  let todoItem = props.todoItem;
  // props.data
  console.log('from listItem', todoItem);
  let completedCss = '';
  todoItem.completed
    ? (completedCss = 'todoItem todoItem-completed')
    : (completedCss = 'todoItem');

  return (
    <div className='list-item clearfix'>
      <input
        className='left'
        type='checkbox'
        onChange={() => {}}
        checked={todoItem.completed}
        onClick={() => {
          props.toggleTodoItemCompleted(todoItem.id);
        }}
      />

      <div className={completedCss + ' left'}>{todoItem.content}</div>

      <div className={'right clearfix'}>
        <button
          onClick={() => {
            console.log('edited');
          }}
        >
          Edit
        </button>

        <button
          className='delete-button'
          onClick={() => props.deleteTodoItem(todoItem.id)}
        >
          Delete
        </button>
      </div>

      <br />
    </div>
  );
};

export default ListItem;

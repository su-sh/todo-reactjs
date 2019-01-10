import React from 'react';
import ListItem from './ListItem';

const Remaining = props => {
  let todoList = props.todoList;
  const todoListEl = todoList.length ? (
    todoList.map(todoItem => {
      return (
        <ListItem
          key={todoItem.id}
          todoItem={todoItem}
          toggleTodoItemCompleted={props.toggleTodoItemCompleted}
          deleteTodoItem={props.deleteTodoItem}
        />
      );
    })
  ) : (
    <div>No todo item</div>
  );

  return (
    <div>
      Remaining
      {todoListEl}
    </div>
  );
};

export default Remaining;

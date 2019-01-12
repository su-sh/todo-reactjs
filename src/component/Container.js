import React from 'react';

import ListItem from './ListItem';

const Container = props => {
  let {
    todoList,
    toggleTodoItemCompleted,
    deleteTodoItem,
    editTodoItem
  } = props;

  const todoListEl = todoList.length ? (
    todoList.map(todoItem => {
      return (
        <ListItem
          key={todoItem.id}
          todoItem={todoItem}
          toggleTodoItemCompleted={toggleTodoItemCompleted}
          deleteTodoItem={deleteTodoItem}
          editTodoItem={editTodoItem}
        />
      );
    })
  ) : (
    <div>No todo item</div>
  );

  return <div>{todoListEl}</div>;
};

export default Container;

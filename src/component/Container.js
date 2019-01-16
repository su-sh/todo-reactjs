import React from 'react';

import ListItem from './ListItem';

/**
 * It renders TodoList.
 *
 * @param {object} props
 * @returns {object}
 */
const Container = props => {
  const {
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

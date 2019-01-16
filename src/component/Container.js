import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

/**
 * Displays TodoList.
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

Container.propTypes = {
  todoList: PropTypes.array,
  toggleTodoItemCompleted: PropTypes.func,
  deleteTodoItem: PropTypes.func,
  editTodoItem: PropTypes.func
};

export default Container;
